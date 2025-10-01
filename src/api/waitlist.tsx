import { Hono } from 'hono'

const waitlist = new Hono<{ Bindings: Env }>()

waitlist.get('/', (c) => c.redirect('/'))

waitlist.post('/', async (c) => {
	try {
		const formData = await c.req.formData()
		const email = formData.get('email')?.toString()?.trim().toLowerCase()
		const origin = formData.get('origin')?.toString() || ''

		if (!email) {
			return c.redirect(`/${origin}?message=${encodeURIComponent('Email is required')}`)
		}

		if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
			return c.redirect(`/${origin}?message=${encodeURIComponent('Invalid email format')}`)
		}

		// Capture metadata - safely handle missing values
		const metadata = {
			source: formData.get('source')?.toString() || 'website',
			page: formData.get('page_url')?.toString() || c.req.header('referer') || '',
			formLocation: formData.get('form_location')?.toString() || 'unknown',
			userAgent: c.req.header('user-agent') || '',
			referer: c.req.header('referer') || c.req.header('referrer') || '',
			cfCountry: c.req.header('cf-ipcountry') || '',
		}

		try {
			// Special handling for test email - allow complete overwrites
			if (email === 'me@madhavajay.com') {
				await c.env.DB.prepare('DELETE FROM waitlist WHERE email = ?').bind(email).run()
			}

			// Check if email already exists
			const existing = await c.env.DB.prepare('SELECT email, metadata FROM waitlist WHERE email = ?')
				.bind(email)
				.first()

			let followUpType: string | undefined

			if (existing) {
				// Email already exists - update metadata with new signup location
				const existingMetadata = existing.metadata ? JSON.parse(existing.metadata as string) : {}
				const signupKey = `signup_${origin || 'home'}`

				// Store each signup under a separate key in metadata
				const updatedMetadata = {
					...existingMetadata,
					[signupKey]: {
						...metadata,
						timestamp: new Date().toISOString(),
					},
				}

				await c.env.DB.prepare('UPDATE waitlist SET metadata = ? WHERE email = ?')
					.bind(JSON.stringify(updatedMetadata), email)
					.run()

				followUpType = formData.get('follow_up_questions')?.toString()
			} else {
				// New email - insert as usual
				await c.env.DB.prepare('INSERT INTO waitlist (email, metadata) VALUES (?, ?)')
					.bind(email, JSON.stringify(metadata))
					.run()

				followUpType = formData.get('follow_up_questions')?.toString()
			}

			// Check if follow-up questions should be shown
			const redirectUrl = followUpType
				? `/${origin}?message=${encodeURIComponent("Success! You're on the waitlist.")}&follow_up=${followUpType}`
				: `/${origin}?message=${encodeURIComponent("Success! You're on the waitlist.")}`

			return c.redirect(redirectUrl)
		} catch (dbError: any) {
			console.error('Database error:', dbError)
			throw dbError
		}
	} catch (error) {
		console.error('Error processing form:', error)
		return c.redirect(`/?message=${encodeURIComponent('An error occurred. Please try again.')}`)
	}
})

waitlist.post('/followup', async (c) => {
	try {
		const body = await c.req.json()
		const { extra, page } = body

		// Get the most recent entry (assuming it's from the current session)
		// In production, you'd want to use a session token or email from a cookie
		const result = await c.env.DB.prepare(
			'SELECT email, metadata FROM waitlist ORDER BY created_at DESC LIMIT 1'
		).first()

		if (result) {
			const currentMetadata = result.metadata ? JSON.parse(result.metadata as string) : {}

			// Store follow-up answers under extra[page] to allow multiple signups
			const updatedMetadata = {
				...currentMetadata,
				extra: {
					...(currentMetadata.extra || {}),
					[page]: {
						...extra,
						timestamp: new Date().toISOString(),
					},
				},
			}

			await c.env.DB.prepare('UPDATE waitlist SET metadata = ? WHERE email = ?')
				.bind(JSON.stringify(updatedMetadata), result.email)
				.run()
		}

		return c.json({ success: true })
	} catch (error) {
		console.error('Error updating follow-up:', error)
		return c.json({ success: false }, 500)
	}
})

export default waitlist

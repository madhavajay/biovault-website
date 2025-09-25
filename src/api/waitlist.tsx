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

		try {
			await c.env.DB.prepare('INSERT INTO waitlist (email) VALUES (?)').bind(email).run()
			return c.redirect(
				`/${origin}?message=${encodeURIComponent("Success! You're on the waitlist.")}`
			)
		} catch (dbError: any) {
			if (dbError.message?.includes('UNIQUE')) {
				return c.redirect(
					`/${origin}?message=${encodeURIComponent('This email is already registered')}`
				)
			}
			throw dbError
		}
	} catch (error) {
		console.error('Error processing form:', error)
		return c.redirect(`/?message=${encodeURIComponent('An error occurred. Please try again.')}`)
	}
})

export default waitlist

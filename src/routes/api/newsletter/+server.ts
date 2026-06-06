import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

export const prerender = false;

const ALLOWED_ORIGINS = new Set([
	'https://biovault.net',
	'https://www.biovault.net',
	'https://app.biovault.net'
]);

type NewsletterPayload = {
	email?: unknown;
	source?: unknown;
	metadata?: unknown;
};

function corsHeaders(origin: string | null) {
	const headers: Record<string, string> = {
		'Access-Control-Allow-Methods': 'POST, OPTIONS',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Access-Control-Max-Age': '86400'
	};

	if (origin && isAllowedOrigin(origin)) {
		headers['Access-Control-Allow-Origin'] = origin;
	}

	return headers;
}

function isAllowedOrigin(origin: string) {
	if (ALLOWED_ORIGINS.has(origin)) return true;

	try {
		const url = new URL(origin);
		return (
			url.protocol === 'http:' &&
			(url.hostname === 'localhost' || url.hostname === '127.0.0.1') &&
			url.port !== ''
		);
	} catch {
		return false;
	}
}

function isValidEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeSource(source: unknown) {
	if (typeof source !== 'string') return 'unknown';
	const normalized = source.trim().toLowerCase().replace(/[^a-z0-9_.:-]/g, '-');
	return normalized.slice(0, 80) || 'unknown';
}

function normalizeMetadata(metadata: unknown) {
	if (!metadata || typeof metadata !== 'object' || Array.isArray(metadata)) {
		return {};
	}

	return metadata as Record<string, unknown>;
}

function subscriptionEmailHtml(fields: { email: string; source: string; metadata: Record<string, unknown> }) {
	const timestamp = new Date().toLocaleString('en-US', {
		dateStyle: 'medium',
		timeStyle: 'short',
		timeZone: 'UTC'
	});
	const metadata = Object.entries(fields.metadata)
		.map(([key, value]) => `<li><strong>${escapeHtml(key)}:</strong> ${escapeHtml(String(value))}</li>`)
		.join('');

	return `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:32px;background:#f4f4f5;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e4e4e7;">
    <div style="background:#0d9668;padding:28px 32px;">
      <h1 style="margin:0;color:#ffffff;font-size:20px;">New newsletter signup</h1>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.82);font-size:13px;">${timestamp} UTC</p>
    </div>
    <div style="padding:28px 32px;">
      <p style="margin:0 0 16px;color:#18181b;font-size:16px;">
        <a href="mailto:${escapeHtml(fields.email)}" style="color:#0d9668;text-decoration:none;">${escapeHtml(fields.email)}</a>
      </p>
      <p style="margin:0 0 16px;color:#52525b;font-size:14px;">Source: <strong>${escapeHtml(fields.source)}</strong></p>
      ${metadata ? `<ul style="margin:0;padding-left:18px;color:#52525b;font-size:13px;line-height:1.6;">${metadata}</ul>` : ''}
    </div>
  </div>
</body>
</html>`;
}

function escapeHtml(str: string): string {
	return str
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

export const OPTIONS: RequestHandler = async ({ request }) => {
	const origin = request.headers.get('origin');
	return new Response(null, { status: 204, headers: corsHeaders(origin) });
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const origin = request.headers.get('origin');
	const headers = corsHeaders(origin);
	const payload = (await request.json()) as NewsletterPayload;
	const email = typeof payload.email === 'string' ? payload.email.trim().toLowerCase() : '';
	const source = normalizeSource(payload.source);
	const metadata = {
		...normalizeMetadata(payload.metadata),
		source,
		submittedAt: new Date().toISOString()
	};

	if (!isValidEmail(email)) {
		return json({ success: false, errors: { email: 'Please enter a valid email address' } }, { status: 400, headers });
	}

	try {
		await platform!.env.DB.prepare(
			`
				INSERT INTO newsletter_subscribers (email, source, status, metadata, updated_at)
				VALUES (?, ?, 'subscribed', ?, CURRENT_TIMESTAMP)
				ON CONFLICT(email) DO UPDATE SET
					source = excluded.source,
					status = 'subscribed',
					metadata = excluded.metadata,
					updated_at = CURRENT_TIMESTAMP
			`
		)
			.bind(email, source, JSON.stringify(metadata))
			.run();
	} catch (err) {
		console.error('Newsletter D1 insert error:', err);
		return json({ success: false, errors: { form: 'Something went wrong. Please try again.' } }, { status: 500, headers });
	}

	try {
		if (platform?.env.RESEND_API_KEY && platform.env.EMAILS) {
			const resend = new Resend(platform.env.RESEND_API_KEY);
			await resend.emails.send({
				from: 'BioVault <waitlist@biovault.net>',
				to: platform.env.EMAILS.split(','),
				subject: `New newsletter signup: ${email}`,
				html: subscriptionEmailHtml({ email, source, metadata })
			});
		}
	} catch (err) {
		console.error('Newsletter Resend email error:', err);
	}

	return json({ success: true }, { headers });
};

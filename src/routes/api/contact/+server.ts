import { json } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { RequestHandler } from './$types';

export const prerender = false;

function contactEmailHtml(fields: { name: string; email: string; affiliation: string; country: string; message: string }) {
	const { name, email, affiliation, country, message } = fields;
	const timestamp = new Date().toLocaleString('en-US', {
		dateStyle: 'medium',
		timeStyle: 'short',
		timeZone: 'UTC'
	});

	return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,0.08);">
          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0d9668,#10b981);padding:32px 40px;">
              <h1 style="margin:0;color:#ffffff;font-size:20px;font-weight:600;letter-spacing:-0.02em;">New Website Submission</h1>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.8);font-size:13px;">${timestamp} UTC</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:32px 40px 40px;">
              <!-- Name -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa;">Name</td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#18181b;font-weight:500;">${escapeHtml(name)}</td>
                </tr>
              </table>

              <!-- Email -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa;">Email</td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#18181b;">
                    <a href="mailto:${escapeHtml(email)}" style="color:#0d9668;text-decoration:none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
              </table>

              <!-- Affiliation -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
                <tr>
                  <td style="padding:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa;">Affiliation</td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#18181b;font-weight:500;">${escapeHtml(affiliation)}</td>
                </tr>
              </table>

              <!-- Country -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:${message ? '20px' : '24px'};">
                <tr>
                  <td style="padding:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa;">Country</td>
                </tr>
                <tr>
                  <td style="font-size:16px;color:#18181b;font-weight:500;">${escapeHtml(country)}</td>
                </tr>
              </table>

              ${message ? `<!-- Message -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:0 0 4px;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#a1a1aa;">Message</td>
                </tr>
                <tr>
                  <td style="font-size:14px;color:#18181b;line-height:1.6;background:#f9fafb;padding:12px 16px;border-radius:8px;border:1px solid #e4e4e7;">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
                </tr>
              </table>` : ''}

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-top:1px solid #e4e4e7;padding-top:24px;">
                    <a href="mailto:${escapeHtml(email)}" style="display:inline-block;background-color:#0d9668;color:#ffffff;font-size:14px;font-weight:600;text-decoration:none;padding:10px 24px;border-radius:8px;">Reply to ${escapeHtml(name.split(' ')[0])}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:0 40px 32px;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">Sent from the BioVault website contact form</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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

export const POST: RequestHandler = async ({ request, platform }) => {
	const { name, affiliation, country, email, message } = await request.json();

	const errors: Record<string, string> = {};

	if (!name?.trim()) errors.name = 'Name is required';
	if (!affiliation?.trim()) errors.affiliation = 'Affiliation is required';
	if (!country?.trim()) errors.country = 'Country is required';
	if (!email?.trim()) {
		errors.email = 'Email is required';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		errors.email = 'Please enter a valid email address';
	}

	if (Object.keys(errors).length > 0) {
		return json({ errors }, { status: 400 });
	}

	try {
		await platform!.env.DB.prepare(
			'INSERT INTO contact_submissions (name, affiliation, country, email, message) VALUES (?, ?, ?, ?, ?)'
		)
			.bind(name.trim(), affiliation.trim(), country.trim(), email.trim(), message?.trim() ?? '')
			.run();
	} catch (err) {
		console.error('D1 insert error:', err);
		return json({ errors: { form: 'Something went wrong. Please try again.' } }, { status: 500 });
	}

	try {
		const resend = new Resend(platform!.env.RESEND_API_KEY);
		await resend.emails.send({
			from: 'BioVault <waitlist@biovault.net>',
			to: platform!.env.EMAILS.split(','),
			subject: `New contact: ${name.trim()} (${affiliation.trim()})`,
			html: contactEmailHtml({ name: name.trim(), email: email.trim(), affiliation: affiliation.trim(), country: country.trim(), message: message?.trim() ?? '' })
		});
	} catch (err) {
		console.error('Resend email error:', err);
	}

	try {
		const nameParts = name.trim().split(/\s+/);
		const firstName = nameParts[0] || '';
		const lastName = nameParts.slice(1).join(' ') || '';
		const res = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${platform!.env.HUBSPOT_ACCESS_TOKEN}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				properties: {
					firstname: firstName,
					lastname: lastName,
					email: email.trim(),
					company: affiliation.trim(),
					country: country.trim(),
					...(message?.trim() ? { freeform_problem_statement: message.trim() } : {})
				}
			})
		});
		if (!res.ok) {
			console.error('HubSpot API error:', res.status, await res.text());
		}
	} catch (err) {
		console.error('HubSpot create contact error:', err);
	}

	return json({ success: true });
};

import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import type { Actions } from './$types';

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

export const actions = {
	contact: async ({ request, platform }) => {
		const data = await request.formData();
		const name = data.get('name')?.toString().trim() ?? '';
		const affiliation = data.get('affiliation')?.toString().trim() ?? '';
		const country = data.get('country')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		const errors: Record<string, string> = {};

		if (!name) errors.name = 'Name is required';
		if (!affiliation) errors.affiliation = 'Affiliation is required';
		if (!country) errors.country = 'Country is required';
		if (!email) {
			errors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			errors.email = 'Please enter a valid email address';
		}

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values: { name, affiliation, country, email } });
		}

		try {
			await platform!.env.DB.prepare(
				'INSERT INTO contact_submissions (name, affiliation, country, email, message) VALUES (?, ?, ?, ?, ?)'
			)
				.bind(name, affiliation, country, email, message)
				.run();
		} catch (err) {
			console.error('D1 insert error:', err);
			return fail(500, {
				errors: { form: 'Something went wrong. Please try again.' },
				values: { name, affiliation, country, email }
			});
		}

		try {
			const resend = new Resend(platform!.env.RESEND_API_KEY);
			await resend.emails.send({
				from: 'BioVault <waitlist@biovault.net>',
				to: platform!.env.EMAILS.split(','),
				subject: `New contact: ${name} (${affiliation})`,
				html: contactEmailHtml({ name, email, affiliation, country, message })
			});
		} catch (err) {
			console.error('Resend email error:', err);
			// Don't fail the submission if email fails — data is already in D1
		}

		return { success: true };
	}
} satisfies Actions;

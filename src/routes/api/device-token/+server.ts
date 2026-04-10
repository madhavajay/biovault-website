import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const prerender = false;

type RegisterDeviceTokenBody = {
	push_token?: string;
};

export const POST: RequestHandler = async ({ request, platform }) => {
	const { push_token } = (await request.json()) as RegisterDeviceTokenBody;

	if (!push_token?.trim()) {
		return json({ error: 'push_token is required' }, { status: 400 });
	}

	try {
		const normalizedPushToken = push_token.trim();
		const result = await platform!.env.BIOVAULT_APP_DB.prepare(
			`
				INSERT INTO user (push_token)
				VALUES (?)
				ON CONFLICT(push_token) DO UPDATE SET push_token = excluded.push_token
			`
		)
			.bind(normalizedPushToken)
			.run();

		return json({
			success: true,
			id: result.meta.last_row_id ?? null,
			push_token: normalizedPushToken
		});
	} catch (error) {
		console.error('Failed to register device token:', error);
		return json({ error: 'Failed to register device token' }, { status: 500 });
	}
};

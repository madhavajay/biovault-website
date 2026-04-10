
const DAILY_CRON_JOB_NAME = 'daily-cron-test';
const LONDON_TIME_ZONE = 'Europe/London';

function getLondonDateParts(date) {
	const formatter = new Intl.DateTimeFormat('en-GB', {
		timeZone: LONDON_TIME_ZONE,
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	});

	const values = Object.fromEntries(
		formatter
			.formatToParts(date)
			.filter((part) => part.type !== 'literal')
			.map((part) => [part.type, part.value])
	);

	return {
		year: values.year,
		month: values.month,
		day: values.day,
		hour: values.hour,
		minute: values.minute
	};
}

function isElevenPmInLondon(date) {
	const { hour, minute } = getLondonDateParts(date);
	return hour === '23' && minute === '00';
}

function getLondonDateKey(date) {
	const { year, month, day } = getLondonDateParts(date);
	return `${year}-${month}-${day}`;
}

async function sendPushNotifications(pushTokens, message) {
	const PUSH_NOTIFICATION_CHUNK_LIMIT = 100;
	const MAX_RETRIES = 2;
	const RETRY_DELAY = 1000;
	const MAX_CONCURRENT_REQUESTS = 3;

	const messages = pushTokens.map((token) => ({
		to: token,
		sound: 'default',
		...message
	}));

	const chunks = [];
	let currentChunk = [];
	let currentChunkCount = 0;

	for (const message of messages) {
		if (Array.isArray(message.to)) {
			let partialTo = [];
			for (const recipient of message.to) {
				partialTo.push(recipient);
				currentChunkCount++;
				if (currentChunkCount >= PUSH_NOTIFICATION_CHUNK_LIMIT) {
					currentChunk.push({ ...message, to: partialTo });
					chunks.push(currentChunk);
					currentChunk = [];
					currentChunkCount = 0;
					partialTo = [];
				}
			}
			if (partialTo.length) {
				currentChunk.push({ ...message, to: partialTo });
			}
		} else {
			currentChunk.push(message);
			currentChunkCount++;
		}

		if (currentChunkCount >= PUSH_NOTIFICATION_CHUNK_LIMIT) {
			chunks.push(currentChunk);
			currentChunk = [];
			currentChunkCount = 0;
		}
	}

	if (currentChunkCount) {
		chunks.push(currentChunk);
	}

	const results = [];

	const processChunk = async (chunk, retryCount = 0) => {
		try {
			const response = await fetch('https://exp.host/--/api/v2/push/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json'
				},
				body: JSON.stringify(chunk)
			});

			if (response.status === 429) {
				if (retryCount < MAX_RETRIES) {
					await new Promise((resolve) =>
						setTimeout(resolve, RETRY_DELAY * Math.pow(2, retryCount))
					);
					return processChunk(chunk, retryCount + 1);
				}
				throw new Error('Rate limit exceeded after retries');
			}

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			console.log('Push notification success response:', data);
			return data;
		} catch (error) {
			if (retryCount < MAX_RETRIES) {
				await new Promise((resolve) =>
					setTimeout(resolve, RETRY_DELAY * Math.pow(2, retryCount))
				);
				return processChunk(chunk, retryCount + 1);
			}
			console.error('Error sending push notification chunk:', error);
			throw error;
		}
	};

	for (let i = 0; i < chunks.length; i += MAX_CONCURRENT_REQUESTS) {
		const chunkBatch = chunks.slice(i, i + MAX_CONCURRENT_REQUESTS);
		const batchResults = await Promise.all(chunkBatch.map((chunk) => processChunk(chunk)));
		results.push(...batchResults);
	}

	return results;
}

async function ensureCronTables(db) {
	await db
		.prepare(
			`
				CREATE TABLE IF NOT EXISTS cron_notification_log (
					job_key TEXT PRIMARY KEY,
					job_name TEXT NOT NULL,
					sent_at TEXT NOT NULL
				)
			`
		)
		.run();
}

async function sendDailyPush(env) {
	const { results } = await env.BIOVAULT_APP_DB.prepare(
		`
			SELECT push_token
			FROM user
			WHERE push_token IS NOT NULL
				AND TRIM(push_token) <> ''
		`
	).all();

	const pushTokens = results.map((row) => row.push_token);
	if (!pushTokens.length) {
		console.log('No push tokens found for daily cron notification');
		return;
	}

	await sendPushNotifications(pushTokens, {
		title: 'New tests available',
		body: 'Click here to review (daily cron test)',
		subtitle: '',
		data: {
			url: '/(tabs)/feed'
		}
	});

	console.log('Sent daily cron notifications', { recipientCount: pushTokens.length });
}

async function markDailyJobIfFirstRun(db, now) {
	const jobKey = `${DAILY_CRON_JOB_NAME}:${getLondonDateKey(now)}`;
	const result = await db
		.prepare(
			`
				INSERT OR IGNORE INTO cron_notification_log (job_key, job_name, sent_at)
				VALUES (?, ?, ?)
			`
		)
		.bind(jobKey, DAILY_CRON_JOB_NAME, now.toISOString())
		.run();

	return result.meta.changes > 0;
}

worker_default.scheduled = async (_event, env, ctx) => {
	const now = new Date();

	if (!isElevenPmInLondon(now)) {
		console.log('Skipping daily cron outside 11pm London window', {
			triggeredAt: now.toISOString()
		});
		return;
	}

	await ensureCronTables(env.BIOVAULT_APP_DB);

	const isFirstRun = await markDailyJobIfFirstRun(env.BIOVAULT_APP_DB, now);
	if (!isFirstRun) {
		console.log('Skipping duplicate daily cron run', {
			triggeredAt: now.toISOString()
		});
		return;
	}

	ctx.waitUntil(sendDailyPush(env));
};

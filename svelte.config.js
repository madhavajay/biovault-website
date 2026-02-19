import adapter from '@sveltejs/adapter-cloudflare';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			platformProxy: {
				configPath: './wrangler.toml',
				persist: { path: '.wrangler/state/v3' }
			}
		})
	}
	
};

export default config;

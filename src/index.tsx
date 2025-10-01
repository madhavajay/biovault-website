import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { MainPage } from './website/MainPage'
import { ResearcherPage } from './website/ResearcherPage'
import { ParticipantPage } from './website/ParticipantPage'
import { AboutPage } from './website/AboutPage'
import { PrivacyPage } from './website/PrivacyPage'
import { DownloadPage } from './website/DownloadPage'
import { GenesIndexPage } from './website/genes/index'
import { GenePage } from './website/genes/GenePage'
import { isValidGene, getProperGeneName } from './website/genes/geneList'
import waitlist from './api/waitlist'
import { styles } from './website/styles'

// Extend ContextRenderer to support passing additional props to the renderer
declare module 'hono' {
	interface ContextRenderer {
		(
			content: string | Promise<string>,
			props?: { title?: string; description?: string; url?: string }
		): Response | Promise<Response>
	}
}

const app = new Hono<{ Bindings: Env }>()

// Set up JSX renderer middleware with Layout
app.use(
	'*',
	jsxRenderer(({ children, title, description, url }) => {
		const defaultTitle = 'Join the Beta - BioVault'
		const defaultDescription =
			'BioVault is a free, open-source, permissionless network for collaborative genomics. Share insights without ever sharing raw data.'
		const defaultUrl = 'https://biovault.net'
		const ogImage = 'https://biovault.net/images/og-share.jpg'

		const pageTitle = title || defaultTitle
		const pageDescription = description || defaultDescription
		const pageUrl = url || defaultUrl

		return (
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{pageTitle}</title>
					<meta name="description" content={pageDescription} />
					<link rel="canonical" href={pageUrl} />
					<link rel="icon" type="image/svg+xml" href="/images/logo.svg" />

					{/* Open Graph Meta Tags */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content={pageUrl} />
					<meta property="og:title" content={pageTitle} />
					<meta property="og:description" content={pageDescription} />
					<meta property="og:image" content={ogImage} />

					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
						rel="stylesheet"
					/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-4D2KBBR5W5"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'G-4D2KBBR5W5');
						`,
						}}
					/>
					<script src="https://metrics.syftbox.net/api/script.js" data-site-id="3" defer></script>
					<style dangerouslySetInnerHTML={{ __html: styles }} />
				</head>
				<body>
					<div class="blobs-container">
						<div class="blob blob-1"></div>
						<div class="blob blob-2"></div>
						<div class="blob blob-3"></div>
						<div class="blob blob-4"></div>
					</div>
					<nav class="navbar">
						<div class="navbar-container">
							<a href="/" class="navbar-logo">
								BioVault
							</a>
							<button class="navbar-toggle" id="navbar-toggle" aria-label="Toggle navigation">
								<span class="navbar-toggle-icon"></span>
								<span class="navbar-toggle-icon"></span>
								<span class="navbar-toggle-icon"></span>
							</button>
							<div class="navbar-menu" id="navbar-menu">
								<a href="/" class="navbar-link">
									Home
								</a>
								<a href="/researcher" class="navbar-link">
									For Researchers
								</a>
								<a href="/participant" class="navbar-link">
									For Participants
								</a>
								<a href="/about" class="navbar-link">
									About
								</a>
								<a href="/privacy" class="navbar-link">
									Privacy
								</a>
								<a href="/download" class="navbar-link navbar-download">
									Download
								</a>
							</div>
						</div>
					</nav>
					{children}
					<footer class="footer">
						<div class="footer-content">
							<span class="footer-copyright">© 2025</span>
							<a href="/privacy" class="footer-link">Privacy Policy</a>
						</div>
					</footer>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							document.getElementById('navbar-toggle')?.addEventListener('click', function() {
								const menu = document.getElementById('navbar-menu');
								const toggle = document.getElementById('navbar-toggle');
								menu?.classList.toggle('active');
								toggle?.classList.toggle('active');
							});

							// Close menu when clicking outside
							document.addEventListener('click', function(event) {
								const navbar = document.querySelector('.navbar');
								const toggle = document.getElementById('navbar-toggle');
								const menu = document.getElementById('navbar-menu');

								if (navbar && !navbar.contains(event.target)) {
									menu?.classList.remove('active');
									toggle?.classList.remove('active');
								}
							});

							// Close menu when clicking a link
							document.querySelectorAll('.navbar-link').forEach(link => {
								link.addEventListener('click', function() {
									const menu = document.getElementById('navbar-menu');
									const toggle = document.getElementById('navbar-toggle');
									menu?.classList.remove('active');
									toggle?.classList.remove('active');
								});
							});

							// Copy to clipboard function
							function copyToClipboard(id, btn) {
								const code = document.getElementById(id).innerText;
								navigator.clipboard.writeText(code).then(() => {
									const svg = btn.querySelector('svg');
									svg.innerHTML = '<path d="M20 6L9 17l-5-5" stroke="currentColor" stroke-width="2" fill="none"/>';
									setTimeout(() => {
										svg.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
									}, 2000);
								}).catch(err => {
									console.error("Copy failed:", err);
								});
							}
							window.copyToClipboard = copyToClipboard;
						`,
						}}
					/>
				</body>
			</html>
		)
	})
)

// Website routes - handle query parameters for Post-Redirect-Get messages
app.get('/', (c) => {
	const message = c.req.query('message')
	return c.render(<MainPage message={message} />, {
		title: 'BioVault - Share insights without ever sharing raw data',
		description:
			'BioVault is a free, open-source, permissionless network for collaborative genomics. Share insights without ever sharing raw data.',
		url: 'https://biovault.net/',
	})
})

app.get('/researcher', (c) => {
	const message = c.req.query('message')
	return c.render(<ResearcherPage message={message} />, {
		title: 'For Researchers - BioVault',
		description:
			'Run genomic analysis pipelines on distributed data without centralizing it. Share insights without ever sharing raw data.',
		url: 'https://biovault.net/researcher',
	})
})

app.get('/participant', (c) => {
	const message = c.req.query('message')
	return c.render(<ParticipantPage message={message} />, {
		title: 'For Participants - BioVault',
		description:
			'Your genomic data, your control. Share insights without ever sharing raw data.',
		url: 'https://biovault.net/participant',
	})
})

app.get('/about', (c) => {
	return c.render(<AboutPage />, {
		title: 'About - BioVault',
		description:
			'Learn about BioVault, the open-source platform for privacy-preserving genomic collaboration. Share insights without ever sharing raw data.',
		url: 'https://biovault.net/about',
	})
})

app.get('/privacy', (c) => {
	return c.render(<PrivacyPage />, {
		title: 'Privacy Policy - BioVault',
		description: 'BioVault privacy policy and data handling practices. Share insights without ever sharing raw data.',
		url: 'https://biovault.net/privacy',
	})
})

app.get('/download', (c) => {
	return c.render(<DownloadPage />, {
		title: 'Download - BioVault',
		description: 'Download BioVault CLI and desktop apps for secure genomic collaboration. Share insights without ever sharing raw data.',
		url: 'https://biovault.net/download',
	})
})

// Gene routes
app.get('/genes', (c) => {
	return c.render(<GenesIndexPage />, { title: 'Genes - BioVault' })
})

app.get('/genes/:gene', (c) => {
	const geneParam = c.req.param('gene')
	const properGeneName = getProperGeneName(geneParam)

	if (!properGeneName) {
		return c.notFound()
	}

	return c.render(<GenePage gene={properGeneName} />, {
		title: `${properGeneName} - BioVault Genes`,
	})
})

// API routes
app.route('/api/waitlist', waitlist)

// Handle 404 for all other routes
app.notFound((c) => {
	return c.text('Not Found', 404)
})

export default app

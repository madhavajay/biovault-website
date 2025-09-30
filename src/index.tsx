import { Hono } from 'hono'
import { jsxRenderer } from 'hono/jsx-renderer'
import { MainPage } from './website/MainPage'
import { ResearcherPage } from './website/ResearcherPage'
import { ParticipantPage } from './website/ParticipantPage'
import { AboutPage } from './website/AboutPage'
import { GenesIndexPage } from './website/genes/index'
import { GenePage } from './website/genes/GenePage'
import { isValidGene, getProperGeneName } from './website/genes/geneList'
import waitlist from './api/waitlist'
import { styles } from './website/styles'

// Extend ContextRenderer to support passing additional props to the renderer
declare module 'hono' {
	interface ContextRenderer {
		(content: string | Promise<string>, props?: { title?: string }): Response | Promise<Response>
	}
}

const app = new Hono<{ Bindings: Env }>()

// Set up JSX renderer middleware with Layout
app.use(
	'*',
	jsxRenderer(({ children, title }) => {
		return (
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{title || 'Join the Beta - BioVault'}</title>
					<link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
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
							</div>
						</div>
					</nav>
					{children}
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
		title:
			'Join the Beta - BioVault is a free and open-source tool and permissionless network for collaborative genomics',
	})
})

app.get('/researcher', (c) => {
	const message = c.req.query('message')
	return c.render(<ResearcherPage message={message} />, {
		title:
			'Join the Beta - BioVault is a free and open-source tool and permissionless network for collaborative genomics',
	})
})

app.get('/participant', (c) => {
	const message = c.req.query('message')
	return c.render(<ParticipantPage message={message} />, {
		title: 'Join the Beta - BioVault gives patients full control of their genomic data',
	})
})

app.get('/about', (c) => {
	return c.render(<AboutPage />, { title: 'About - BioVault' })
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

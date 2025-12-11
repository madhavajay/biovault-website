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
import { InvitePage } from './website/InvitePage'
import { isValidGene, getProperGeneName } from './website/genes/geneList'
import waitlist from './api/waitlist'
import { styles } from './website/styles'

// Extend ContextRenderer to support passing additional props to the renderer
declare module 'hono' {
	interface ContextRenderer {
		(
			content: string | Promise<string>,
			props?: { title?: string; description?: string; url?: string; ogImage?: string; ogImageSquare?: string }
		): Response | Promise<Response>
	}
}

const app = new Hono<{ Bindings: Env }>()

// Set up JSX renderer middleware with Layout
app.use(
	'*',
	jsxRenderer(({ children, title, description, url, ogImage, ogImageSquare }) => {
		const defaultTitle = 'Join the Beta - BioVault'
		const defaultDescription =
			'BioVault is a free, open-source, permissionless network for collaborative genomics. Share insights without ever sharing raw data.'
		const defaultUrl = 'https://biovault.net'
		const defaultOgImage = 'https://biovault.net/images/og-share.jpg'
		const defaultOgImageSquare = 'https://biovault.net/images/og-share-square.jpg'

		const pageTitle = title || defaultTitle
		const pageDescription = description || defaultDescription
		const pageUrl = url || defaultUrl
		const pageOgImage = ogImage || defaultOgImage
		const pageOgImageSquare = ogImageSquare || defaultOgImageSquare

		return (
			<html lang="en">
				<head>
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
					<title>{pageTitle}</title>
					<meta name="description" content={pageDescription} />
					<link rel="canonical" href={pageUrl} />
					<link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
					<link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />

					{/* Open Graph Meta Tags */}
					<meta property="og:type" content="website" />
					<meta property="og:url" content={pageUrl} />
					<meta property="og:title" content={pageTitle} />
					<meta property="og:description" content={pageDescription} />

					{/* WhatsApp prefers the first image (square) */}
					<meta property="og:image" content={pageOgImageSquare} />
					<meta property="og:image:width" content="800" />
					<meta property="og:image:height" content="800" />

					{/* Wide image for Facebook, LinkedIn, Telegram, Slack */}
					<meta property="og:image" content={pageOgImage} />
					<meta property="og:image:width" content="1200" />
					<meta property="og:image:height" content="630" />

					{/* Twitter (use same og-share.jpg, must be 1200x600 for wide preview) */}
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={pageOgImage} />
					<meta name="twitter:image:width" content="1200" />
					<meta name="twitter:image:height" content="600" />

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
					<div class="modal-overlay" id="message-modal" style="display: none;" onclick="if(event.target === this && !document.getElementById('follow-up-form')) this.style.display='none'">
						<div class="modal-content" onclick="event.stopPropagation()">
							<button class="modal-close" onclick="document.getElementById('message-modal').style.display='none'">×</button>
							<div id="modal-main-content">
								<div id="modal-icon" class="modal-icon success">
									✓
								</div>
								<div id="modal-message" class="modal-message success">
								</div>
							</div>
							<div id="modal-follow-up" style="display: none;">
								<h3 style="margin-bottom: 1rem; color: var(--color-text-primary);">Optional: Help us prepare</h3>
								<form id="follow-up-form" style="text-align: left;">
									<div id="follow-up-questions"></div>
									<div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
										<button type="button" onclick="document.getElementById('message-modal').style.display='none'" style="padding: 0.75rem 1.5rem; background: #e5e7eb; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">
											Skip
										</button>
										<button type="submit" id="follow-up-submit-btn" style="padding: 0.75rem 1.5rem; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							// Analytics tracking function
							window.trackAnalyticsEvent = async function(eventName, properties) {
								try {
									await fetch('https://metrics.syftbox.net/api/track', {
										method: 'POST',
										headers: { 'Content-Type': 'application/json' },
										body: JSON.stringify({
											type: 'custom_event',
											site_id: '3',
											hostname: 'biovault.net',
											pathname: window.location.pathname,
											querystring: window.location.search,
											screenWidth: window.innerWidth,
											screenHeight: window.innerHeight,
											language: navigator.language || 'en-US',
											page_title: document.title,
											referrer: document.referrer,
											event_name: eventName,
											properties: JSON.stringify(properties || {})
										})
									});
								} catch(e) {
									console.error('Analytics error:', e);
								}
							};

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

							// Add page URL to all waitlist forms before submission
							document.querySelectorAll('form[action="/api/waitlist"]').forEach(form => {
								form.addEventListener('submit', function() {
									let input = form.querySelector('input[name="page_url"]');
									if (!input) {
										input = document.createElement('input');
										input.type = 'hidden';
										input.name = 'page_url';
										form.appendChild(input);
									}
									input.value = window.location.href;
								});
							});

							// Handle follow-up questions in modal
							window.addEventListener('load', function() {
								const urlParams = new URLSearchParams(window.location.search);
								const message = urlParams.get('message');
								const followUpType = urlParams.get('follow_up');

								if (message && message.startsWith('Success') && followUpType) {
									setTimeout(() => {
										const mainContent = document.getElementById('modal-main-content');
										const followUpSection = document.getElementById('modal-follow-up');
										const questionsDiv = document.getElementById('follow-up-questions');

										if (followUpType === 'participant') {
											questionsDiv.innerHTML = \`
												<div class="follow-up-checkbox">
													<input type="checkbox" id="has_iphone" name="has_iphone" />
													<label for="has_iphone">I want to test iPhone</label>
												</div>
												<div class="follow-up-checkbox">
													<input type="checkbox" id="has_android" name="has_android" />
													<label for="has_android">I want to test Android</label>
												</div>
												<div class="follow-up-checkbox">
													<input type="checkbox" id="has_data" name="has_data" />
													<label for="has_data">I have genetic data (23andme etc)</label>
												</div>
											\`;
										} else if (followUpType === 'researcher') {
											questionsDiv.innerHTML = \`
												<div class="follow-up-checkbox">
													<input type="checkbox" id="has_data" name="has_data" />
													<label for="has_data">I have data I want to make available on BioVault</label>
												</div>
												<div class="follow-up-checkbox">
													<input type="checkbox" id="needs_data" name="needs_data" />
													<label for="needs_data">I want access to data for my research</label>
												</div>
											\`;
										} else if (followUpType === 'home') {
											// Step 1: Ask user type
											questionsDiv.innerHTML = \`
												<div class="follow-up-checkbox">
													<input type="checkbox" id="is_researcher" name="is_researcher" />
													<label for="is_researcher">I am a researcher</label>
												</div>
												<div class="follow-up-checkbox">
													<input type="checkbox" id="is_participant" name="is_participant" />
													<label for="is_participant">I am an individual participant</label>
												</div>
											\`;
											// Change button text to "Next" for step 1
											const submitBtn = document.getElementById('follow-up-submit-btn');
											if (submitBtn) submitBtn.textContent = 'Next';
										}

										if (mainContent && followUpSection && questionsDiv.innerHTML) {
											mainContent.style.display = 'none';
											followUpSection.style.display = 'block';

											const followUpForm = document.getElementById('follow-up-form');
											let homeStep = 1;
											let isResearcher = false;
											let isParticipant = false;

											followUpForm.addEventListener('submit', async function(e) {
												e.preventDefault();

												// Handle home page two-step process
												if (followUpType === 'home' && homeStep === 1) {
													isResearcher = document.getElementById('is_researcher')?.checked || false;
													isParticipant = document.getElementById('is_participant')?.checked || false;

													if (!isResearcher && !isParticipant) {
														// Skip if neither selected
														document.getElementById('message-modal').style.display = 'none';
														window.history.replaceState({}, '', window.location.pathname);
														return;
													}

													// Step 2: Show relevant questions
													homeStep = 2;
													let questionsHTML = '';

													if (isResearcher) {
														questionsHTML += \`
															<div style="margin-bottom: 1rem; font-weight: 600; color: var(--color-text-primary);">Researcher Questions:</div>
															<div class="follow-up-checkbox">
																<input type="checkbox" id="researcher_has_data" name="researcher_has_data" />
																<label for="researcher_has_data">I have data I want to make available on BioVault</label>
															</div>
															<div class="follow-up-checkbox">
																<input type="checkbox" id="researcher_needs_data" name="researcher_needs_data" />
																<label for="researcher_needs_data">I want access to data for my research</label>
															</div>
														\`;
													}

													if (isParticipant) {
														if (isResearcher) questionsHTML += \`<div style="margin-top: 1.5rem;"></div>\`;
														questionsHTML += \`
															<div style="margin-bottom: 1rem; font-weight: 600; color: var(--color-text-primary);">Participant Questions:</div>
															<div class="follow-up-checkbox">
																<input type="checkbox" id="participant_has_iphone" name="participant_has_iphone" />
																<label for="participant_has_iphone">I want to test iPhone</label>
															</div>
															<div class="follow-up-checkbox">
																<input type="checkbox" id="participant_has_android" name="participant_has_android" />
																<label for="participant_has_android">I want to test Android</label>
															</div>
															<div class="follow-up-checkbox">
																<input type="checkbox" id="participant_has_data" name="participant_has_data" />
																<label for="participant_has_data">I have genetic data (23andme etc)</label>
															</div>
														\`;
													}

													questionsDiv.innerHTML = questionsHTML;
													// Change button text to "Submit" for step 2
													const submitBtn = document.getElementById('follow-up-submit-btn');
													if (submitBtn) submitBtn.textContent = 'Submit';
													// Change Skip button to Back for step 2
													const skipBtn = document.querySelector('#follow-up-form button[type="button"]');
													if (skipBtn) {
														skipBtn.textContent = 'Back';
														skipBtn.onclick = function(e) {
															e.preventDefault();
															homeStep = 1;
															questionsDiv.innerHTML = \`
																<div class="follow-up-checkbox">
																	<input type="checkbox" id="is_researcher" name="is_researcher" \${isResearcher ? 'checked' : ''} />
																	<label for="is_researcher">I am a researcher</label>
																</div>
																<div class="follow-up-checkbox">
																	<input type="checkbox" id="is_participant" name="is_participant" \${isParticipant ? 'checked' : ''} />
																	<label for="is_participant">I am an individual participant</label>
																</div>
															\`;
															const submitBtn = document.getElementById('follow-up-submit-btn');
															if (submitBtn) submitBtn.textContent = 'Next';
															skipBtn.textContent = 'Skip';
															skipBtn.onclick = function() {
																document.getElementById('message-modal').style.display = 'none';
															};
														};
													}
													return;
												}

												// Collect answers
												let extra = {};
												if (followUpType === 'participant') {
													extra = {
														has_iphone: document.getElementById('has_iphone')?.checked || false,
														has_android: document.getElementById('has_android')?.checked || false,
														has_data: document.getElementById('has_data')?.checked || false
													};
												} else if (followUpType === 'researcher') {
													extra = {
														has_data: document.getElementById('has_data')?.checked || false,
														needs_data: document.getElementById('needs_data')?.checked || false
													};
												} else if (followUpType === 'home') {
													extra = {};
													if (isResearcher) {
														extra.researcher = {
															has_data: document.getElementById('researcher_has_data')?.checked || false,
															needs_data: document.getElementById('researcher_needs_data')?.checked || false
														};
													}
													if (isParticipant) {
														extra.participant = {
															has_iphone: document.getElementById('participant_has_iphone')?.checked || false,
															has_android: document.getElementById('participant_has_android')?.checked || false,
															has_data: document.getElementById('participant_has_data')?.checked || false
														};
													}
												}

												try {
													await fetch('/api/waitlist/followup', {
														method: 'POST',
														headers: { 'Content-Type': 'application/json' },
														body: JSON.stringify({
															extra,
															page: followUpType
														})
													});
												} catch (err) {
													console.error('Follow-up submission failed:', err);
												}

												document.getElementById('message-modal').style.display = 'none';
												window.history.replaceState({}, '', window.location.pathname);
											});
										}
									}, 500);
								}
							});
						`,
						}}
					/>
				</body>
			</html>
		)
	})
)

// App subdomain routes (must be before main website routes)
const isAppSubdomain = (host: string) =>
	host.startsWith('app.') ||
	host.startsWith('app.local.') ||
	host.startsWith('0.0.0.0') // local dev with --host 0.0.0.0

app.get('/.well-known/apple-app-site-association', (c) => {
	const host = c.req.header('host') || ''
	if (!isAppSubdomain(host)) {
		return c.notFound()
	}
	return c.json({
		applinks: {
			apps: [],
			details: [{
				appID: '28PJ5N8D9X.org.openmined.biovault-desktop',
				paths: ['/invite', '/invite/*']
			}]
		}
	})
})

app.get('/invite', (c) => {
	const host = c.req.header('host') || ''
	if (!isAppSubdomain(host)) {
		return c.notFound()
	}
	return c.render(<InvitePage />, {
		title: 'Join BioVault - Invitation',
		description: 'You have been invited to join BioVault for secure, privacy-preserving collaboration.',
		url: 'https://app.biovault.net/invite',
	})
})

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

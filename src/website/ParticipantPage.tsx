import type { FC } from 'hono/jsx'
import { Message } from './Layout'
import { Icons } from './Icons'

// Using string paths for images since Wrangler doesn't bundle static assets
const appImage = '/images/app.png'
const networkImage = '/images/network.jpg'

interface PageProps {
	message?: string
}

export const ParticipantPage: FC<PageProps> = ({ message }) => (
	<>
		{/* Hero Section */}
		<div className="hero-section">
			<div className="hero-image">
				<picture>
					<source
						srcset="/images/participant-320.avif 320w, /images/participant-640.avif 640w, /images/participant-1280.avif 1280w, /images/participant.avif 1920w"
						sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1280px"
						type="image/avif"
					/>
					<img src="/images/participant.jpg" alt="Participant with genomic data" />
				</picture>
			</div>
			<div className="hero-content">
				<h1 className="hero-headline">Your data. Your control. Your choice.</h1>
				<p className="hero-description">
					BioVault is a <strong>free</strong>, <strong>open-source</strong> app with <strong>no subscriptions</strong> that keeps your data offline <strong>securely on device</strong> and notifies you when new research connects to your variants. You stay in control when working with clinicians and researchers — deciding who can access your data, approving every analysis, and always knowing how it's used.
				</p>
				<div className="app-store-buttons">
					<a
						href="#"
						className="app-store-button testflight-button"
						onclick="event.preventDefault(); window.trackAnalyticsEvent('install_button_click', { platform: 'ios', source: 'participant_hero' }); document.getElementById('modal-message').textContent = 'Sign up for beta access below to get TestFlight access.'; document.getElementById('modal-icon').className = 'modal-icon success'; document.getElementById('message-modal').style.display = 'flex';"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
							<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
						</svg>
						<div>
							<div className="app-store-label">Install via</div>
							<div className="app-store-name">TestFlight</div>
						</div>
					</a>
					<a
						href="#"
						className="app-store-button playstore-button"
						onclick="event.preventDefault(); window.trackAnalyticsEvent('install_button_click', { platform: 'android', source: 'participant_hero' }); document.getElementById('modal-message').textContent = 'Sign up for beta access below to get Google Play access.'; document.getElementById('modal-icon').className = 'modal-icon success'; document.getElementById('message-modal').style.display = 'flex';"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
							<path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m1.88-1.06c.38-.22.63-.63.63-1.06s-.25-.84-.63-1.06l-1.88-1.12-2.43 2.43 2.43 2.43 1.88-1.12M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"></path>
						</svg>
						<div>
							<div className="app-store-label">Install via</div>
							<div className="app-store-name">Google Play</div>
						</div>
					</a>
				</div>
				<div className="hero-cta-box">
					<h2 className="hero-cta-title">Join the Beta and get:</h2>
					<ul className="hero-cta-benefits">
						<li>Early access to the BioVault mobile app</li>
						<li>Personal help setting up and importing your data</li>
						<li>Direct connection to researchers who need your insights</li>
					</ul>
					<form id="waitlist-form-hero" className="hero-form" method="post" action="/api/waitlist">
						<input type="hidden" name="source" value="website" />
						<input type="hidden" name="origin" value="participant" />
						<input type="hidden" name="form_location" value="hero" />
						<input type="hidden" name="follow_up_questions" value="participant" />
						<input
							type="email"
							name="email"
							id="email-hero"
							className="hero-input"
							placeholder="Enter your email for beta access"
							required
						/>
						<button type="submit" className="hero-btn">
							Join Beta →
						</button>
					</form>
				</div>
			</div>
		</div>

		<div className="container">
			{message && <Message message={message} />}

			<h2 className="features-title" style="text-align: center; margin: 3rem 0 2rem;">How it Works</h2>

			{/* Bento Grid */}
			<div className="bento-grid">
				{/* Participants */}
				<div className="bento-large">
					<div className="bento-label">For Participants</div>
					<h2 className="bento-title">Your data. Your control.</h2>
					<div className="mobile-mockups">
						<img
							src={appImage}
							alt="BioVault Mobile App"
							style={{ filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.15))' }}
						/>
					</div>
					<div className="how-it-works">
						<ul className="how-it-works-list">
							<li>Supports common variant and raw data formats from major providers</li>
							<li>Get free ClinVar updates for your variants without sharing data</li>
							<li>Invite clinicians and experts to analyze your data on your computer securely</li>
						</ul>
					</div>
					<div className="badges">
						<span className="badge">VCFs</span>
						<span className="badge">23andme</span>
						<span className="badge">AncestryDNA</span>
						<span className="badge">MyHeritage</span>
						<span className="badge">CariGenetics.com</span>
						<span className="badge">Sequencing.com</span>
						<span className="badge">Dante Labs</span>
						<span className="badge">Nebula</span>
					</div>
				</div>

				{/* Network */}
				<div className="bento-large">
					<div className="bento-label">Open Network</div>
					<h2 className="bento-title">Decentralized collaboration</h2>
					<div className="mobile-mockups">
						<img src={networkImage} alt="BioVault Network" />
					</div>
					<div className="how-it-works">
						<ul className="how-it-works-list">
							<li>Variants published to relay server with public keys for anonymity</li>
							<li>Built on SyftBox, an open-source network for secure data science</li>
							<li>Encrypted messages via relay servers, no open ports needed</li>
							<li>Data stays on participants' devices, only insights are shared</li>
							<li>Collaborate without requiring data uploads to the cloud</li>
						</ul>
					</div>
					<div className="badges">
						<span className="badge">Open Source</span>
						<span className="badge">Open Network</span>
						<span className="badge">End-to-end Encrypted</span>
						<span className="badge">Secure Enclaves</span>
					</div>
				</div>
			</div>

			{/* Network Section */}
			<div className="info-banner">
				<p>
					BioVault is powered by{' '}
					<a href="https://syftbox.net" target="_blank" rel="noopener noreferrer">
						<strong>SyftBox</strong>
					</a>
					, an open-source protocol from{' '}
					<a href="https://openmined.org" target="_blank" rel="noopener noreferrer">
						OpenMined
					</a>{' '}
					for privacy-preserving remote data science. Instead of moving sensitive datasets to outside
					servers, SyftBox enables <em>data visitation</em>: code travels securely to where the data
					lives, runs locally, and only the results are shared back. This technology is already proven
					in industry for secure distributed computation, and BioVault applies it directly to genomics
					and biomedical research.
				</p>
			</div>

			{/* Top Signup Strip */}
			<div className="signup-strip">
				<form id="waitlist-form-top" className="signup-form" method="post" action="/api/waitlist">
					<input type="hidden" name="source" value="website" />
					<input type="hidden" name="origin" value="participant" />
					<input type="hidden" name="form_location" value="top_strip" />
					<input type="hidden" name="follow_up_questions" value="participant" />
					<input
						type="email"
						name="email"
						id="email-top"
						className="email-input"
						placeholder="Enter your email for beta access"
						required
					/>
					<button type="submit" className="signup-btn">
						Join Beta
					</button>
				</form>
			</div>

			{/* Features Section */}
			<div className="features">
				<h2 className="features-title">Why Join as a Participant?</h2>
				<div className="features-grid">
					<div className="feature">
						<div className="feature-icon">
							<Icons.Lock />
						</div>
						<h3 className="feature-title">Your Data, Your Control</h3>
						<p className="feature-desc">
							Your raw files never leave your device. You decide who can access your data and what
							they can run.
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">
							<Icons.Eye />
						</div>
						<h3 className="feature-title">Full Transparency</h3>
						<p className="feature-desc">
							See a clear log of every researcher who has accessed your data, when they did it, and
							what analysis was performed.
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">
							<Icons.Zap />
						</div>
						<h3 className="feature-title">Privacy-Preserving Collaboration</h3>
						<p className="feature-desc">
							Researchers can gain insights without ever seeing or copying your sensitive genomic
							data.
						</p>
					</div>
				</div>
			</div>

			<div className="call-to-action">
				<h2 className="cta-title">Join as a Beta Tester</h2>
				<ul className="cta-list">
					<li className="cta-item">
						Rare disease patients who already have their genomic data (FASTQ, BAM/CRAM, VCF, etc.).
					</li>
					<li className="cta-item">
						Individuals with direct-to-consumer results from 23andMe, AncestryDNA, MyHeritage, Dante
						Labs, Nebula, or similar services.
					</li>
					<li className="cta-item">
						Anyone who wants to contribute to research while keeping their data private and under
						their own control.
					</li>
				</ul>
				<p className="cta-desc">
					BioVault puts participants first. You can contribute to cutting-edge science, help
					accelerate diagnosis, and support global equity in genomics—all while keeping your data
					safe, private, and in your hands.
				</p>
			</div>

			{/* Signup Section */}
			<div className="signup">
				<h2 className="signup-title">Join the Beta</h2>
				<p className="signup-subtitle">Get updates and early access to BioVault</p>
				<form id="waitlist-form" className="signup-form" method="post" action="/api/waitlist">
					<input type="hidden" name="source" value="website" />
					<input type="hidden" name="origin" value="participant" />
					<input type="hidden" name="form_location" value="bottom" />
					<input type="hidden" name="follow_up_questions" value="participant" />
					<input
						type="email"
						id="email"
						name="email"
						className="email-input"
						placeholder="Enter your email address"
						required
					/>
					<button type="submit" className="signup-btn">
						Get Updates
					</button>
				</form>
			</div>

			<div className="faq">
				<h2 className="faq-title">Frequently Asked Questions</h2>
				<div className="faq-grid">
					<div className="faq-item">
						<h3 className="faq-question">What is BioVault?</h3>
						<p className="faq-answer">
							BioVault is an app that lets you store your genomic data securely on your own device,
							approve researcher requests, and see who has accessed your data.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">Do I ever have to upload my data?</h3>
						<p className="faq-answer">
							No. Your raw files (VCF, BAM/CRAM, FASTQ, etc.) never leave your device. All analyses
							are performed locally.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">How do I know who has accessed my data?</h3>
						<p className="faq-answer">
							The BioVault app keeps a complete, transparent log. You can always see which researchers
							ran analyses, when, and what results were shared.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">Is BioVault free?</h3>
						<p className="faq-answer">
							Yes. BioVault is open-source and free under the Apache 2.0 License.
						</p>
					</div>
				</div>
			</div>

			<div className="community-links">
				<h2 className="community-title">Connect With Us</h2>
				<div className="link-cards">
					<a
						href="https://github.com/OpenMined/BioVault"
						target="_blank"
						rel="noopener noreferrer"
						className="link-card"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github', source: 'participant_page' });"
					>
						<svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
						<div className="link-content">
							<h3 className="link-title">GitHub</h3>
							<p className="link-desc">Contribute to the codebase</p>
						</div>
					</a>

					<a
						href="https://slack.openmined.org"
						target="_blank"
						rel="noopener noreferrer"
						className="link-card"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'slack', source: 'participant_page' });"
					>
						<svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
							<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
						</svg>
						<div className="link-content">
							<h3 className="link-title">Slack</h3>
							<p className="link-desc">Join us in #community-biovault</p>
						</div>
					</a>
				</div>
			</div>
		</div>

		<script
			dangerouslySetInnerHTML={{
				__html: `
				document.addEventListener('DOMContentLoaded', () => {
					// Metallic lighting effect for hero-cta-box
					const ctaBox = document.querySelector('.hero-cta-box');
					if (ctaBox) {
						ctaBox.addEventListener('mousemove', (e) => {
							const rect = ctaBox.getBoundingClientRect();
							const x = e.clientX - rect.left;
							const y = e.clientY - rect.top;
							const percentX = (x / rect.width) * 100;
							const percentY = (y / rect.height) * 100;

							// Calculate tilt based on mouse position (max 1.5 degrees)
							const tiltX = ((percentX - 50) / 50) * 1.5;
							const tiltY = ((50 - percentY) / 50) * 1.5;

							ctaBox.style.setProperty('--mouse-x', percentX + '%');
							ctaBox.style.setProperty('--mouse-y', percentY + '%');
							ctaBox.style.setProperty('--tilt-x', tiltX + 'deg');
							ctaBox.style.setProperty('--tilt-y', tiltY + 'deg');
						});

						ctaBox.addEventListener('mouseleave', () => {
							ctaBox.style.setProperty('--mouse-x', '50%');
							ctaBox.style.setProperty('--mouse-y', '50%');
							ctaBox.style.setProperty('--tilt-x', '0deg');
							ctaBox.style.setProperty('--tilt-y', '0deg');
						});
					}

					// Make follow-up checkboxes clickable anywhere
					document.addEventListener('click', (e) => {
						const checkboxDiv = e.target.closest('.follow-up-checkbox');
						if (checkboxDiv && e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') {
							const checkbox = checkboxDiv.querySelector('input[type="checkbox"]');
							if (checkbox) {
								checkbox.checked = !checkbox.checked;
							}
						}
					});
				});
			`,
			}}
		/>
	</>
)

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
	<div className="container">
		<header className="header">
			<h1 className="logo">BioVault</h1>
			<p className="tagline">Your data. Your control. Your choice.</p>
			<p>
				BioVault is a free, open-source app that lets you store your genomic data securely on your
				own device. You decide who can request access, you approve every analysis, and you always
				see which researchers have used your data.
				<strong>Your raw data never leaves your control.</strong>
			</p>
		</header>
		{message && <Message message={message} />}

		{/* Beta App Section */}
		<div className="beta-app-section">
			<h2 className="features-title">Beta App</h2>
			<p className="about-text" style="text-align: center; max-width: 700px; margin: 0 auto 2rem;">
				Join our beta program and be the first to try the BioVault mobile app. Sign up below to get access.
			</p>

			<div className="signup">
				<form id="waitlist-form-beta" className="signup-form" method="post" action="/api/waitlist">
					<input type="hidden" name="origin" value="participant-beta" />
					<input
						type="email"
						id="email-beta"
						name="email"
						className="email-input"
						placeholder="Enter your email for beta access"
						required
					/>
					<button type="submit" className="signup-btn">
						Join Beta
					</button>
				</form>
			</div>

			<div className="app-store-buttons">
				<a
					href="#"
					className="app-store-button testflight-button"
					onclick="event.preventDefault(); alert('Sign up for beta access above to get TestFlight access.');"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
					</svg>
					<div>
						<div className="app-store-label">Join via</div>
						<div className="app-store-name">TestFlight</div>
					</div>
				</a>
				<a
					href="#"
					className="app-store-button playstore-button"
					onclick="event.preventDefault(); alert('Sign up for beta access above to get Google Play access.');"
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
						<path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27m1.88-1.06c.38-.22.63-.63.63-1.06s-.25-.84-.63-1.06l-1.88-1.12-2.43 2.43 2.43 2.43 1.88-1.12M6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z"></path>
					</svg>
					<div>
						<div className="app-store-label">Coming to</div>
						<div className="app-store-name">Google Play</div>
					</div>
				</a>
			</div>
		</div>

		{/* Bento Grid */}
		<div className="bento-grid" style="margin-top: 3rem;">
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
				<input type="hidden" name="origin" value="participant" />
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
				<input type="hidden" name="origin" value="participant" />
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
	</div>
)

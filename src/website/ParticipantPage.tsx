import type { FC } from 'hono/jsx'
import { Message } from './Layout'

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

			{/* Participants Section */}
			<div className="top-section">
				<h2 className="top-section-title">For Participants</h2>
				<div className="top-section-content">
					<div
						className="network-intro"
						style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
					>
						{/* Left: App Image */}
						<div style={{ flexShrink: 0, width: '100%', maxWidth: '300px' }}>
							<img
								src={appImage}
								alt="BioVault Mobile App"
								style={{
									width: '100%',
									height: 'auto',
									borderRadius: '8px',
									filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.15))',
								}}
							/>
						</div>
						{/* Right: Text */}
						<div style={{ flex: 1 }}>
							<p>With the BioVault app, you are always in control of your own genomic data:</p>
							<ol className="story-steps">
								<li>
									<strong>Store your data securely</strong> — upload your raw data (VCF, BAM/CRAM,
									FASTQ, or files from 23andMe, AncestryDNA, MyHeritage, Dante Labs, etc.) directly
									into your BioVault on your phone or computer.
									<em>Your files never leave your device.</em>
								</li>
								<li>
									<strong>Approve requests from researchers</strong> — scientists can send you
									analysis requests. You'll see exactly who is asking, what they want to run, and
									you decide whether to allow it.
								</li>
								<li>
									<strong>Track who accessed your data</strong> — the app gives you a clear history
									of which researchers ran analyses, when they did it, and what results were shared.
									<em>Transparency is built in.</em>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>

			{/* Network Section */}
			<div className="network">
				<h2 className="network-title">How It Works</h2>
				<div
					className="network-intro"
					style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
				>
					<div style={{ flexShrink: 0, width: '50%' }}>
						<img
							src={networkImage}
							alt="BioVault Network"
							style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
						/>
					</div>
					<div style={{ flex: 1 }}>
						<p style={{ fontSize: '1.125rem' }}>
							BioVault is powered by
							<a href="https://syftbox.net" target="_blank" rel="noopener noreferrer">
								<strong>SyftBox</strong>
							</a>
							, an open-source protocol from{' '}
							<a href="https://openmined.org" target="_blank" rel="noopener noreferrer">
								OpenMined
							</a>{' '}
							for privacy-preserving remote data science. Instead of moving sensitive datasets to
							outside servers, SyftBox enables <em>data visitation</em>: code travels securely to
							where the data lives, runs locally, and only the results are shared back. This
							technology is already proven in industry for secure distributed computation, and
							BioVault applies it directly to genomics and biomedical research.
						</p>
					</div>
				</div>
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
						<div className="feature-icon">🔒</div>
						<h3 className="feature-title">Your Data, Your Control</h3>
						<p className="feature-desc">
							Your raw files never leave your device. You decide who can access your data and what
							they can run.
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">👀</div>
						<h3 className="feature-title">Full Transparency</h3>
						<p className="feature-desc">
							See a clear log of every researcher who has accessed your data, when they did it, and
							what analysis was performed.
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">⚡</div>
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
							The BioVault app keeps a complete, transparent log. You can always see which
							researchers ran analyses, when, and what results were shared.
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

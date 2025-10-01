import type { FC } from 'hono/jsx'

export const PrivacyPage: FC = () => (
	<div className="container">
		<header className="header">
			<h1 className="logo">Privacy Policy</h1>
			<p className="tagline">How we handle your information</p>
		</header>

		<div className="about-content">
			<section className="about-section">
				<p className="about-text" style="background: #f0f4f8; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #4A90E2;">
					This project is being developed within OpenMined. See our organization's privacy policy at{' '}
					<a
						href="https://openmined.org/privacy-policy/"
						target="_blank"
						rel="noopener noreferrer"
					>
						openmined.org/privacy-policy
					</a>
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">Our Commitment</h2>
				<p className="about-text">
					BioVault is fundamentally built on the principle of privacy-first design. We believe
					that genomic data should remain under the control of individuals and institutions who
					own it, and our technology is designed to enable research and collaboration without
					compromising that principle.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">What We Collect</h2>
				<p className="about-text">
					When you use our website or sign up for our beta program, we may collect:
				</p>
				<ul className="about-list">
					<li>Email address (for beta registration and communications)</li>
					<li>Basic analytics data (page views, referrer information)</li>
					<li>Technical information (browser type, device type, IP address)</li>
				</ul>
			</section>

			<section className="about-section">
				<h2 className="about-title">What We Don't Collect</h2>
				<p className="about-text">
					BioVault's architecture is designed so that:
				</p>
				<ul className="about-list">
					<li>Your genomic data never leaves your local environment</li>
					<li>We do not have access to your raw genetic information</li>
					<li>We do not store or transmit your personal health information</li>
					<li>Analysis results are only shared as you explicitly authorize</li>
				</ul>
			</section>

			<section className="about-section">
				<h2 className="about-title">How We Use Your Information</h2>
				<p className="about-text">
					We use the information we collect to:
				</p>
				<ul className="about-list">
					<li>Communicate with you about the BioVault beta program</li>
					<li>Improve our website and user experience</li>
					<li>Understand how people use our platform</li>
					<li>Provide technical support and respond to inquiries</li>
				</ul>
			</section>

			<section className="about-section">
				<h2 className="about-title">Data Security</h2>
				<p className="about-text">
					We implement industry-standard security measures to protect your information. All
					communications are encrypted, and we follow best practices for data storage and
					transmission. Our open-source approach means our security measures can be audited and
					verified by the community.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">Third-Party Services</h2>
				<p className="about-text">
					Our website uses the following third-party services:
				</p>
				<ul className="about-list">
					<li>Google Analytics (for website traffic analysis)</li>
					<li>SyftBox Metrics (for usage analytics)</li>
				</ul>
				<p className="about-text">
					These services have their own privacy policies and may collect information as described
					in their respective policies.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">Your Rights</h2>
				<p className="about-text">You have the right to:</p>
				<ul className="about-list">
					<li>Access the personal information we hold about you</li>
					<li>Request correction of any inaccurate information</li>
					<li>Request deletion of your information</li>
					<li>Opt out of communications at any time</li>
				</ul>
			</section>

			<section className="about-section">
				<h2 className="about-title">Open Source Transparency</h2>
				<p className="about-text">
					As an open-source project under the Apache 2.0 License, our code is publicly available
					for review. This transparency extends to our privacy practices — you can verify how we
					handle data by examining our codebases:
				</p>
				<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
					<a
						href="https://github.com/OpenMined/BioVault"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
					>
						BioVault CLI Repository
					</a>
					<a
						href="https://github.com/OpenMined/biovault-app"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
					>
						BioVault App Repository
					</a>
				</div>
			</section>

			<section className="about-section">
				<h2 className="about-title">Changes to This Policy</h2>
				<p className="about-text">
					We may update this privacy policy from time to time. We will notify users of any
					material changes by posting the new policy on this page and updating the "Last Updated"
					date below.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">Contact Us</h2>
				<p className="about-text">
					If you have questions about this privacy policy or how we handle your information,
					please reach out to us:
				</p>
				<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
					<a
						href="https://github.com/OpenMined/BioVault"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
					>
						GitHub: BioVault
					</a>
					<a
						href="https://slack.openmined.org"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
					>
						Slack: #community-biovault
					</a>
				</div>
			</section>

			<section className="about-section">
				<p className="about-text" style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.8;">
					Last Updated: October 1, 2025
				</p>
			</section>
		</div>
	</div>
)

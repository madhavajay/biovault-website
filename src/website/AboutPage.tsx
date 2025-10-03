import type { FC } from 'hono/jsx'

export const AboutPage: FC = () => (
	<div className="container">
		<header className="header">
			<h1 className="logo">About BioVault</h1>
			<p className="tagline">
				Privacy-preserving genomics collaboration built on <a href="https://syftbox.net" target="_blank" rel="noopener noreferrer">OpenMined's SyftBox</a>.
			</p>
		</header>

		<div className="team-profiles">
			<div className="profile-card">
				<img src="https://media.licdn.com/dms/image/v2/C5603AQHgs7paj0XRNg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516864859941?e=1762387200&v=beta&t=kEDcQ6_bXcMRQOHtuUZ8-Ri2MdIsEHNViBKvoXwM6x4" alt="Dawn Chen" className="profile-image" />
				<h3 className="profile-name">Dawn Chen</h3>
				<p className="profile-description">PhD Candidate @ Harvard University | ex-Googler | Synthetic Biology, RNA</p>
				<div className="profile-links">
					<a href="https://www.linkedin.com/in/dawnchenx/" target="_blank" rel="noopener noreferrer" className="profile-link">
						<svg className="profile-icon" viewBox="0 0 24 24" fill="currentColor">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
					<a href="mailto:dawnchen@fas.harvard.edu" className="profile-link">
						<svg className="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</a>
				</div>
			</div>

			<div className="profile-card">
				<img src="https://media.licdn.com/dms/image/v2/D5603AQHW2MJFgjULUg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1704422968045?e=1762387200&v=beta&t=ujF0mL7QwXWtZS06GdzyJ32LpTwteu0cU-Vzb9SnxKQ" alt="Madhava Jay" className="profile-image" />
				<h3 className="profile-name">Madhava Jay</h3>
				<p className="profile-description">Rare Disease Patient and Software Engineer @ OpenMined.org</p>
				<div className="profile-links">
					<a href="https://www.linkedin.com/in/madhavajay/" target="_blank" rel="noopener noreferrer" className="profile-link">
						<svg className="profile-icon" viewBox="0 0 24 24" fill="currentColor">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
						</svg>
					</a>
					<a href="mailto:madhava@openmined.org" className="profile-link">
						<svg className="profile-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
							<polyline points="22,6 12,13 2,6" />
						</svg>
					</a>
				</div>
			</div>
		</div>

		<div className="about-content">
			<section className="about-section">
				<h2 className="about-title">Our Mission</h2>
				<p className="about-text">
					BioVault is building the future of genomic research — one where collaboration doesn't
					require compromising privacy. We empower researchers and participants to unlock insights
					from sensitive genomic data without ever centralizing or exposing raw information.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">Built on Open Technology</h2>
				<p className="about-text">
					BioVault is powered by{' '}
					<a href="https://syftbox.net" target="_blank" rel="noopener noreferrer">
						SyftBox
					</a>
					, an open-source protocol from{' '}
					<a href="https://openmined.org" target="_blank" rel="noopener noreferrer">
						OpenMined
					</a>{' '}
					for privacy-preserving remote data science. OpenMined is a global community of engineers,
					researchers, and privacy advocates working to make the world more privacy-preserving by
					lowering the barrier to entry for privacy-enhancing technologies (PETs).

					For genomic analysis we utilize standard open source tools such as <a href="https://www.nextflow.io" target="_blank" rel="noopener noreferrer">NextFlow</a> and Docker Containers, so we can run any code or tool safely and securely.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">How It Works</h2>
				<p className="about-text">
					Instead of moving sensitive datasets to centralized servers, BioVault enables{' '}
					<strong>data visitation</strong>: code travels securely to where the data lives, runs
					locally, and only results are shared back. This approach ensures:
				</p>
				<ul className="about-list">
					<li>Participants maintain complete control over their genomic data</li>
					<li>Researchers can collaborate across institutions and borders</li>
					<li>Data never leaves its secure location</li>
					<li>Servers don't need to be always-online or in the cloud to participate</li>
					<li>End-to-end encryption protects all communications</li>
					<li>Secure enclaves enable joint analysis without centralizing data</li>
				</ul>
			</section>

			<section className="about-section">
				<h2 className="about-title">Open Source & Free</h2>
				<p className="about-text">
					BioVault is completely open source under the Apache 2.0 License. We believe that the tools
					for genomic research should be accessible to everyone, from rare disease groups to
					population genomics researchers in the Global South. No gatekeepers, no approval to use, no fees, just science
					moving forward.
				</p>
			</section>

			<section className="about-section">
				<h2 className="about-title">Join the Movement</h2>
				<p className="about-text">
					We're building a global network of researchers, participants, and organizations who
					believe that privacy and collaboration aren't mutually exclusive. Whether you're a rare
					disease patient, a genomics researcher, or a biobank — BioVault provides the
					infrastructure for secure, equitable collaboration.
				</p>
			</section>
		</div>

		<div className="community-links">
			<h2 className="community-title">Connect With Us</h2>
			<div className="link-cards">
				<a
					href="https://github.com/OpenMined/BioVault"
					target="_blank"
					rel="noopener noreferrer"
					className="link-card"
					onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github', source: 'about_page' });"
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
					onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'slack', source: 'about_page' });"
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

		<div className="signup">
			<h2 className="signup-title">Get Involved</h2>
			<p className="signup-subtitle">Join our beta program and help shape the future of genomics</p>
			<form id="waitlist-form" className="signup-form" method="post" action="/api/waitlist">
				<input type="hidden" name="source" value="website" />
				<input type="hidden" name="origin" value="about" />
				<input type="hidden" name="form_location" value="bottom" />
				<input
					type="email"
					id="email"
					name="email"
					className="email-input"
					placeholder="Enter your email address"
					required
				/>
				<button type="submit" className="signup-btn">
					Join Beta
				</button>
			</form>
		</div>
	</div>
)

import type { FC } from 'hono/jsx'

export const AboutPage: FC = () => (
	<div className="container">
		<header className="header">
			<h1 className="logo">About BioVault</h1>
			<p className="tagline">
				Privacy-preserving genomics collaboration built on OpenMined's SyftBox
			</p>
		</header>

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
				<h2 className="about-title">Built on OpenMined Technology</h2>
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
					<li>End-to-end encryption protects all communications</li>
					<li>Secure enclaves enable joint analysis without centralizing data</li>
				</ul>
			</section>

			<section className="about-section">
				<h2 className="about-title">Open Source & Free</h2>
				<p className="about-text">
					BioVault is completely open source under the Apache 2.0 License. We believe that the tools
					for genomic research should be accessible to everyone, from rare disease groups to
					population genomics researchers in the Global South. No gatekeepers, no fees, just science
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

		<div className="signup">
			<h2 className="signup-title">Get Involved</h2>
			<p className="signup-subtitle">Join our beta program and help shape the future of genomics</p>
			<form id="waitlist-form" className="signup-form" method="post" action="/api/waitlist">
				<input type="hidden" name="origin" value="about" />
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

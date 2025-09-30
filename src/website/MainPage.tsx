import type { FC } from 'hono/jsx'
import { Message } from './Layout'

// Using string paths for images since Wrangler doesn't bundle static assets
const appImage = '/images/app.png'
const networkImage = '/images/network.jpg'

interface PageProps {
	message?: string
}

export const MainPage: FC<PageProps> = ({ message }) => (
	<>
		<div className="container">
			<header className="header">
				<h1 className="logo">BioVault</h1>
				<p className="tagline">
					BioVault is a free, open-source, permissionless network for collaborative genomics.
				</p>
				<p>
					Built with end-to-end encryption, secure enclaves, and data visitation, BioVault lets
					researchers and participants share insights without ever sharing raw data.
				</p>
			</header>
			{message && <Message message={message} />}

			<div className="main-content">
				{/* Researchers Section */}
				<div className="section">
					<h2 className="section-title">For Researchers</h2>
					<div className="section-content">
						<div className="cli-mockup">
							<div className="cli-line">
								<span className="cli-prompt">$</span>{' '}
								<span className="cli-command">bv biobank list</span>
							</div>
							<div className="cli-line">
								<span className="cli-output">✓ Listing BioBanks</span>
							</div>
							<div className="cli-line">
								<span className="cli-prompt">$</span>{' '}
								<span className="cli-command">
									bv run ./myproject syft://research@mybiobank#participants --test
								</span>
							</div>
							<div className="cli-line">
								<span className="cli-output">✓ Testing NextFlow Pipeline</span>
							</div>
							<div className="cli-line">
								<span className="cli-prompt">$</span>{' '}
								<span className="cli-command">
									bv submit ./myproject syft://research@mybiobank#participants
								</span>
							</div>
							<div className="cli-line">
								<span className="cli-output">⚡ Analysis Submitted</span>
							</div>
							<div className="cli-line">
								<span className="cli-output">---------------------------------</span>
							</div>
							<div className="cli-line">
								<span className="cli-prompt">$</span> <span className="cli-command">bv inbox</span>
							</div>
							<table className="cli-table">
								<thead>
									<tr>
										<th>Project</th>
										<th>Status</th>
										<th>Path</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>myproject</td>
										<td>
											<span>✅ Success</span>
										</td>
										<td>./myproject/results</td>
									</tr>
								</tbody>
							</table>
						</div>
						<div className="how-it-works">
							<h3 className="how-it-works-title">How it works:</h3>
							<ul className="how-it-works-list">
								<li>Find participants with variant and phenotype data for research</li>
								<li>Submit nextflow pipelines to BioVault users or biobanks</li>
								<li>Write nextflow pipelines with the help of AI</li>
								<li>
									Perform joins between participants in different biovaults using Secure Enclaves
								</li>
								<li>No need to safe guard sensitive data that is never shared</li>
							</ul>
						</div>
					</div>
					<div className="badges">
						<span className="badge">FASTQ</span>
						<span className="badge">BAM</span>
						<span className="badge">CRAM</span>
						<span className="badge">VCF</span>
						<span className="badge">NextFlow</span>
						<span className="badge">Phenotype Data</span>
						<span className="badge">Wearable Data</span>
					</div>
				</div>

				{/* Network Section */}
				<div className="section">
					<h2 className="section-title">Open Network</h2>
					<div className="section-content">
						<div className="image-wrapper">
							<img src={networkImage} alt="BioVault Network" />
						</div>
						<div className="how-it-works">
							<h3 className="how-it-works-title">How it works:</h3>
							<ul className="how-it-works-list">
								<li>Variants published to relay server with public keys for anonymity</li>
								<li>Built on SyftBox, an open-source network for secure data science</li>
								<li>Encrypted messages via relay servers, no open ports needed</li>
								<li>Data stays on participants' devices, only insights are shared</li>
								<li>Collaborate without requiring data uploads to the cloud</li>
							</ul>
						</div>
					</div>
					<div className="badges">
						<span className="badge">Open Source</span>
						<span className="badge">Open Network</span>
						<span className="badge">End-to-end Encrypted</span>
						<span className="badge">Secure Enclaves</span>
					</div>
				</div>

				{/* Participants Section */}
				<div className="section">
					<h2 className="section-title">For Participants</h2>
					<div className="section-content">
						<div className="mobile-mockups">
							<img
								src={appImage}
								alt="BioVault Mobile App"
								style={{ filter: 'drop-shadow(0 10px 40px rgba(0, 0, 0, 0.15))' }}
							/>
						</div>
						<div className="how-it-works">
							<h3 className="how-it-works-title">How it works:</h3>
							<ul className="how-it-works-list">
								<li>Supports common variant and raw data formats from major providers</li>
								<li>Get free ClinVar updates for your variants without sharing data</li>
								<li>
									Invite clinicians and experts to analyze your data on your computer securely
								</li>
							</ul>
						</div>
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
			</div>

			{/* Top Signup Strip */}
			<div className="signup-strip">
				<form id="waitlist-form-top" className="signup-form" method="post" action="/api/waitlist">
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
				<h2 className="features-title">Built for the Future of Research</h2>
				<div className="features-grid">
					<div className="feature">
						<div className="feature-icon">🔓</div>
						<h3 className="feature-title">Open Source</h3>
						<p className="feature-desc">
							Transparent, community-driven development with full access to source code
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">💚</div>
						<h3 className="feature-title">Free</h3>
						<p className="feature-desc">
							Apache 2.0 Licensed. No fees or hidden costs. Research should be accessible to
							everyone
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">🚀</div>
						<h3 className="feature-title">Permissionless</h3>
						<p className="feature-desc">
							Start collaborating immediately without any approval processes
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">🔒</div>
						<h3 className="feature-title">Privacy First</h3>
						<p className="feature-desc">End-to-end encryption and user-controlled data sharing</p>
					</div>
					<div className="feature">
						<div className="feature-icon">🌐</div>
						<h3 className="feature-title">Decentralized</h3>
						<p className="feature-desc">
							No single point of failure or control - true peer-to-peer research
						</p>
					</div>
					<div className="feature">
						<div className="feature-icon">⚡</div>
						<h3 className="feature-title">Secure Enclaves</h3>
						<p className="feature-desc">
							Leverage state of the art secure enclaves to perform joint analysis between data
							without centralizing it
						</p>
					</div>
				</div>
			</div>

			<div className="call-to-action">
				<h2 className="cta-title">Beta Testers</h2>
				<ul className="cta-list">
					<li className="cta-item">
						Rare disease patients who already have access to their raw sequencing data.
					</li>
					<li className="cta-item">
						Participants who have Variant data from services like 23andme, Ancestry, MyHeritage,
						CariGenetics.com, Sequencing.com, Dante Labs, Nebula, etc.
					</li>
					<li className="cta-item">
						Researchers who want to help perform data visitation and remote data science with the
						platform.
					</li>
					<li className="cta-item">Organisations or Labs with access to .</li>
					<li className="cta-item">
						Tech enthusiasts who want to learn about Genomics and have some fun!
					</li>
				</ul>
				<p className="cta-desc"></p>
			</div>

			{/* Signup Section */}
			<div className="signup">
				<h2 className="signup-title">Join the Beta</h2>
				<p className="signup-subtitle">Get updates and early access to BioVault</p>
				<form id="waitlist-form" className="signup-form" method="post" action="/api/waitlist">
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
							BioVault is a platform designed to empower individuals and revolutionize research by
							providing a secure, decentralized, and open-source environment for genomics
							collaboration.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">How can I join the Beta?</h3>
						<p className="faq-answer">
							You can join the Beta by signing up with your email address in the signup section
							above. We will send you updates and early access information.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">Is BioVault free to use?</h3>
						<p className="faq-answer">
							Yes, BioVault is free to use under the Apache 2.0 License. We believe the fruits of
							genetic research should be accessible to everyone.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">How does BioVault ensure privacy?</h3>
						<p className="faq-answer">
							BioVault ensures privacy through end-to-end encryption and user-controlled data
							sharing, ensuring your data is always secure.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">What is SyftBox?</h3>
						<p className="faq-answer">
							<a href="https://syftbox.net" target="_blank">
								SyftBox.net
							</a>{' '}
							is an open-source network for privacy-first, offline-capable data science and AI.
						</p>
					</div>
					<div className="faq-item">
						<h3 className="faq-question">How does SyftBox work?</h3>
						<p className="faq-answer">
							SyftBox is designed to work everywhere including on mobile devices and home computers
							which can go offline at any time.
							<br />
							<br />
						</p>
						<p className="faq-answer">
							SyftBox works by sending end-to-end encrypted network messages which can be cached
							temporarily via relay servers, thus eliminating the need for open ports and online
							connections.
						</p>
					</div>
				</div>
			</div>
		</div>

		<script
			dangerouslySetInnerHTML={{
				__html: `
				document.addEventListener('DOMContentLoaded', () => {
					// Function to handle form submission tracking
					function trackFormSubmit(formId, emailInputId, location) {
						const form = document.getElementById(formId);
						if (form) {
							form.addEventListener('submit', () => {
								const emailInput = document.getElementById(emailInputId);
								const email = (emailInput?.value || '').toLowerCase();
								const domain = email.split('@')[1] || '';
								gtag('event', 'waitlist_submit_attempt', {
									method: 'html_form',
									location: location,
									email_domain: domain,
									transport_type: 'beacon'
								});
							});
						}
					}
					
					// Apply tracking to both forms
					trackFormSubmit('waitlist-form', 'email', 'bottom');
					trackFormSubmit('waitlist-form-top', 'email-top', 'top');

					// Add subtle animations on scroll
					const observerOptions = {
						threshold: 0.1,
						rootMargin: '0px 0px -100px 0px'
					};

					const observer = new IntersectionObserver((entries) => {
						entries.forEach(entry => {
							if (entry.isIntersecting) {
								entry.target.style.opacity = '1';
								entry.target.style.transform = 'translateY(0)';
							}
						});
					}, observerOptions);

					document.querySelectorAll('.section, .features, .signup').forEach(el => {
						el.style.opacity = '0';
						el.style.transform = 'translateY(30px)';
						el.style.transition = 'all 0.6s ease';
						observer.observe(el);
					});
				});
			`,
			}}
		/>
	</>
)

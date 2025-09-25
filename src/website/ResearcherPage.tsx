import type { FC } from 'hono/jsx'
import { Layout, Message } from './Layout'

// Using string path for image since Wrangler doesn't bundle static assets
const networkImage = '/images/network.jpg'

interface PageProps {
	message?: string
}

export const ResearcherPage: FC<PageProps> = ({ message }) => (
	<Layout title="Join the Beta - BioVault is a free and open-source tool and permissionless network for collaborative genomics">
		<div className="container">
			<header className="header">
				<h1 className="logo">BioVault</h1>
				<p className="tagline">Secure by design, shared by choice.</p>
				<p>
					BioVault is a free, open-source platform for secure genomic collaboration. Using
					end-to-end encryption, trusted execution, and data visitation technologies, BioVault lets
					researchers and patient groups unlock insights{' '}
					<strong>without ever giving up raw data</strong>.
				</p>
			</header>
			{message && <Message message={message} />}

			{/* Researchers Section */}
			<div className="top-section">
				<h2 className="top-section-title">For Researchers</h2>
				<div className="top-section-content">
					<div className="story-intro">
						<p>
							Are you a researcher working with sensitive datasets—like whole genome sequences,
							clinical records, or phenotype data? You want to collaborate with other scientists,
							but you can't just hand over your raw data.
							<strong>That's where BioVault comes in.</strong>
						</p>

						<ol className="story-steps">
							<li>
								<strong>Create your private BioVault</strong> — set up a secure workspace for your
								sensitive data (e.g., patient genomes or clinical records) that only you control.
								<div className="cli-mockup">
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">bv init my_patient_data</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">✓ BioVault "my_patient_data" created locally</span>
									</div>
								</div>
							</li>

							<li>
								<strong>Add your data</strong> — place sequencing files (FASTQ, BAM/CRAM, VCF,
								phenotype data, etc.) into the vault. The files stay on your machine and never leave
								your control.
								<div className="cli-mockup">
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">
											bv add ./data/patient1.vcf --vault my_patient_data
										</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">✓ Added 1 file to BioVault "my_patient_data"</span>
									</div>
								</div>
							</li>

							<li>
								<strong>Collaborator prepares code</strong> — another researcher builds and tests a
								workflow or <em>arbitrary code</em> against your vault (e.g., GWAS, splicing
								analysis, or custom scripts).
								<div className="cli-mockup">
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">bv vault list</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">✓ Listing Vaults</span>
									</div>
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">
											bv run ./variant_discovery_analysis
											syft://research@my_patient_data#participants --test
										</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">✓ Testing workflow on target vault</span>
									</div>
								</div>
							</li>

							<li>
								<strong>Workflow is submitted for your review</strong> — the collaborator sends
								their code to your inbox. You see exactly what will run before deciding whether to
								approve.
								<div className="cli-mockup">
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">
											bv submit ./variant_discovery_analysis
											syft://research@my_patient_data#participants
										</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">⚡ Analysis Submitted</span>
									</div>
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">bv inbox</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">
											1 pending request: Collaborator@University → pipeline:
											variant_discovery_analysis.nf
										</span>
									</div>
								</div>
							</li>

							<li>
								<strong>Approve and run locally</strong> — once approved, the workflow or arbitrary
								code runs inside your BioVault. The raw data never leaves your machine; only results
								are shared back.
								<div className="cli-mockup">
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">bv approve variant_discovery_analysis</span>
									</div>
									<div className="cli-line">
										<span className="cli-output">
											✓ Approved. Running NextFlow pipeline securely...
										</span>
									</div>
									<div className="cli-line">
										<span className="cli-prompt">$</span>{' '}
										<span className="cli-command">bv inbox</span>
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
												<td>variant_discovery_analysis</td>
												<td>
													<span>✅ Success</span>
												</td>
												<td>./results/variant_discovery_out.csv</td>
											</tr>
										</tbody>
									</table>
								</div>
							</li>
						</ol>

						<div className="network-intro">
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
									<a href="https://syftbox.net/" target="_blank" rel="noopener noreferrer">
										<strong>SyftBox</strong>
									</a>
									, an open-source protocol from{' '}
									<a href="https://openmined.org" target="_blank" rel="noopener noreferrer">
										OpenMined
									</a>{' '}
									for privacy-preserving remote data science. Instead of moving sensitive datasets
									to outside servers, SyftBox enables <em>data visitation</em>: code travels
									securely to where the data lives, runs locally, and only the results are shared
									back. This technology is already proven in industry for secure distributed
									computation, and BioVault applies it directly to genomics and biomedical research.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Top Signup Strip */}
			<div className="signup-strip">
				<form id="waitlist-form-top" className="signup-form" method="post" action="/api/waitlist">
					<input type="hidden" name="origin" value="researcher" />
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
				<h2 className="features-title">Collaboration Without Surrendering Control</h2>
				<div className="features-grid">
					<div className="feature">
						<div className="feature-icon">🧬</div>
						<h3 className="feature-title">You Stay in Control</h3>
						<p className="feature-desc">
							Run pipelines on sensitive datasets without moving raw files—code travels to the data,
							not the other way around.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">🔒</div>
						<h3 className="feature-title">Privacy First</h3>
						<p className="feature-desc">
							Protect participants with end-to-end encryption and secure enclaves for joint analysis
							without centralizing data.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">🌍</div>
						<h3 className="feature-title">Global Equity</h3>
						<p className="feature-desc">
							Empower researchers and patient groups everywhere—including the Global South and
							under-resourced labs—by keeping data under local control while still enabling insights
							to be shared worldwide.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">📊</div>
						<h3 className="feature-title">Reproducible Science</h3>
						<p className="feature-desc">
							Standardized workflows and versioned pipelines ensure results can be validated and
							reproduced across labs.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">⚡</div>
						<h3 className="feature-title">Fast, Remote Data Science</h3>
						<p className="feature-desc">
							Perform remote data visitation at scale—submit pipelines across multiple vaults and
							get results back quickly.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">🔓</div>
						<h3 className="feature-title">Open and Transparent</h3>
						<p className="feature-desc">
							Open-source and free to use. No gatekeepers, no hidden costs—just science moving
							forward.
						</p>
					</div>
				</div>
			</div>

			<div className="call-to-action">
				<h2 className="cta-title">Join as a Beta Tester</h2>
				<ul className="cta-list">
					<li className="cta-item">
						<strong>Rare disease groups</strong> accelerating the diagnosis odyssey by collaborating
						with other groups without exposing sensitive patient data.
					</li>
					<li className="cta-item">
						<strong>Infectious disease teams</strong> sharing insights across hospitals, countries,
						and organizations while keeping data secure and under local control.
					</li>
					<li className="cta-item">
						<strong>Genomics researchers</strong> driving global equity—building open, collaborative
						science where data remains with communities, not big tech companies.
					</li>
				</ul>
				<p className="cta-desc">
					BioVault is part of a pilot initiative to make data free and open access for research
					while
					<em>protecting the rights of individuals</em> whose samples power these datasets. Your
					participation helps prove that global collaboration in science and genomics is possible
					without ceding control of data to centralized institutions or big tech companies.
				</p>
			</div>

			<div className="faq">
				<h2 className="faq-title">Frequently Asked Questions</h2>
				<div className="faq-grid">
					<div className="faq-item">
						<h3 className="faq-question">What is BioVault?</h3>
						<p className="faq-answer">
							BioVault is a platform for secure, privacy-preserving genomics research. It enables{' '}
							<em>data visitation</em>—where code travels to the data, runs locally, and only
							results are shared. This allows rare disease groups, biobanks, and population genomics
							researchers to collaborate globally without surrendering control of sensitive
							datasets.
						</p>
					</div>

					<div className="faq-item">
						<h3 className="faq-question">Who should join the Beta?</h3>
						<p className="faq-answer">
							We're looking for rare disease organizations, population genomics projects, and
							research teams who want to collaborate securely across institutions and borders. If
							you steward valuable datasets but need to protect participant privacy, BioVault is
							built for you.
						</p>
					</div>

					<div className="faq-item">
						<h3 className="faq-question">Is BioVault free to use?</h3>
						<p className="faq-answer">
							Yes. BioVault is open-source and free under the Apache 2.0 License. Our goal is to
							advance science and diagnosis by making genomic data accessible for research while
							ensuring equity—especially for communities often excluded from large-scale projects.
						</p>
					</div>

					<div className="faq-item">
						<h3 className="faq-question">How does BioVault protect privacy?</h3>
						<p className="faq-answer">
							Your raw data never leaves your control. BioVault uses end-to-end encryption, secure
							enclaves, and user approval for every analysis request. Collaborators receive results,
							not your underlying data.
						</p>
					</div>

					<div className="faq-item">
						<h3 className="faq-question">What is SyftBox and why does it matter?</h3>
						<p className="faq-answer">
							<a href="https://openmined.org/syftbox/" target="_blank" rel="noopener noreferrer">
								SyftBox
							</a>
							is an open-source protocol from OpenMined that powers privacy-preserving remote data
							science. It enables distributed computations across datasets without centralizing
							them—technology already trusted in industry and now applied to genomics through
							BioVault.
						</p>
					</div>

					<div className="faq-item">
						<h3 className="faq-question">
							Can this work across countries and under-resourced labs?
						</h3>
						<p className="faq-answer">
							Yes. BioVault is designed for global collaboration—including researchers in the Global
							South. Because data never leaves local machines, institutions can participate without
							losing sovereignty over their datasets, helping ensure genomic equity worldwide.
						</p>
					</div>
				</div>
			</div>

			{/* Signup Section */}
			<div className="signup">
				<h2 className="signup-title">Join the Beta</h2>
				<p className="signup-subtitle">Get updates and early access to BioVault</p>
				<form id="waitlist-form" className="signup-form" method="post" action="/api/waitlist">
					<input type="hidden" name="origin" value="researcher" />
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
	</Layout>
)

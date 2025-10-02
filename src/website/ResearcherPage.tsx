import type { FC } from 'hono/jsx'
import { Message } from './Layout'
import { Icons } from './Icons'

// Using string path for image since Wrangler doesn't bundle static assets
const networkImage = '/images/network.jpg'

interface PageProps {
	message?: string
}

export const ResearcherPage: FC<PageProps> = ({ message }) => (
	<>
		{/* Hero Section */}
		<div className="hero-section">
			<div className="hero-image">
				<picture>
					<source
						srcset="/images/researcher-320.avif 320w, /images/researcher-640.avif 640w, /images/researcher-1280.avif 1280w, /images/researcher.avif 1920w"
						sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1280px"
						type="image/avif"
					/>
					<img src="/images/researcher.jpg" alt="Researcher in laboratory" />
				</picture>
			</div>
			<div className="hero-content">
				<h1 className="hero-headline">The hard part shouldn't be getting to the data</h1>
				<p className="hero-description">
					Researchers lose months fighting through access requests, approvals, and IT hoops just to start an analysis. BioVault cuts through the red tape: a <strong>free</strong>, <strong>open-source</strong> platform that lets you run pipelines directly on distributed data with <strong>end-to-end encryption</strong> and <strong>secure enclaves</strong>. Using <strong>data visitation</strong> and optional <strong>human-in-the-loop approvals</strong>, data owners can rest easy knowing they never give up ownership — raw data is never uploaded or exposed via open ports. No centralizing, no delays — just research projects starting in days, not months.
				</p>
				<div className="hero-cta-box">
					<h2 className="hero-cta-title">Join the Beta and get:</h2>
					<ul className="hero-cta-benefits">
						<li>Personal help setting up BioVault for your research</li>
						<li>Introductions to collaborators and patient groups</li>
						<li>Directly steer our development to solve your problems</li>
					</ul>
					<form id="waitlist-form-hero" className="hero-form" method="post" action="/api/waitlist">
						<input type="hidden" name="source" value="website" />
						<input type="hidden" name="origin" value="researcher" />
						<input type="hidden" name="form_location" value="hero" />
						<input type="hidden" name="follow_up_questions" value="researcher" />
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
					</div>
				</div>
			</div>

			{/* Network/SyftBox Explanation */}
			<div className="info-banner">
				<p>
					BioVault is powered by{' '}
					<a href="https://syftbox.net/" target="_blank" rel="noopener noreferrer">
						<strong>SyftBox</strong>
					</a>
					, an open-source protocol from{' '}
					<a href="https://openmined.org" target="_blank" rel="noopener noreferrer">
						OpenMined
					</a>{' '}
					for privacy-preserving remote data science. Instead of moving sensitive datasets to
					outside servers, SyftBox enables <em>data visitation</em>: code travels securely to where
					the data lives, runs locally, and only the results are shared back. This technology is
					already proven in industry for secure distributed computation, and BioVault applies it
					directly to genomics and biomedical research.
				</p>
			</div>

			{/* Top Signup Strip */}
			<div className="signup-strip">
				<form id="waitlist-form-top" className="signup-form" method="post" action="/api/waitlist">
					<input type="hidden" name="source" value="website" />
					<input type="hidden" name="origin" value="researcher" />
					<input type="hidden" name="form_location" value="top_strip" />
					<input type="hidden" name="follow_up_questions" value="researcher" />
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
						<div className="feature-icon">
							<Icons.Dna />
						</div>
						<h3 className="feature-title">You Stay in Control</h3>
						<p className="feature-desc">
							Run pipelines on sensitive datasets without moving raw files—code travels to the data,
							not the other way around.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">
							<Icons.Shield />
						</div>
						<h3 className="feature-title">Privacy First</h3>
						<p className="feature-desc">
							Protect participants with end-to-end encryption and secure enclaves for joint analysis
							without centralizing data.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">
							<Icons.Globe />
						</div>
						<h3 className="feature-title">Global Equity</h3>
						<p className="feature-desc">
							Empower researchers and patient groups everywhere—including the Global South and
							under-resourced labs—by keeping data under local control while still enabling insights
							to be shared worldwide.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">
							<Icons.BarChart />
						</div>
						<h3 className="feature-title">Reproducible Science</h3>
						<p className="feature-desc">
							Standardized workflows and versioned pipelines ensure results can be validated and
							reproduced across labs.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">
							<Icons.Zap />
						</div>
						<h3 className="feature-title">Fast, Remote Data Science</h3>
						<p className="feature-desc">
							Perform remote data visitation at scale—submit pipelines across multiple vaults and
							get results back quickly.
						</p>
					</div>

					<div className="feature">
						<div className="feature-icon">
							<Icons.LockOpen />
						</div>
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
							</a> is an open-source protocol from OpenMined that powers privacy-preserving remote data
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
					<input type="hidden" name="source" value="website" />
					<input type="hidden" name="origin" value="researcher" />
					<input type="hidden" name="form_location" value="bottom" />
					<input type="hidden" name="follow_up_questions" value="researcher" />
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

					// Apply tracking to all forms
					trackFormSubmit('waitlist-form', 'email', 'bottom');
					trackFormSubmit('waitlist-form-top', 'email-top', 'top');
					trackFormSubmit('waitlist-form-hero', 'email-hero', 'hero');

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

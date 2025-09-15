import styles from './styles.css';
import appImage from './images/app.png';
import networkImage from './images/network.jpg';

export function renderHtmlParticipant(message?: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Join the Beta - BioVault is a free and open-source tool and permissionless network for collaborative genomics</title>
        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4D2KBBR5W5"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4D2KBBR5W5');
        </script>
        <script
            src="https://metrics.syftbox.net/api/script.js"
            data-site-id="3"
            defer
        ></script>
        <style>
          ${styles}
        </style>
      </head>
    <body>
    <div class="container">
        <header class="header">
            <h1 class="logo">BioVault</h1>
            <p class="tagline">BioVault is a free, open-source, permissionless network for collaborative genomics.</p>
            <p></p>Built with end-to-end encryption, secure enclaves, and data visitation, BioVault lets researchers and
            participants share insights without ever sharing raw data.</p>
        </header>
        ${message ? `
          <div class="message ${message.startsWith('Success') ? 'success' : 'error'}">
            ${message}
          </div>
        ` : ''}

        <div class="main-content">
            <!-- Researchers Section -->
            <div class="section">
                <h2 class="section-title">For Researchers</h2>
                <div class="section-content">
                    <div class="cli-mockup">
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv biobank
                            list</span>
                    </div>
                    <div class="cli-line"><span class="cli-output">✓ Listing BioBanks</span></div>
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv run ./myproject
                            syft://research@mybiobank#participants --test</span></div>
                    <div class="cli-line"><span class="cli-output">✓ Testing NextFlow Pipeline</span></div>
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv submit
                            ./myproject syft://research@mybiobank#participants</span></div>
                    <div class="cli-line"><span class="cli-output">⚡ Analysis Submitted</span></div>
                    <div class="cli-line"><span class="cli-output">---------------------------------</span></div>
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv inbox</span></div>
                    <table class="cli-table">
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
                                <td><span>✅ Success</span></td>
                                <td>./myproject/results</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="how-it-works">
                        <h3 class="how-it-works-title">How it works:</h3>
                        <ul class="how-it-works-list">
                            <li>Find participants with variant and phenotypedata for research</li>
                            <li>Submit nextflow pipelines to BioVault users or biobanks</li>
                            <li>Write nextflow pipelines with the help of AI</li>
                            <li>Perform joins between participants in different biovaults using Secure Enclaves</li>
                            <li>No need to safe guard sensitive data that is never shared</li>
                        </ul>
                    </div>
                </div>
                <div class="badges">
                    <span class="badge">FASTQ</span>
                    <span class="badge">BAM</span>
                    <span class="badge">CRAM</span>
                    <span class="badge">VCF</span>
                    <span class="badge">NextFlow</span>
                    <span class="badge">Phenotype Data</span>
                    <span class="badge">Wearable Data</span>
                </div>
            </div>

            <!-- Network Section -->
            <div class="section">
                <h2 class="section-title">Open Network</h2>
                <div class="section-content">
                    <div style="text-align: center; margin-bottom: 1rem;">
                        <img src="${networkImage}" alt="BioVault Network" style="max-width: 100%; height: auto; border-radius: 8px;" />
                    </div>
                    <div class="how-it-works">
                        <h3 class="how-it-works-title">How it works:</h3>
                        <ul class="how-it-works-list">
                            <li>Variants published to relay server with public keys for anonymity</li>
                            <li>Built on SyftBox, an open-source network for secure data science</li>
                            <li>Encrypted messages via relay servers, no open ports needed</li>
                            <li>Data stays on participants' devices, only insights are shared</li>
                            <li>Collaborate without requiring data uploads to the cloud</li>
                        </ul>
                    </div>
                </div>
                <div class="badges">
                    <span class="badge">Open Source</span>
                    <span class="badge">Open Network</span>
                    <span class="badge">End-to-end Encrypted</span>
                    <span class="badge">Secure Enclaves</span>
                </div>
            </div>

            <!-- Participants Section -->
            <div class="section">
                <h2 class="section-title">For Participants</h2>
                <div class="section-content">
                    <div class="mobile-mockups">
                        <img src="${appImage}" alt="BioVault Mobile App" style="max-width: 100%; height: auto; filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.15));" />
                    </div>
                    <div class="how-it-works">
                        <h3 class="how-it-works-title">How it works:</h3>
                        <ul class="how-it-works-list">
                            <li>Supports common variant and raw data formats from major providers</li>    
                            <li>Get free ClinVar updates for your variants without sharing data</li>
                            <li>Invite clinicians and experts to analyze your data on your computer securely</li>
                        </ul>
                    </div>
                </div>
                <div class="badges">
                    <span class="badge">VCFs</span>
                    <span class="badge">23andme</span>
                    <span class="badge">AncestryDNA</span>
                    <span class="badge">MyHeritage</span>
                    <span class="badge">CariGenetics.com</span>
                    <span class="badge">Sequencing.com</span>
                    <span class="badge">Dante Labs</span>
                    <span class="badge">Nebula</span>
                </div>
            </div>
        </div>

        <!-- Top Signup Strip -->
        <div class="signup-strip">
            <form id="waitlist-form-top" class="signup-form" method="POST" action="/api/waitlist">
                <input type="email" name="email" id="email-top" class="email-input" placeholder="Enter your email for beta access" required>
                <button type="submit" class="signup-btn">Join Beta</button>
            </form>
        </div>

        <!-- Features Section -->
        <div class="features">
            <h2 class="features-title">Built for the Future of Research</h2>
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">🔓</div>
                    <h3 class="feature-title">Open Source</h3>
                    <p class="feature-desc">Transparent, community-driven development with full access to source code
                    </p>
                </div>
                <div class="feature">
                    <div class="feature-icon">💚</div>
                    <h3 class="feature-title">Free</h3>
                    <p class="feature-desc">Apache 2.0 Licensed. No fees or hidden costs. Research should be accessible
                        to
                        everyone</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🚀</div>
                    <h3 class="feature-title">Permissionless</h3>
                    <p class="feature-desc">Start collaborating immediately without any approval processes</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🔒</div>
                    <h3 class="feature-title">Privacy First</h3>
                    <p class="feature-desc">End-to-end encryption and user-controlled data sharing</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🌐</div>
                    <h3 class="feature-title">Decentralized</h3>
                    <p class="feature-desc">No single point of failure or control - true peer-to-peer research</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Secure Enclaves</h3>
                    <p class="feature-desc">Leverage state of the art secure enclaves to perform joint analysis between
                        data without centralizing it</p>
                </div>
            </div>
        </div>

        <div class="call-to-action">
            <h2 class="cta-title">Beta Testers</h2>
            <ul class="cta-list">
                <li class="cta-item">Rare disease patients who already have access to their raw sequencing data.</li>
                <li class="cta-item">Participants who have Variant data from services like 23andme, Ancestry,
                    MyHeritage, CariGenetics.com, Sequencing.com, Dante Labs, Nebula, etc.</li>
                <li class="cta-item">Researchers who want to help perform data visitation and remote data science with
                    the platform.</li>
                <li class="cta-item">Organisations or Labs with access to .</li>
                <li class="cta-item">Tech enthusiasts who want to learn about Genomics and have some fun!</li>
            </ul>
            <p class="cta-desc"></p>
        </div>


        <!-- Signup Section -->
        <div class="signup">
            <h2 class="signup-title">Join the Beta</h2>
            <p class="signup-subtitle">Get updates and early access to BioVault</p>
            <form id="waitlist-form" class="signup-form" method="POST" action="/api/waitlist">
                <input type="email" id="email" name="email" class="email-input" placeholder="Enter your email address" required>
                <button type="submit" class="signup-btn">Get Updates</button>
            </form>
            <script>
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
            });
          </script>
        </div>

        <div class="faq">
            <h2 class="faq-title">Frequently Asked Questions</h2>
            <div class="faq-grid">
                <div class="faq-item">
                        <h3 class="faq-question">What is BioVault?</h3>
                        <p class="faq-answer">BioVault is a platform designed to empower individuals and revolutionize research by providing a secure, decentralized, and open-source environment for genomics collaboration.</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">How can I join the Beta?</h3>
                        <p class="faq-answer">You can join the Beta by signing up with your email address in the signup section
                            above. We will send you updates and early access information.</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">Is BioVault free to use?</h3>
                        <p class="faq-answer">Yes, BioVault is free to use under the Apache 2.0 License. We believe the fruits of genetic research should be accessible to everyone.</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">How does BioVault ensure privacy?</h3>
                        <p class="faq-answer">BioVault ensures privacy through end-to-end encryption and user-controlled data
                            sharing, ensuring your data is always secure.</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">What is SyftBox?</h3>
                        <p class="faq-answer"><a href="https://syftbox.net" target="_blank">SyftBox.net</a> is an open-source network for privacy-first, offline-capable data science and AI.</p>
                    </div>
                    <div class="faq-item">
                        <h3 class="faq-question">How does SyftBox work?</h3>
                        <p class="faq-answer">SyftBox is designed to work everywhere including on mobile devices and home computers which can go offline at any time.<br /><br /></p>
                        <p class="faq-answer">SyftBox works by sending end-to-end encrypted network messages which can be cached temporarily via relay servers, thus eliminating the need for open ports and online connections.</p>
                    </div>
            </div>
        </div>
    </div>

    <script>
        // Add some interactivity
        document.querySelector('.signup-form').addEventListener('submit', function (e) {
            e.preventDefault();
            const email = document.querySelector('.email-input').value;
            if (email) {
                alert('Thanks! We\'ll send you updates about BioVault beta access.');
                document.querySelector('.email-input').value = '';
            }
        });

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
    </script>
</body>
`;
}
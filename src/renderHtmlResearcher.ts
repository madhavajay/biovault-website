import styles from './styles.css';
import appImage from './images/app.png';
import networkImage from './images/network.jpg';

export function renderHtmlResearcher(message?: string) {
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
            <p class="tagline">Secure by design, shared by choice. </p>
            <p> BioVault is a free, open-source platform for secure genomic collaboration. Using end-to-end encryption, trusted execution, and data visitation technologies, BioVault lets researchers and patient groups unlock insights <strong>without ever giving up raw data</strong>. </p>
        </header>
        ${message ? `
          <div class="message ${message.startsWith('Success') ? 'success' : 'error'}">
            ${message}
          </div>
        ` : ''}

        <!-- Researchers Section -->
        <div class="section">
        <h2 class="section-title">For Researchers</h2>
        <div class="section-content">
            <div class="story-intro">
            <p>
                Are you a researcher working with sensitive datasets—like whole genome sequences, clinical records, or phenotype data? 
                You want to collaborate with other scientists, but you can’t just hand over your raw data. 
                <strong>That’s where BioVault comes in.</strong>
            </p>

            <ol class="story-steps">
                <li>
                <strong>Create your own private BioVault</strong> — this is like setting up a secure folder that only you control. 
                <div class="cli-mockup">
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv init mybiobank</span></div>
                    <div class="cli-line"><span class="cli-output">✓ BioVault "mybiobank" created locally</span></div>
                </div>
                </li>

                <li>
                <strong>Add your data to the BioVault</strong> — place your sequencing files (FASTQ, BAM/CRAM, VCF, phenotype data, etc.) into the vault so they are ready for analysis. The files never leave your machine.  
                <div class="cli-mockup">
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv add ./data/patient1.vcf --vault mybiobank</span></div>
                    <div class="cli-line"><span class="cli-output">✓ Added 1 file to BioVault "mybiobank"</span></div>
                </div>
                </li>

                <li>
                <strong>Receive analysis requests from collaborators</strong> — instead of sending your data away, other researchers 
                send you analysis pipelines (for example, a GWAS workflow). You can inspect what they are asking to run.
                <div class="cli-mockup">
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv inbox</span></div>
                    <div class="cli-line"><span class="cli-output">1 pending request: research@collab → pipeline: GWAS-analysis.nf</span></div>
                </div>
                </li>

                <li>
                <strong>Approve and run the analysis locally</strong> — once you approve, the pipeline runs on your BioVault. 
                The raw data never moves; only the analysis results are sent back to your collaborator.
                <div class="cli-mockup">
                    <div class="cli-line"><span class="cli-prompt">$</span> <span class="cli-command">bv approve 1</span></div>
                    <div class="cli-line"><span class="cli-output">✓ Approved. Running in secure enclave...</span></div>
                    <div class="cli-line"><span class="cli-output">⚡ Results ready: ./results/gwas_out.csv</span></div>
                </div>
                </li>
            </ol>

            <div class="network-intro">
                <div style="flex-shrink: 0; width: 50%;">
                    <img src="${networkImage}" alt="BioVault Network" style="width: 100%; height: auto; border-radius: 8px;" />
                </div>
                <div style="flex: 1;">
                    <p style="font-size: 1.125rem;">
                    BioVault is powered by 
                    <a href="https://openmined.org/syftbox/" target="_blank" rel="noopener noreferrer">
                        <strong>SyftBox</strong>
                    </a>, an open-source protocol from OpenMined for privacy-preserving remote data science. 
                    Instead of moving sensitive datasets to outside servers, SyftBox enables <em>data visitation</em>: code travels securely to where the data lives, runs locally, and only the results are shared back. 
                    This technology is already proven in industry for secure distributed computation, and BioVault applies it directly to genomics and biomedical research.
                    </p>
                </div>
            </div>
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
        <h2 class="features-title">Collaboration Without Surrendering Control</h2>
        <div class="features-grid">
            
            <div class="feature">
            <div class="feature-icon">🧬</div>
            <h3 class="feature-title">Collaborate Without Sharing Data</h3>
            <p class="feature-desc">
                Run pipelines on sensitive datasets without moving raw files—code travels to the data, not the other way around.
            </p>
            </div>
            
            <div class="feature">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Reproducible Science</h3>
            <p class="feature-desc">
                Standardized workflows and versioned pipelines ensure results can be validated and reproduced across labs.
            </p>
            </div>
            
            <div class="feature">
            <div class="feature-icon">🌍</div>
            <h3 class="feature-title">Global Equity</h3>
            <p class="feature-desc">
                Enable participation from the Global South and under-resourced labs—data stays local while insights are shared globally.
            </p>
            </div>
            
            <div class="feature">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">Privacy First</h3>
            <p class="feature-desc">
                Protect participants with end-to-end encryption and secure enclaves for joint analysis without centralizing data.
            </p>
            </div>
            
            <div class="feature">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">Fast, Remote Data Science</h3>
            <p class="feature-desc">
                Perform remote data visitation at scale—submit pipelines across multiple vaults and get results back quickly.
            </p>
            </div>
            
            <div class="feature">
            <div class="feature-icon">🔓</div>
            <h3 class="feature-title">Open and Transparent</h3>
            <p class="feature-desc">
                Open-source and free to use. No gatekeepers, no hidden costs—just science moving forward.
            </p>
            </div>

        </div>
        </div>

        <div class="call-to-action">
            <h2 class="cta-title">Join as a Beta Tester</h2>
            <ul class="cta-list">
                <li class="cta-item">
                <strong>Rare disease groups</strong> accelerating the diagnosis odyssey by collaborating with other groups without exposing sensitive patient data.
                </li>
                <li class="cta-item">
                <strong>Infectious disease teams</strong> sharing insights across hospitals, countries, and organizations while keeping data secure and under local control. 
                </li>
                <li class="cta-item">
                <strong>Genomics researchers</strong> driving global equity—building open, collaborative science where data remains with communities, not big tech companies.
                </li>
            </ul>
            <p class="cta-desc">
                BioVault is part of a pilot initiative to make data free and open access for research while 
                <em>protecting the rights of individuals</em> whose samples power these datasets. 
                Your participation helps prove that global collaboration in genomics is possible without 
                ceding control of data to centralized institutions or big tech companies.
            </p>
            </div>
        </div>

        <div class="faq">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        <div class="faq-grid">
            
            <div class="faq-item">
            <h3 class="faq-question">What is BioVault?</h3>
            <p class="faq-answer">
                BioVault is a platform for secure, privacy-preserving genomics research. 
                It enables <em>data visitation</em>—where code travels to the data, runs locally, 
                and only results are shared. This allows rare disease groups, biobanks, and population 
                genomics researchers to collaborate globally without surrendering control of sensitive datasets.
            </p>
            </div>
            
            <div class="faq-item">
            <h3 class="faq-question">Who should join the Beta?</h3>
            <p class="faq-answer">
                We’re looking for rare disease organizations, population genomics projects, 
                and research teams who want to collaborate securely across institutions and borders. 
                If you steward valuable datasets but need to protect participant privacy, BioVault is built for you.
            </p>
            </div>
            
            <div class="faq-item">
            <h3 class="faq-question">Is BioVault free to use?</h3>
            <p class="faq-answer">
                Yes. BioVault is open-source and free under the Apache 2.0 License. 
                Our goal is to advance science and diagnosis by making genomic data accessible 
                for research while ensuring equity—especially for communities often excluded 
                from large-scale projects.
            </p>
            </div>
            
            <div class="faq-item">
            <h3 class="faq-question">How does BioVault protect privacy?</h3>
            <p class="faq-answer">
                Your raw data never leaves your control. BioVault uses end-to-end encryption, 
                secure enclaves, and user approval for every analysis request. 
                Collaborators receive results, not your underlying data.
            </p>
            </div>
            
            <div class="faq-item">
            <h3 class="faq-question">What is SyftBox and why does it matter?</h3>
            <p class="faq-answer">
                <a href="https://openmined.org/syftbox/" target="_blank" rel="noopener noreferrer">SyftBox</a> 
                is an open-source protocol from OpenMined that powers privacy-preserving remote data science. 
                It enables distributed computations across datasets without centralizing them—technology already 
                trusted in industry and now applied to genomics through BioVault.
            </p>
            </div>
            
            <div class="faq-item">
            <h3 class="faq-question">Can this work across countries and under-resourced labs?</h3>
            <p class="faq-answer">
                Yes. BioVault is designed for global collaboration—including researchers in the Global South. 
                Because data never leaves local machines, institutions can participate without losing sovereignty 
                over their datasets, helping ensure genomic equity worldwide.
            </p>
            </div>
            
        </div>
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
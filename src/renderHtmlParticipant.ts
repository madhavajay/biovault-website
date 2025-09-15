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
        <title>Join the Beta - BioVault gives patients full control of their genomic data</title>
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
            <p class="tagline">Your data. Your control. Your choice.</p>
            <p>
              BioVault is a free, open-source app that lets you store your genomic data securely on your own device. 
              You decide who can request access, you approve every analysis, and you always see which researchers have used your data. 
              <strong>Your raw data never leaves your control.</strong>
            </p>
        </header>
        ${message ? `
          <div class="message ${message.startsWith('Success') ? 'success' : 'error'}">
            ${message}
          </div>
        ` : ''}

        <!-- Participants Section -->
        <div class="section">
        <h2 class="section-title">For Participants</h2>
        <div class="section-content">
            <div class="network-intro" style="display: flex; gap: 2rem; align-items: center;">
            <!-- Left: App Image -->
            <div style="flex-shrink: 0; width: 50%; max-width: 300px;">
                <img src="${appImage}" alt="BioVault Mobile App" style="width: 100%; height: auto; border-radius: 8px; filter: drop-shadow(0 10px 40px rgba(0, 0, 0, 0.15));" />
            </div>
            <!-- Right: Text -->
            <div style="flex: 1;">
                <p>
                With the BioVault app, you are always in control of your own genomic data:
                </p>
                <ol class="story-steps">
                <li>
                    <strong>Store your data securely</strong> — upload your raw data (VCF, BAM/CRAM, FASTQ, or files from 23andMe, AncestryDNA, MyHeritage, Dante Labs, etc.) directly into your BioVault on your phone or computer. 
                    <em>Your files never leave your device.</em>
                </li>
                <li>
                    <strong>Approve requests from researchers</strong> — scientists can send you analysis requests. You’ll see exactly who is asking, what they want to run, and you decide whether to allow it.
                </li>
                <li>
                    <strong>Track who accessed your data</strong> — the app gives you a clear history of which researchers ran analyses, when they did it, and what results were shared. 
                    <em>Transparency is built in.</em>
                </li>
                </ol>
            </div>
            </div>
        </div>
        </div>

        <!-- Network Section -->
        <div class="network">
        <h2 class="network-title">How It Works</h2>
        <div class="section-content">
            <div class="network-intro" style="display: flex; gap: 2rem; align-items: center;">
                <div style="flex-shrink: 0; width: 50%;">
                    <img src="${networkImage}" alt="BioVault Network" style="width: 100%; height: auto; border-radius: 8px;" />
                </div>
                <div style="flex: 1;">
                    <p style="font-size: 1.125rem;">
                    BioVault is powered by 
                    <a href="https://syftbox.net" target="_blank" rel="noopener noreferrer">
                        <strong>SyftBox</strong></a>, an open-source protocol from <a href="https://openmined.org" target="_blank" rel="noopener noreferrer">OpenMined</a> for privacy-preserving remote data science. 
                    Instead of moving sensitive datasets to outside servers, SyftBox enables <em>data visitation</em>: code travels securely to where the data lives, runs locally, and only the results are shared back. 
                    This technology is already proven in industry for secure distributed computation, and BioVault applies it directly to genomics and biomedical research.
                    </p>
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
          <h2 class="features-title">Why Join as a Participant?</h2>
          <div class="features-grid">
            <div class="feature">
              <div class="feature-icon">🔒</div>
              <h3 class="feature-title">Your Data, Your Control</h3>
              <p class="feature-desc">
                Your raw files never leave your device. You decide who can access your data and what they can run.
              </p>
            </div>
            <div class="feature">
              <div class="feature-icon">👀</div>
              <h3 class="feature-title">Full Transparency</h3>
              <p class="feature-desc">
                See a clear log of every researcher who has accessed your data, when they did it, and what analysis was performed.
              </p>
            </div>
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <h3 class="feature-title">Privacy-Preserving Collaboration</h3>
              <p class="feature-desc">
                Researchers can gain insights without ever seeing or copying your sensitive genomic data.
              </p>
            </div>
          </div>
        </div>

        <div class="call-to-action">
          <h2 class="cta-title">Join as a Beta Tester</h2>
          <ul class="cta-list">
            <li class="cta-item">Rare disease patients who already have their genomic data (FASTQ, BAM/CRAM, VCF, etc.).</li>
            <li class="cta-item">Individuals with direct-to-consumer results from 23andMe, AncestryDNA, MyHeritage, Dante Labs, Nebula, or similar services.</li>
            <li class="cta-item">Anyone who wants to contribute to research while keeping their data private and under their own control.</li>
          </ul>
          <p class="cta-desc">
            BioVault puts participants first. You can contribute to cutting-edge science, help accelerate diagnosis, and support global equity in genomics—all while keeping your data safe, private, and in your hands.
          </p>
        </div>

        <!-- Signup Section -->
        <div class="signup">
          <h2 class="signup-title">Join the Beta</h2>
          <p class="signup-subtitle">Get updates and early access to BioVault</p>
          <form id="waitlist-form" class="signup-form" method="POST" action="/api/waitlist">
            <input type="email" id="email" name="email" class="email-input" placeholder="Enter your email address" required>
            <button type="submit" class="signup-btn">Get Updates</button>
          </form>
        </div>

        <div class="faq">
          <h2 class="faq-title">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h3 class="faq-question">What is BioVault?</h3>
              <p class="faq-answer">
                BioVault is an app that lets you store your genomic data securely on your own device, approve researcher requests, and see who has accessed your data.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Do I ever have to upload my data?</h3>
              <p class="faq-answer">
                No. Your raw files (VCF, BAM/CRAM, FASTQ, etc.) never leave your device. All analyses are performed locally.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">How do I know who has accessed my data?</h3>
              <p class="faq-answer">
                The BioVault app keeps a complete, transparent log. You can always see which researchers ran analyses, when, and what results were shared.
              </p>
            </div>
            <div class="faq-item">
              <h3 class="faq-question">Is BioVault free?</h3>
              <p class="faq-answer">
                Yes. BioVault is open-source and free under the Apache 2.0 License.
              </p>
            </div>
          </div>
        </div>
    </div>
    </body>
    </html>
    `;
}

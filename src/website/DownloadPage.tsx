import type { FC } from 'hono/jsx'

export const DownloadPage: FC = () => (
	<div className="container">
		<header className="header">
			<picture>
				<source
					srcset="/images/bv-icon-320.avif 320w, /images/bv-icon-640.avif 640w, /images/bv-icon-1280.avif 1280w, /images/bv-icon.avif 1920w"
					sizes="120px"
					type="image/avif"
				/>
				<img src="/images/bv-icon.png" alt="BioVault Logo" style="width: 120px; height: 120px; margin-bottom: 1.5rem;" />
			</picture>
			<h1 className="logo">Download BioVault</h1>
			<p className="tagline">Get started with privacy-preserving genomic collaboration</p>
		</header>

		<div className="about-content">
			<div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem; text-align: center; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);">
				<div style="display: inline-block; background: rgba(255, 255, 255, 0.2); padding: 0.5rem 1rem; border-radius: 20px; margin-bottom: 1rem;">
					<span style="color: white; font-weight: 700; font-size: 0.9rem; letter-spacing: 1px;">BETA</span>
				</div>
				<p style="color: white; font-size: 1.1rem; margin: 0; line-height: 1.6;">
					These builds are in active development. If you find an issue, please let us know on{' '}
					<a
						href="https://github.com/OpenMined/biovault-desktop/issues"
						target="_blank"
						rel="noopener noreferrer"
						style="color: white; text-decoration: underline; font-weight: 600;"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github_desktop_issues', source: 'download_page_beta_banner' });"
					>
						GitHub
					</a>
					{' '}or{' '}
					<a
						href="https://slack.openmined.org"
						target="_blank"
						rel="noopener noreferrer"
						style="color: white; text-decoration: underline; font-weight: 600;"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'slack', source: 'download_page_beta_banner' });"
					>
						Slack
					</a>.
				</p>
			</div>

			<section className="about-section">
				<h2 className="about-title">BioVault Desktop App</h2>
				<p className="about-text">
					The BioVault desktop application provides a user-friendly interface for participants
					to manage their genomic data and collaborate with researchers.
				</p>

				<div className="download-grid">
					<div className="download-card-modern">
						<div className="download-icon-container">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
								<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"></path>
							</svg>
						</div>
						<h3 className="download-platform-title">macOS</h3>
						<p className="download-platform-desc">Choose your Mac's processor type</p>
						<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
							<a
								href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-aarch64-apple-darwin.dmg"
								className="github-download-btn"
								style="width: 100%; text-align: center;"
								onclick="window.trackAnalyticsEvent('download_click', { platform: 'macos', arch: 'arm64', source: 'download_page' });"
							>
								Apple Silicon (arm64)
							</a>
							<a
								href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-apple-darwin.dmg"
								className="github-download-btn"
								style="width: 100%; text-align: center;"
								onclick="window.trackAnalyticsEvent('download_click', { platform: 'macos', arch: 'x86_64', source: 'download_page' });"
							>
								Intel (x86_64)
							</a>
						</div>
					</div>

					<div className="download-card-modern">
						<div className="download-icon-container download-icon-linux">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
								<path d="M12 2C8.5 2 6 4.5 6 8c0 1.5.5 3 1.5 4L6 18c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2l-1.5-6c1-1 1.5-2.5 1.5-4 0-3.5-2.5-6-6-6z" fill="currentColor"></path>
								<circle cx="10" cy="7" r="1" fill="white"></circle>
								<circle cx="14" cy="7" r="1" fill="white"></circle>
								<path d="M12 9c-.5 0-1 .2-1.3.6-.2.2-.2.5 0 .8.3.3.8.3 1.1 0 .1-.1.2-.1.2-.1s.1 0 .2.1c.3.3.8.3 1.1 0 .2-.3.2-.6 0-.8C13 9.2 12.5 9 12 9z" fill="#FFA500"></path>
								<ellipse cx="9" cy="13" rx="1" ry="2" fill="white"></ellipse>
								<ellipse cx="15" cy="13" rx="1" ry="2" fill="white"></ellipse>
							</svg>
						</div>
						<h3 className="download-platform-title">Linux</h3>
						<p className="download-platform-desc">Portable AppImage for all distributions</p>
						<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 1rem;">
							<a
								href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-unknown-linux-gnu.AppImage"
								className="github-download-btn"
								style="width: 100%; text-align: center;"
								onclick="window.trackAnalyticsEvent('download_click', { platform: 'linux', arch: 'x86_64', source: 'download_page' });"
							>
								x86_64
							</a>
							<a
								href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-aarch64-unknown-linux-gnu.AppImage"
								className="github-download-btn"
								style="width: 100%; text-align: center;"
								onclick="window.trackAnalyticsEvent('download_click', { platform: 'linux', arch: 'arm64', source: 'download_page' });"
							>
								arm64
							</a>
						</div>
					</div>

					<div className="download-card-modern">
						<div className="download-icon-container download-icon-windows">
							<svg width="32" height="32" viewBox="0 0 24 24" fill="none">
								<path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.351" fill="currentColor"></path>
							</svg>
						</div>
						<h3 className="download-platform-title">Windows</h3>
						<p className="download-platform-desc">Executable for Windows 10/11</p>
						<a
							href="https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-pc-windows-msvc.exe"
							className="github-download-btn"
							style="width: 100%; text-align: center; margin-top: 1rem;"
							onclick="window.trackAnalyticsEvent('download_click', { platform: 'windows', arch: 'x86_64', source: 'download_page' });"
						>
							x86_64
						</a>
					</div>
				</div>

				<div style="margin-top: 3rem; text-align: center;">
					<h3 className="about-title" style="font-size: 1.3rem; margin-bottom: 1.5rem;">
						Install Dependencies with our Setup Wizard, or manually yourself.
					</h3>
					<picture>
						<source
							srcset="/images/desktop-setup-320.avif 320w, /images/desktop-setup-640.avif 640w, /images/desktop-setup-1280.avif 1280w, /images/desktop-setup.avif 1920w"
							sizes="(max-width: 640px) 320px, (max-width: 1024px) 640px, 1280px"
							type="image/avif"
						/>
						<img
							src="/images/desktop-setup.png"
							alt="BioVault Desktop Setup Wizard"
							style="max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);"
						/>
					</picture>
				</div>
			</section>

			<section className="about-section" style="margin-top: 4rem;">
				<h2 className="about-title">BioVault CLI</h2>
				<p className="about-text">
					The BioVault command-line interface is the fastest way to get started with genomic collaboration.
				</p>

				<h3 className="about-title" style="font-size: 1.3rem; margin-top: 2rem;">
					Install Command MacOS and Linux
				</h3>

				<div className="install-box-container">
					<div className="install-box">
						<div className="install-command">
							<code id="install-code">
								curl -sSL https://raw.githubusercontent.com/openmined/biovault/main/install.sh | bash
							</code>
						</div>
						<button
							onclick="copyToClipboard('install-code', this); window.trackAnalyticsEvent('copy_install_command', { source: 'download_page' });"
							className="copy-button"
							title="Copy to clipboard"
						>
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
								<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
							</svg>
						</button>
					</div>
				</div>

				<div style="margin-top: 1.5rem;">
					<a
						href="https://github.com/OpenMined/BioVault/releases"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github_releases', source: 'download_page' });"
					>
						Download from GitHub
					</a>
				</div>

				<div className="about-section" style="margin-top: 3rem;">
					<h3 className="about-title" style="font-size: 1.3rem;">Check Dependencies</h3>
					<p className="about-text">After installation, verify your setup with:</p>

					<div className="cli-mockup" style="margin-top: 1rem;">
						<div className="cli-line">
							<span className="cli-prompt">$</span> <span className="cli-command">bv check</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">BioVault Dependency Check</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">=========================</span>
						</div>
						<div className="cli-line"></div>
						<div className="cli-line">
							<span className="cli-output">Checking java... ✓ Found (version 24)</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">  Path: /opt/homebrew/bin/java</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">Checking docker... ✓ Found (version 28.4.0) (running)</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">  Path: /usr/local/bin/docker</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">Checking nextflow... ✓ Found (version 25.04.7)</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">  Path: /opt/homebrew/bin/nextflow</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">Checking syftbox... ✓ Found (version 0.8.6)</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">  Path: /Users/user/.sbenv/binaries/0.8.6/syftbox</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">  Note: Found in ~/.sbenv/binaries</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">Checking uv... ✓ Found (version 0.9.0)</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">  Path: /Users/user/.local/bin/uv</span>
						</div>
						<div className="cli-line"></div>
						<div className="cli-line">
							<span className="cli-output">=========================</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">✓ All dependencies satisfied!</span>
						</div>
					</div>
				</div>

				<div className="about-section" style="margin-top: 3rem;">
					<h3 className="about-title" style="font-size: 1.3rem;">Install Dependencies</h3>
					<p className="about-text">
						BioVault can try to help you install your dependencies by running:
					</p>

					<div className="cli-mockup" style="margin-top: 1rem;">
						<div className="cli-line">
							<span className="cli-prompt">$</span> <span className="cli-command">bv setup</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">BioVault Environment Setup</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">==========================</span>
						</div>
						<div className="cli-line"></div>
						<div className="cli-line">
							<span className="cli-output">📦 Installing java...</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   Running: brew install openjdk@17</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   ✓ Command succeeded</span>
						</div>
						<div className="cli-line"></div>
						<div className="cli-line">
							<span className="cli-output">📦 Installing docker...</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   Running: brew install --cask docker</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   ✓ Command succeeded</span>
						</div>
						<div className="cli-line"></div>
						<div className="cli-line">
							<span className="cli-output">📦 Installing nextflow...</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   Running: brew install nextflow</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   ✓ Command succeeded</span>
						</div>
						<div className="cli-line"></div>
						<div className="cli-line">
							<span className="cli-output">📦 Installing syftbox...</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   Running: curl -fsSL https://syftbox.net/install.sh | sh</span>
						</div>
						<div className="cli-line">
							<span className="cli-output">   ✓ Command succeeded</span>
						</div>
					</div>
				</div>

				<div className="about-section" style="margin-top: 3rem;">
					<h3 className="about-title" style="font-size: 1.3rem;">Next Steps</h3>
					<p className="about-text">
						Once your dependencies are satisfied, check out our tutorials to get started:
					</p>
					<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
						<a
							href="https://github.com/OpenMined/biovault/tree/main/tutorials"
							target="_blank"
							rel="noopener noreferrer"
							className="github-download-btn"
							onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'tutorials', source: 'download_page' });"
						>
							BioVault Tutorials
						</a>
						<a
							href="https://github.com/OpenMined/BioVault"
							target="_blank"
							rel="noopener noreferrer"
							className="github-download-btn"
							onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github_repo', source: 'download_page' });"
						>
							BioVault GitHub Repository
						</a>
					</div>
				</div>
			</section>

			<section className="about-section">
				<h2 className="about-title">Open Source</h2>
				<p className="about-text">
					BioVault is completely open source under the Apache 2.0 License. You can view the
					source code, contribute, or build from source:
				</p>
				<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
					<a
						href="https://github.com/OpenMined/BioVault"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github_cli_repo', source: 'download_page' });"
					>
						BioVault CLI Repository
					</a>
					<a
						href="https://github.com/OpenMined/biovault-desktop"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github_desktop_repo', source: 'download_page' });"
					>
						BioVault Desktop Repository
					</a>
				</div>
			</section>

			<section className="about-section">
				<h2 className="about-title">Need Help?</h2>
				<p className="about-text">
					Join our community for support, updates, and discussions:
				</p>
				<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.5rem;">
					<a
						href="https://slack.openmined.org"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'slack', source: 'download_page' });"
					>
						Join Slack: #community-biovault
					</a>
					<a
						href="https://github.com/OpenMined/BioVault/issues"
						target="_blank"
						rel="noopener noreferrer"
						className="github-download-btn"
						onclick="window.trackAnalyticsEvent('external_link_click', { destination: 'github_issues', source: 'download_page' });"
					>
						GitHub Issues
					</a>
				</div>
			</section>
		</div>
	</div>
)

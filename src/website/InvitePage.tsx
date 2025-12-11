import type { FC } from 'hono/jsx'

export const InvitePage: FC = () => (
	<div className="container">
		<header className="header">
			<div className="invite-type-badge" id="inviteType">Collaboration Invite</div>
			<h1 className="logo">You're Invited to BioVault</h1>
			<p className="invite-from" id="inviteFrom"></p>
			<p className="tagline" id="inviteDesc">
				BioVault is a secure platform for private data analysis and end-to-end encrypted collaboration.
			</p>
		</header>

		<div className="fingerprint-section" id="fingerprintSection" style="display: none;">
			<div className="fingerprint-label">Inviter's Key Fingerprint</div>
			<div className="fingerprint-visual">
				<div className="identicon" id="identicon"></div>
				<div className="fingerprint-text" id="fingerprintText"></div>
			</div>
		</div>

		<div className="download-section">
			<a href="#" className="download-btn-primary" id="primaryDownload">
				<span className="platform-icon" id="platformIcon"></span>
				<span id="downloadText">Download BioVault</span>
				<span className="download-arch" id="downloadArch"></span>
			</a>

			<div className="other-platforms">
				<div className="other-platforms-title">Other platforms</div>
				<div className="platform-grid" id="platformGrid"></div>
			</div>
		</div>

		<div className="community-links" style="margin-top: 2rem;">
			<div className="link-cards">
				<a
					href="https://github.com/OpenMined/biovault-desktop"
					target="_blank"
					rel="noopener noreferrer"
					className="link-card"
				>
					<svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
					</svg>
					<div className="link-content">
						<h3 className="link-title">GitHub</h3>
						<p className="link-desc">View source code</p>
					</div>
				</a>

				<a
					href="https://slack.openmined.org"
					target="_blank"
					rel="noopener noreferrer"
					className="link-card"
				>
					<svg className="link-icon" viewBox="0 0 24 24" fill="currentColor">
						<path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
					</svg>
					<div className="link-content">
						<h3 className="link-title">Slack</h3>
						<p className="link-desc">Join #community-biovault</p>
					</div>
				</a>
			</div>
		</div>

		<script
			dangerouslySetInnerHTML={{
				__html: `
				const downloads = {
					macos_arm64: 'https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-aarch64-apple-darwin.dmg',
					macos_x64: 'https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-apple-darwin.dmg',
					linux_x64: 'https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-unknown-linux-gnu.AppImage',
					linux_arm64: 'https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-aarch64-unknown-linux-gnu.AppImage',
					windows_x64: 'https://github.com/OpenMined/biovault-desktop/releases/latest/download/BioVault-Desktop-x86_64-pc-windows-msvc.exe',
				};

				function detectPlatform() {
					const ua = navigator.userAgent.toLowerCase();
					const platform = navigator.platform.toLowerCase();
					if (ua.includes('mac') || platform.includes('mac')) {
						return { os: 'macos', arch: 'arm64', display: 'macOS', archDisplay: 'Apple Silicon' };
					} else if (ua.includes('win') || platform.includes('win')) {
						return { os: 'windows', arch: 'x64', display: 'Windows', archDisplay: 'x86_64' };
					} else if (ua.includes('linux')) {
						return { os: 'linux', arch: 'x64', display: 'Linux', archDisplay: 'x86_64' };
					}
					return { os: 'macos', arch: 'arm64', display: 'macOS', archDisplay: 'Apple Silicon' };
				}

				function buildIdenticon(seed, displaySize = 48) {
					let hash = 0;
					for (let i = 0; i < seed.length; i++) {
						hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
					}
					const hue = hash % 360;
					const fg = 'hsl(' + hue + ', 65%, 45%)';
					const bg = '#f3f4f6';
					const cells = 5;
					const size = 15;
					const padding = 6;
					let bits = hash || 1;
					let rects = '';
					for (let y = 0; y < cells; y++) {
						for (let x = 0; x < Math.ceil(cells / 2); x++) {
							const on = bits & 1;
							bits = (bits >> 1) | ((bits & 1) << 31);
							if (on) {
								const rx = padding + x * size;
								const ry = padding + y * size;
								const mirrorX = padding + (cells - x - 1) * size;
								rects += '<rect x="' + rx + '" y="' + ry + '" width="' + size + '" height="' + size + '" fill="' + fg + '" rx="3" ry="3"/>';
								if (mirrorX !== rx) {
									rects += '<rect x="' + mirrorX + '" y="' + ry + '" width="' + size + '" height="' + size + '" fill="' + fg + '" rx="3" ry="3"/>';
								}
							}
						}
					}
					const dim = padding * 2 + cells * size;
					return '<svg width="' + displaySize + '" height="' + displaySize + '" viewBox="0 0 ' + dim + ' ' + dim + '" xmlns="http://www.w3.org/2000/svg"><rect width="' + dim + '" height="' + dim + '" fill="' + bg + '" rx="12" ry="12"/>' + rects + '</svg>';
				}

				const params = new URLSearchParams(window.location.search);
				const from = params.get('from');
				const fingerprint = params.get('fp');
				const type = params.get('type') || 'collaboration';

				// Try to open app via custom URL scheme
				function tryOpenApp() {
					const appUrl = 'biovault://invite?' + params.toString();
					const start = Date.now();

					window.location.href = appUrl;

					// If we're still here after 2.5 seconds, app probably didn't open
					setTimeout(function() {
						if (Date.now() - start >= 2500) {
							// App not installed, show download section (already visible)
							if (window.trackAnalyticsEvent) {
								window.trackAnalyticsEvent('invite_app_not_installed', {
									invite_type: type,
									invite_from: from || 'unknown'
								});
							}
						} else {
							// App probably opened
							if (window.trackAnalyticsEvent) {
								window.trackAnalyticsEvent('invite_app_opened', {
									invite_type: type,
									invite_from: from || 'unknown'
								});
							}
						}
					}, 2500);
				}

				// Attempt to open app on page load
				tryOpenApp();

				const inviteTypeEl = document.getElementById('inviteType');
				const typeLabels = {
					session: 'Encrypted Session Invite',
					dataset: 'Dataset Sharing Invite',
					message: 'Secure Messaging Invite',
					collaboration: 'Collaboration Invite'
				};
				inviteTypeEl.textContent = typeLabels[type] || typeLabels.collaboration;

				const inviteFromEl = document.getElementById('inviteFrom');
				if (from) {
					inviteFromEl.textContent = from + ' wants to collaborate with you';
					inviteFromEl.style.display = 'block';
				} else {
					inviteFromEl.style.display = 'none';
				}

				const inviteDescEl = document.getElementById('inviteDesc');
				const typeDescs = {
					session: 'Join an end-to-end encrypted collaborative session for secure data analysis.',
					dataset: 'Securely share and analyze datasets with privacy-preserving computation.',
					message: 'Exchange secure, encrypted messages on the BioVault platform.',
					collaboration: 'BioVault is a secure platform for private data analysis and collaboration.'
				};
				inviteDescEl.textContent = typeDescs[type] || typeDescs.collaboration;

				const fingerprintSection = document.getElementById('fingerprintSection');
				if (fingerprint && fingerprint.length > 0) {
					fingerprintSection.style.display = 'block';
					document.getElementById('identicon').innerHTML = buildIdenticon(fingerprint, 48);
					document.getElementById('fingerprintText').textContent = fingerprint;
				}

				const platform = detectPlatform();
				const primaryDownload = document.getElementById('primaryDownload');
				const downloadText = document.getElementById('downloadText');
				const downloadArch = document.getElementById('downloadArch');
				const platformIcon = document.getElementById('platformIcon');

				const icons = { macos: '🍎', windows: '🪟', linux: '🐧' };

				const primaryKey = platform.os + '_' + platform.arch;
				primaryDownload.href = downloads[primaryKey] || downloads.macos_arm64;
				platformIcon.textContent = icons[platform.os] || '📥';
				downloadText.textContent = 'Download for ' + platform.display;
				downloadArch.textContent = '(' + platform.archDisplay + ')';

				// Track primary download click
				primaryDownload.addEventListener('click', function() {
					if (window.trackAnalyticsEvent) {
						window.trackAnalyticsEvent('invite_download_click', {
							platform: primaryKey,
							invite_type: type,
							invite_from: from || 'unknown'
						});
					}
				});

				const platformGrid = document.getElementById('platformGrid');
				const allPlatforms = [
					{ key: 'macos_arm64', os: 'macOS', arch: 'Apple Silicon' },
					{ key: 'macos_x64', os: 'macOS', arch: 'Intel' },
					{ key: 'linux_x64', os: 'Linux', arch: 'x86_64' },
					{ key: 'linux_arm64', os: 'Linux', arch: 'arm64' },
					{ key: 'windows_x64', os: 'Windows', arch: 'x86_64' },
				];

				allPlatforms
					.filter(function(p) { return p.key !== primaryKey; })
					.forEach(function(p) {
						const link = document.createElement('a');
						link.href = downloads[p.key];
						link.className = 'platform-btn';
						link.innerHTML = '<span class="platform-os">' + p.os + '</span><br><span class="platform-arch">' + p.arch + '</span>';
						// Track secondary download clicks
						link.addEventListener('click', function() {
							if (window.trackAnalyticsEvent) {
								window.trackAnalyticsEvent('invite_download_click', {
									platform: p.key,
									invite_type: type,
									invite_from: from || 'unknown'
								});
							}
						});
						platformGrid.appendChild(link);
					});
			`,
			}}
		/>
	</div>
)

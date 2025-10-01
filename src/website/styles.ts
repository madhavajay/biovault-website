export const styles = `:root {
	/* OpenMined Brand Colors - True Green */
	--color-primary: #059669;
	--color-primary-light: #10b981;
	--color-primary-dark: #047857;

	/* Muted colors for general use */
	--color-accent: #6b7280;
	--color-accent-hover: #4b5563;

	/* Brand Guide Typography Colors */
	--color-text-primary: #212121;
	--color-text-secondary: #6e6e6e;
	--color-border: #e5e7eb;
	--color-bg-light: #f0fdf9;
	
	/* Typography */
	--font-heading: 'Rubik', sans-serif;
	--font-body: 'Roboto', sans-serif;
	--font-mono: 'Monaco', 'Menlo', 'Roboto Mono', monospace;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
	font-family: var(--font-body);
	background: linear-gradient(135deg, #fafffe 0%, #f5fdfb 50%, #f0fcf8 100%);
  min-height: 100vh;
	color: var(--color-text-primary);
  line-height: 1.6;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	position: relative;
	overflow-x: hidden;
}

/* Global link styles */
a {
	color: var(--color-primary);
	text-decoration: none;
	font-weight: 500;
	border-bottom: 2px solid transparent;
	transition: all 0.3s ease;
}

a:hover {
	color: var(--color-primary-dark);
	border-bottom-color: var(--color-primary);
}

a:focus {
	outline: 2px solid var(--color-primary);
	outline-offset: 2px;
	border-radius: 4px;
}

/* Animated Blob Background */
.blobs-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 0;
	pointer-events: none;
}

.blob {
	position: absolute;
	border-radius: 50%;
	filter: blur(80px);
	opacity: 0.2;
	animation: float 25s infinite ease-in-out;
}

.blob-1 {
	width: 400px;
	height: 400px;
	background: var(--color-primary);
	top: -10%;
	left: -10%;
	animation-delay: 0s;
}

.blob-2 {
	width: 350px;
	height: 350px;
	background: var(--color-primary-light);
	top: 40%;
	right: -10%;
	animation-delay: -8s;
}

.blob-3 {
	width: 300px;
	height: 300px;
	background: var(--color-primary);
	bottom: -10%;
	left: 30%;
	animation-delay: -16s;
}

.blob-4 {
	width: 250px;
	height: 250px;
	background: var(--color-primary-light);
	top: 60%;
	left: 10%;
	animation-delay: -12s;
}

@keyframes float {
	0%, 100% {
		transform: translate(0, 0) scale(1);
	}
	25% {
		transform: translate(30px, -30px) scale(1.1);
	}
	50% {
		transform: translate(-20px, 20px) scale(0.9);
	}
	75% {
		transform: translate(40px, 10px) scale(1.05);
	}
}

/* Custom Scrollbar */
::-webkit-scrollbar {
	width: 12px;
}

::-webkit-scrollbar-track {
	background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
	background: var(--color-primary);
	border-radius: 6px;
	border: 2px solid #f1f1f1;
}

::-webkit-scrollbar-thumb:hover {
	background: var(--color-primary-dark);
}

/* Firefox scrollbar */
* {
	scrollbar-width: thin;
	scrollbar-color: var(--color-primary) #f1f1f1;
}

h1, h2, h3, h4, h5, h6,
.logo, .tagline, .section-title, .feature-title, .bento-title,
.navbar-logo, .navbar-link, .features-title, .signup-title,
.cta-title, .faq-question, .bento-label {
	font-family: var(--font-heading);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
	padding: 1rem;
	position: relative;
	z-index: 1;
}

@media (min-width: 640px) {
	.container {
		padding: 1.5rem;
	}
}

@media (min-width: 1024px) {
	.container {
  padding: 2rem;
	}
}

.header {
  text-align: center;
	margin-bottom: 3rem;
	padding: 2rem 0 1rem;
}

@media (min-width: 768px) {
	.header {
  margin-bottom: 4rem;
		padding: 3rem 0 1rem;
	}
}

@media (min-width: 1024px) {
	.header {
		margin-bottom: 5rem;
		padding: 4rem 0 1rem;
	}
}

.header p {
	font-size: 1rem;
	line-height: 1.6;
	color: var(--color-text-primary);
	font-weight: 400;
	max-width: 800px;
	margin: 0 auto;
}

@media (min-width: 768px) {
	.header p {
		font-size: 1.05rem;
		line-height: 1.7;
	}
}

@media (min-width: 1024px) {
	.header p {
		font-size: 1.125rem;
	}
}

.logo {
	font-size: 2.5rem;
	font-weight: 500;
	color: var(--color-primary);
	margin-bottom: 0.75rem;
	letter-spacing: -0.02em;
}

@media (min-width: 640px) {
	.logo {
		font-size: 3rem;
		margin-bottom: 1rem;
	}
}

@media (min-width: 1024px) {
	.logo {
		font-size: 3.5rem;
	}
}

.tagline {
	font-size: 1.125rem;
	color: var(--color-text-secondary);
	font-weight: 400;
	padding: 0 1rem;
	margin-bottom: 1rem;
}

@media (min-width: 640px) {
.tagline {
  font-size: 1.25rem;
	}
}

@media (min-width: 1024px) {
	.tagline {
		font-size: 1.35rem;
		padding: 0;
	}
}

.story-intro {
  text-align: left;
  margin-bottom: 2rem;
}

.story-intro h2 {
	font-size: 1.25rem;
  font-weight: 600;
	color: #212121;
  margin-bottom: 1.5rem;
  text-align: center;
}

@media (min-width: 768px) {
	.story-intro h2 {
		font-size: 1.5rem;
	}
}

.story-intro p {
	font-size: 0.95rem;
	color: #212121;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
	.story-intro p {
		font-size: 1rem;
	}
}

.story-steps {
  list-style: none;
  padding: 0;
  margin: 0;
	font-size: 0.9rem;
	color: #212121;
  line-height: 1.7;
}

@media (min-width: 768px) {
	.story-steps {
		font-size: 1rem;
	}
}

.story-steps li {
  position: relative;
  padding-left: 1.5rem;
  padding-bottom: 0.25rem;
	margin-bottom: 0.75rem;
}

@media (min-width: 768px) {
	.story-steps li {
  margin-bottom: 0.5rem;
	}
}

.story-steps li:last-child {
  margin-bottom: 0;
}

.story-steps li:before {
	content: '→';
  position: absolute;
  left: 0;
	color: var(--color-primary);
  font-weight: bold;
}

.story-steps li strong {
  color: #1f2937;
  font-weight: 600;
}

.story-intro a {
	color: var(--color-primary);
  text-decoration: none;
	font-weight: 500;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
}

.story-intro a:hover {
	color: var(--color-primary-dark);
	border-bottom-color: var(--color-primary);
}

.story-intro a:focus {
	outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

.network {
	padding: 2rem 0;
	margin-bottom: 2rem;
}

@media (min-width: 768px) {
	.network {
		padding: 3rem 0;
	}
}

@media (min-width: 1024px) {
	.network {
		padding: 4rem 0;
		margin-bottom: 3rem;
	}
}

.network-title {
	font-size: 1.75rem;
  font-weight: 600;
	color: var(--color-primary);
	margin-bottom: 2rem;
	letter-spacing: -0.02em;
}

@media (min-width: 768px) {
	.network-title {
		font-size: 2rem;
		margin-bottom: 2.5rem;
	}
}

.network-intro {
  display: flex;
	flex-direction: column;
	gap: 1.5rem;
  align-items: center;
}

@media (min-width: 768px) {
	.network-intro {
		flex-direction: row;
		gap: 2rem;
	}
}

.top-section {
	padding: 2rem 0;
	margin-bottom: 2rem;
}

@media (min-width: 768px) {
	.top-section {
		padding: 3rem 0;
	}
}

@media (min-width: 1024px) {
.top-section {
		padding: 4rem 0;
		margin-bottom: 3rem;
	}
}

.top-section-title {
	font-size: 1.75rem;
  font-weight: 600;
	color: var(--color-primary);
	margin-bottom: 2rem;
	letter-spacing: -0.02em;
}

@media (min-width: 768px) {
	.top-section-title {
		font-size: 2rem;
		margin-bottom: 2.5rem;
	}
}

.section {
	padding: 2rem 0;
	margin-bottom: 2rem;
}

@media (min-width: 768px) {
	.section {
		padding: 3rem 0;
	}
}

.section-title {
	font-size: 1.75rem;
  font-weight: 600;
	color: var(--color-primary);
	margin-bottom: 2rem;
	letter-spacing: -0.02em;
}

@media (min-width: 768px) {
	.section-title {
		font-size: 2rem;
		margin-bottom: 2.5rem;
	}
}

.cli-mockup {
	background: #2d3748;
  border-radius: 12px;
	padding: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
	font-family: var(--font-mono);
	color: var(--color-primary-light);
	font-size: 0.75rem;
  overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	width: 100%;
	max-width: 100%;
	border: 1px solid #1a202c;
}

@media (min-width: 640px) {
	.cli-mockup {
		font-size: 0.8125rem;
		padding: 1.25rem;
		border-radius: 12px;
	}
}

@media (min-width: 1024px) {
	.cli-mockup {
		font-size: 0.875rem;
		padding: 1.5rem;
	}
}

.cli-line {
  margin-bottom: 0.5rem;
	white-space: nowrap;
}

.cli-prompt {
  color: #6b7280;
}

.cli-command {
	color: var(--color-primary-light);
	word-break: break-all;
	white-space: pre-wrap;
}

.cli-output {
  color: #d1d5db;
	word-break: break-all;
	white-space: pre-wrap;
}

.cli-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 0.5rem;
	font-size: 0.7rem;
}

@media (min-width: 640px) {
	.cli-table {
		font-size: 0.75rem;
	}
}

.cli-table th {
  text-align: left;
  color: #d1d5db;
	padding: 0.25rem 0.25rem;
  border-bottom: 1px solid #374151;
	font-size: inherit;
}

@media (min-width: 640px) {
	.cli-table th {
		padding: 0.25rem 0.5rem;
	}
}

.cli-table td {
  text-align: left;
  color: #d1d5db;
	padding: 0.25rem 0.25rem;
	font-size: inherit;
	word-break: break-all;
}

@media (min-width: 640px) {
	.cli-table td {
  padding: 0.25rem 0.5rem;
		word-break: normal;
	}
}

.cli-table td:nth-child(2) {
  white-space: nowrap;
}

.cli-table td:nth-child(3) {
	word-break: break-all;
}

@media (min-width: 640px) {
	.cli-table td:nth-child(3) {
		word-break: normal;
	}
}

.network-diagram {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin-bottom: 1.5rem;
}

.how-it-works {
  text-align: left;
  margin-top: 1rem;
}

.how-it-works-title {
  font-size: 1rem;
  font-weight: 600;
	color: var(--color-primary);
  margin-bottom: 1rem;
  text-align: center;
}

.how-it-works-list {
  list-style: none;
  padding: 0;
  margin: 0;
	font-size: 0.85rem;
	color: #212121;
  line-height: 1.6;
}

@media (min-width: 768px) {
	.how-it-works-list {
		font-size: 0.875rem;
	}
}

.how-it-works-list li {
  position: relative;
  padding-left: 1.5rem;
	margin-bottom: 0.75rem;
}

@media (min-width: 768px) {
	.how-it-works-list li {
  margin-bottom: 0.5rem;
	}
}

.how-it-works-list li:last-child {
  margin-bottom: 0;
}

.how-it-works-list li:before {
	content: '→';
  position: absolute;
  left: 0;
	color: var(--color-primary);
  font-weight: bold;
}

.network-node {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: var(--color-primary);
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-weight: 600;
	font-size: 0.75rem;
	text-align: center;
	position: relative;
}

@media (min-width: 768px) {
	.network-node {
		width: 80px;
		height: 80px;
		font-size: 0.875rem;
	}
}

.network-connections {
	display: flex;
	justify-content: space-between;
	width: 100%;
	position: relative;
}

.network-connections::before {
	content: '';
	position: absolute;
	top: 50%;
	left: 20%;
	right: 20%;
	height: 2px;
	background: var(--color-primary-light);
	transform: translateY(-50%);
}

.mobile-mockups {
  display: flex;
  justify-content: center;
	align-items: center;
	margin-bottom: 1.5rem;
	width: 100%;
}

.mobile-mockups img {
	width: 200px;
	max-width: 200px;
	height: auto;
	display: block;
	object-fit: contain;
}

@media (min-width: 768px) {
	.mobile-mockups img {
		width: 220px;
		max-width: 220px;
	}
}

@media (min-width: 1024px) {
	.mobile-mockups img {
		width: 240px;
		max-width: 240px;
	}
}

	.phone {
		width: 80px;
		height: 150px;
		border-radius: 16px;
		border: 3px solid #e5e7eb;
		background: white;
		position: relative;
		overflow: hidden;
	}

	@media (min-width: 640px) {
		.phone {
			width: 100px;
			height: 180px;
			border-radius: 20px;
		}
	}

	.phone.iphone {
		border-color: #1f2937;
	}

.phone.android {
	border-color: var(--color-primary);
}

.phone-screen {
	width: 100%;
	height: 70%;
	background: var(--color-primary);
	margin-top: 15%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 0.7rem;
	font-weight: 600;
}

	@media (min-width: 640px) {
		.phone-screen {
			font-size: 0.75rem;
		}
	}

	.phone-home {
		position: absolute;
		bottom: 8px;
		left: 50%;
		transform: translateX(-50%);
		width: 25px;
		height: 3px;
		background: #d1d5db;
		border-radius: 2px;
	}

	@media (min-width: 640px) {
		.phone-home {
			bottom: 10px;
			width: 30px;
			height: 4px;
		}
}

.top-section-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.section-content {
  flex: 1;
  display: block;
}

.section-content img {
		max-width: 100%;
		height: auto;
  margin: 0 auto;
  display: block;
}

	@media (min-width: 768px) {
		.section-content img {
			max-width: 70%;
		}
	}

	@media (min-width: 1024px) {
		.section-content img {
			max-width: 50%;
		}
	}

/* Hero Section */
.hero-section {
	display: grid;
	grid-template-columns: 1fr;
	min-height: 600px;
	margin-bottom: 4rem;
	background: white;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
	overflow: hidden;
}

@media (min-width: 1024px) {
	.hero-section {
		grid-template-columns: 1fr 1fr;
		min-height: 700px;
	}
}

.hero-image {
	position: relative;
	overflow: hidden;
	min-height: 250px;
	max-height: 300px;
}

@media (min-width: 1024px) {
	.hero-image {
		min-height: 100%;
		max-height: none;
	}
}

.hero-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
}

.hero-content {
	padding: 3rem 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: white;
}

@media (min-width: 1024px) {
	.hero-content {
		padding: 4rem 3rem;
	}
}

.hero-headline {
	font-family: var(--font-heading);
	font-size: 2.5rem;
	font-weight: 700;
	color: var(--color-text-primary);
	line-height: 1.1;
	margin-bottom: 1.5rem;
	letter-spacing: -0.03em;
}

@media (min-width: 1024px) {
	.hero-headline {
		font-size: 3rem;
	}
}

.hero-description {
	font-size: 1.125rem;
	color: var(--color-text-secondary);
	line-height: 1.6;
	margin-bottom: 2rem;
}

.hero-description strong {
	color: var(--color-primary);
	font-weight: 600;
}

.hero-cta-box {
	background: var(--color-primary);
	border-radius: 16px;
	padding: 2rem;
	margin-top: auto;
}

/* Hero CTA Section (legacy) */
.hero-cta {
	background: var(--color-primary);
	border-radius: 16px;
	padding: 2rem 1.5rem;
	margin-bottom: 3rem;
	text-align: center;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

@media (min-width: 768px) {
	.hero-cta {
		padding: 2.5rem 2rem;
		margin-bottom: 4rem;
	}
}

@media (min-width: 1024px) {
	.hero-cta {
		padding: 3rem 3rem;
	}
}

.hero-cta-title {
	color: white;
	font-size: 1.75rem;
	font-weight: 600;
	margin-bottom: 1.5rem;
	letter-spacing: -0.02em;
}

@media (min-width: 768px) {
	.hero-cta-title {
		font-size: 2rem;
	}
}

@media (min-width: 1024px) {
	.hero-cta-title {
		font-size: 2.25rem;
	}
}

.hero-cta-benefits {
	list-style: none;
	padding: 0;
	margin: 0 auto 1.5rem;
	max-width: 600px;
	text-align: left;
	color: white;
}

.hero-cta-benefits li {
	padding: 0.75rem 0;
	padding-left: 1.5rem;
	position: relative;
	font-size: 1rem;
	line-height: 1.6;
}

.hero-cta-benefits li::before {
	content: "✓";
	position: absolute;
	left: 0;
	color: white;
	font-weight: bold;
	font-size: 1.2rem;
}

.hero-form {
	max-width: 600px;
	margin: 0 auto;
	display: flex;
	gap: 1rem;
	flex-direction: column;
	align-items: stretch;
}

@media (min-width: 640px) {
	.hero-form {
		flex-direction: row;
	}
}

.hero-input {
	flex: 1;
	padding: 1rem 1.5rem;
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-radius: 50px;
	font-size: 1rem;
	outline: none;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	min-height: 48px;
	font-family: 'Rubik', sans-serif;
	transition: all 0.3s ease;
	background: rgba(255, 255, 255, 0.98);
	font-weight: 500;
}

.hero-input::placeholder {
	color: #9ca3af;
}

.hero-input:focus {
	border-color: rgba(255, 255, 255, 0.9);
	box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
	transform: translateY(-2px);
}

.hero-btn {
	background: white;
	color: var(--color-primary);
	padding: 1rem 2.5rem;
	border: none;
	border-radius: 50px;
	font-size: 1rem;
	font-weight: 700;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
	box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
	min-height: 48px;
	letter-spacing: 0.01em;
	white-space: nowrap;
	font-family: 'Rubik', sans-serif;
}

@media (hover: hover) {
	.hero-btn:hover {
		transform: translateY(-3px) scale(1.02);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
		background: #ffffff;
	}
}

.hero-btn:active {
	transform: translateY(0) scale(0.98);
}

/* Bento Box Grid Layout - Clean & Cohesive */
.bento-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1.25rem;
	margin-bottom: 3rem;
}

@media (min-width: 768px) {
	.bento-grid {
		grid-template-columns: 1fr 1fr;
		gap: 1.25rem;
	}
}

@media (min-width: 1024px) {
	.bento-grid {
		gap: 1.5rem;
	}
}

/* All bento items share base styles */
.bento-large,
.bento-tall,
.bento-wide {
	background: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border-radius: 16px;
	padding: 2rem 1.75rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
	border: 1px solid rgba(255, 255, 255, 0.8);
	display: flex;
	flex-direction: column;
	transition: all 0.3s ease;
}

.bento-large:hover,
.bento-tall:hover,
.bento-wide:hover {
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	transform: translateY(-4px);
	background: rgba(255, 255, 255, 0.95);
}

@media (min-width: 768px) {
	.bento-large,
	.bento-tall,
	.bento-wide {
		padding: 2.25rem 2rem;
	}
}

/* Wide cards span full width on tablet+ */
@media (min-width: 768px) {
	.bento-wide {
		grid-column: span 2;
	}
}

.bento-label {
	display: inline-block;
	background: #f3f4f6;
	color: var(--color-accent);
	padding: 0.35rem 0.75rem;
	border-radius: 12px;
	font-size: 0.7rem;
	font-weight: 700;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	margin-bottom: 0.875rem;
	border: 1px solid #d1f4eb;
}

.bento-cta-btn {
	display: inline-block;
	padding: 0.875rem 1.75rem;
	background: var(--color-primary);
	color: white;
	border-radius: 8px;
	font-weight: 500;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	border-bottom: none;
}

.bento-cta-btn:hover {
	background: var(--color-primary-dark);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
	border-bottom: none;
	color: white;
}

.bento-title {
	font-size: 1.4rem;
	font-weight: 600;
	color: var(--color-text-primary);
	margin-bottom: 1.25rem;
	letter-spacing: -0.01em;
	line-height: 1.25;
}

@media (min-width: 768px) {
	.bento-title {
		font-size: 1.5rem;
	}
}

@media (min-width: 1024px) {
	.bento-title {
		font-size: 1.65rem;
	}
}

.bento-split {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin-bottom: 1.5rem;
}

@media (min-width: 768px) {
	.bento-split {
		flex-direction: row;
		align-items: flex-start;
  gap: 2rem;
	}
	
	.bento-split > .image-wrapper {
		flex-shrink: 0;
		width: 200px;
	}
	
	.bento-split > .image-wrapper img {
		width: 100%;
		max-width: 100%;
	}
	
	.bento-split > .how-it-works {
		flex: 1;
	}
}

@media (min-width: 1024px) {
	.bento-split > .image-wrapper {
		width: 220px;
	}
}

/* For network-intro that uses bento-split */
.network .bento-split,
.top-section .bento-split,
.story-intro .bento-split {
	margin-bottom: 0;
}

.bento-split .how-it-works {
	margin-top: 0;
}

.bento-split .how-it-works p {
	margin-bottom: 1rem;
	font-size: 1rem;
}

@media (min-width: 768px) {
	.bento-split .how-it-works p {
		font-size: 1.05rem;
	}
}

.bento-split .how-it-works a {
	color: var(--color-primary);
	text-decoration: none;
	font-weight: 500;
	border-bottom: 1px solid transparent;
	transition: all 0.2s ease;
}

.bento-split .how-it-works a:hover {
	border-bottom-color: var(--color-primary);
}

.bento-split .how-it-works .how-it-works-list {
	margin-top: 0;
}

  .main-content {
		display: grid;
    grid-template-columns: 1fr;
		gap: 1.5rem;
		margin-bottom: 2rem;
		align-items: stretch;
	}

	@media (min-width: 768px) {
		.main-content {
			gap: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.main-content {
			grid-template-columns: repeat(3, minmax(0, 1fr));
			margin-bottom: 4rem;
  }
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: auto;
  padding-top: 1.5rem;
}

.badge {
		background: var(--color-bg-light);
		color: var(--color-primary);
		padding: 0.35rem 0.75rem;
		border-radius: 16px;
		font-size: 0.7rem;
		font-weight: 600;
		border: 1px solid #d1f4eb;
		transition: all 0.3s ease;
		letter-spacing: 0.01em;
	}

	@media (min-width: 640px) {
		.badge {
			padding: 0.4rem 0.9rem;
  font-size: 0.75rem;
		}
}


.features {
		padding: 3rem 0;
		margin-bottom: 2rem;
	}

	@media (min-width: 1024px) {
		.features {
			padding: 4rem 0;
			margin-bottom: 3rem;
		}
}

.features-title {
  text-align: center;
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 2.5rem;
		letter-spacing: -0.02em;
	}

	@media (min-width: 768px) {
		.features-title {
  font-size: 2rem;
			margin-bottom: 3rem;
		}
}

.features-grid {
  display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
}

	@media (min-width: 640px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

	@media (min-width: 1024px) {
  .features-grid {
			grid-template-columns: repeat(3, 1fr);
  }
}

.feature {
		text-align: center;
		padding: 2rem 1.5rem;
		background: rgba(255, 255, 255, 0.85);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.8);
		transition: all 0.3s ease;
	}

	.feature:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
		background: rgba(255, 255, 255, 0.95);
	}

	@media (min-width: 768px) {
		.feature {
			padding: 2.25rem 1.75rem;
		}
}

	.feature-icon {
		width: 56px;
		height: 56px;
		margin: 0 auto 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-primary);
	}

	.feature-icon svg {
		width: 36px;
		height: 36px;
		stroke-width: 1.5;
	}

	@media (min-width: 768px) {
		.feature-icon {
			width: 64px;
			height: 64px;
		}

		.feature-icon svg {
			width: 42px;
			height: 42px;
		}
	}

.feature-title {
		font-size: 1.125rem;
  font-weight: 600;
		color: var(--color-text-primary);
		margin-bottom: 0.625rem;
		letter-spacing: -0.01em;
		line-height: 1.3;
	}

	@media (min-width: 768px) {
		.feature-title {
			font-size: 1.2rem;
		}
}

.feature-desc {
		color: var(--color-text-secondary);
  font-size: 0.95rem;
		line-height: 1.6;
		max-width: 320px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.feature-desc {
			font-size: 1rem;
		}
}

.message {
		padding: 1.5rem;
  border-radius: 12px;
		margin: 1.5rem auto;
  max-width: 600px;
  text-align: center;
  font-weight: 600;
		font-size: 0.95rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  animation: slideDown 0.4s ease-out;
}

	@media (min-width: 768px) {
		.message {
			padding: 2rem;
			margin: 2rem auto;
			font-size: 1.1rem;
		}
	}

.message.success {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: white;
  border: none;
}

.message.error {
  background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%);
  color: white;
  border: none;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.signup-strip {
		background: var(--color-primary);
		padding: 1.5rem 1rem;
  text-align: center;
  color: white;
  margin: 2rem 0;
		border-radius: 16px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}

	@media (min-width: 768px) {
		.signup-strip {
			padding: 2rem 2rem;
			margin: 3rem 0;
			border-radius: 20px;
		}
}

.signup-strip .signup-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: stretch;
	}

	@media (min-width: 640px) {
		.signup-strip .signup-form {
			flex-direction: row;
		}
}

.signup-strip .email-input {
  flex: 1;
		padding: 1rem 1.5rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  outline: none;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		min-height: 48px;
		font-family: 'Rubik', sans-serif;
		transition: all 0.3s ease;
		background: rgba(255, 255, 255, 0.98);
		font-weight: 500;
}

.signup-strip .signup-btn {
  background: white;
		color: var(--color-primary);
		padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
		font-size: 1rem;
		font-weight: 700;
  cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
  white-space: nowrap;
		min-height: 48px;
		letter-spacing: 0.01em;
		font-family: 'Rubik', sans-serif;
}

	@media (hover: hover) {
.signup-strip .signup-btn:hover {
			transform: translateY(-3px) scale(1.02);
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
			background: #ffffff;
		}
	}

	.signup-strip .signup-btn:active {
		transform: translateY(0) scale(0.98);
}

.signup {
		background: var(--color-primary);
		border-radius: 16px;
		padding: 3rem 1.5rem;
  text-align: center;
  color: white;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}

	@media (min-width: 768px) {
		.signup {
			padding: 4rem 2rem;
			border-radius: 16px;
		}
	}

	@media (min-width: 1024px) {
		.signup {
			padding: 5rem 3rem;
		}
}

.signup-title {
		font-size: 1.75rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
		letter-spacing: -0.02em;
	}

	@media (min-width: 768px) {
		.signup-title {
			font-size: 2rem;
			margin-bottom: 1rem;
		}
	}

	@media (min-width: 1024px) {
		.signup-title {
			font-size: 2.25rem;
		}
	}

	.signup-subtitle {
		font-size: 1.05rem;
		opacity: 0.95;
		margin-bottom: 2rem;
		font-weight: 400;
	}

	@media (min-width: 768px) {
		.signup-subtitle {
			font-size: 1.125rem;
			margin-bottom: 2.5rem;
		}
	}

	@media (min-width: 1024px) {
		.signup-subtitle {
			font-size: 1.2rem;
		}
	}

.signup-benefits {
	list-style: none;
	padding: 0;
	margin: 1.5rem auto 2rem;
	max-width: 600px;
	text-align: left;
	color: white;
}

.signup-benefits li {
	padding: 0.75rem 0;
	padding-left: 1.5rem;
	position: relative;
	font-size: 1rem;
	line-height: 1.6;
}

.signup-benefits li::before {
	content: "✓";
	position: absolute;
	left: 0;
	color: white;
	font-weight: bold;
	font-size: 1.2rem;
}

.signup-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
		gap: 1rem;
		flex-direction: row;
		align-items: stretch;
		flex-wrap: wrap;
	}

	@media (max-width: 639px) {
		.signup-form {
			flex-direction: column;
		}
}

.email-input {
  flex: 1;
		min-width: 0;
		width: 100%;
  padding: 1rem 1.5rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
		font-size: 0.95rem;
  outline: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		min-height: 48px;
		font-family: 'Rubik', sans-serif;
		transition: all 0.3s ease;
		background: rgba(255, 255, 255, 0.95);
	}

	.email-input:focus {
		border-color: rgba(255, 255, 255, 0.8);
		box-shadow: 0 6px 28px rgba(0, 0, 0, 0.15);
		transform: translateY(-1px);
	}

	@media (min-width: 640px) {
		.email-input {
			width: auto;
			min-width: 250px;
			padding: 1.125rem 1.75rem;
			font-size: 1rem;
		}
	}

	@media (min-width: 768px) {
		.email-input {
			min-width: 320px;
		}
}

.signup-btn {
  background: white;
		color: var(--color-primary);
		padding: 1rem 2.5rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
		font-weight: 700;
  cursor: pointer;
		transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
		box-shadow: 0 6px 24px rgba(0, 0, 0, 0.15);
		min-height: 48px;
		letter-spacing: 0.01em;
	}

	@media (min-width: 640px) {
		.signup-btn {
			padding: 1.125rem 3rem;
			font-size: 1.05rem;
		}
	}

	@media (hover: hover) {
.signup-btn:hover {
			transform: translateY(-3px) scale(1.02);
			box-shadow: 0 12px 40px rgba(0, 0, 0, 0.25);
			background: #ffffff;
		}
	}

	.signup-btn:active {
		transform: translateY(0) scale(0.98);
}

.call-to-action {
		background: white;
		border-radius: 16px;
		padding: 2rem 1.5rem;
		margin-bottom: 2rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
	}

	@media (min-width: 768px) {
		.call-to-action {
			padding: 2.5rem 2rem;
		}
	}

	@media (min-width: 1024px) {
		.call-to-action {
  padding: 3rem;
  margin-bottom: 4rem;
		}
}

.cta-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-primary);
		margin-bottom: 1.5rem;
		letter-spacing: -0.02em;
	}

	@media (min-width: 768px) {
		.cta-title {
			font-size: 1.75rem;
		}
	}

	@media (min-width: 1024px) {
		.cta-title {
  font-size: 2rem;
		}
}

.cta-list {
  max-width: 800px;
		padding-left: 1.25rem;
	}

	@media (min-width: 768px) {
		.cta-list {
  padding-left: 1.5rem;
		}
}

.cta-item {
		color: var(--color-text-primary);
		margin-bottom: 0.875rem;
		line-height: 1.7;
  font-size: 1rem;
}

.cta-desc {
		color: var(--color-text-secondary);
		margin-top: 1.5rem;
		font-size: 1rem;
		line-height: 1.7;
}

.faq {
		padding: 3rem 0;
		margin-bottom: 2rem;
	}

	@media (min-width: 1024px) {
		.faq {
			padding: 4rem 0;
			margin-bottom: 3rem;
		}
}

.faq-title {
  text-align: center;
		font-size: 1.75rem;
		font-weight: 600;
		color: var(--color-primary);
  margin-bottom: 2.5rem;
		letter-spacing: -0.02em;
	}

	@media (min-width: 768px) {
		.faq-title {
			font-size: 2rem;
			margin-bottom: 3rem;
		}
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr;
		gap: 1rem;
	}

	@media (min-width: 768px) {
		.faq-grid {
			grid-template-columns: repeat(2, 1fr);
		}
}

.faq-item {
		padding: 1.5rem;
		background: rgba(255, 255, 255, 0.9);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
  border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
}

.faq-item:hover {
  transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
		background: rgba(255, 255, 255, 0.95);
	}

	@media (min-width: 768px) {
		.faq-item {
			padding: 2rem;
		}
}

.faq-question {
		font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.75rem;
}

	@media (min-width: 768px) {
		.faq-question {
			font-size: 1.15rem;
		}
	}

.faq-answer {
	color: #6e6e6e;
  line-height: 1.7;
	font-size: 0.9rem;
}

	@media (min-width: 768px) {
		.faq-answer {
  font-size: 0.95rem;
		}
	}

.faq-answer a {
	color: var(--color-primary);
	text-decoration: none;
	font-weight: 500;
	border-bottom: 2px solid transparent;
	transition: all 0.3s ease;
}

.faq-answer a:hover {
	color: var(--color-primary-dark);
	border-bottom-color: var(--color-primary);
}

.faq-answer a:focus {
	outline: 2px solid var(--color-primary);
	outline-offset: 2px;
	border-radius: 4px;
}

	/* Better touch targets for mobile */
	@media (max-width: 767px) {
		button,
		a,
		input[type='submit'],
		input[type='button'] {
			min-height: 44px;
			min-width: 44px;
		}
	}

	/* Smooth scrolling */
	html {
		scroll-behavior: smooth;
	}

	/* Image wrapper for responsive images */
	.image-wrapper {
		width: 100%;
		max-width: 100%;
		display: flex;
		justify-content: center;
    align-items: center;
		margin: 0 auto 1rem;
		overflow: hidden;
  }

	.image-wrapper img {
    width: 100%;
		max-width: 100%;
		height: auto;
		display: block;
		border-radius: 8px;
		object-fit: contain;
	}

	/* For images in sections (like main page) */
	.section-content .image-wrapper img {
		max-width: 100%;
	}

	@media (min-width: 768px) {
		.section-content .image-wrapper img {
			max-width: 80%;
		}
	}

	@media (min-width: 1024px) {
		.section-content .image-wrapper img {
			max-width: 70%;
		}
	}

	/* For images in network-intro sections */
	.network-intro .image-wrapper {
		margin: 0;
	}

	.network-intro .image-wrapper img {
		max-width: 100%;
	}

	/* Prevent all images from overflowing */
	img {
		max-width: 100%;
		height: auto;
	}

	/* Focus styles for accessibility */
	*:focus-visible {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

/* Navbar Styles */
.navbar {
	background: white;
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
	position: sticky;
	top: 0;
	z-index: 1000;
	border-bottom: 1px solid rgba(229, 231, 235, 0.5);
}

.navbar-container {
	max-width: 100%;
	margin: 0 auto;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 68px;
}

@media (min-width: 768px) {
	.navbar-container {
		padding: 0 1.5rem;
	}
}

@media (min-width: 1024px) {
	.navbar-container {
		padding: 0 2rem;
	}
}

.navbar-logo {
	font-size: 1.4rem;
	font-weight: 500;
	color: var(--color-primary);
	text-decoration: none;
	letter-spacing: -0.02em;
	transition: opacity 0.3s ease;
}

@media (min-width: 768px) {
	.navbar-logo {
		font-size: 1.5rem;
	}
}

.navbar-logo:hover {
	opacity: 0.8;
}

/* Hamburger menu toggle button */
.navbar-toggle {
	width: 28px;
	height: 20px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	margin: 0;
	z-index: 1001;
	position: relative;
	display: block;
	margin-top: 15px;
	margin-right: -10px;
}

.navbar-toggle:focus {
	outline: none;
}

.navbar-toggle-icon {
	position: absolute;
	left: 0;
	width: 28px;
	height: 2px;
	background: var(--color-text-primary);
	border-radius: 2px;
	transition: all 0.25s ease;
}

.navbar-toggle-icon:nth-child(1) {
	top: 0;
}

.navbar-toggle-icon:nth-child(2) {
	top: 9px;
}

.navbar-toggle-icon:nth-child(3) {
	top: 18px;
}

.navbar-toggle.active .navbar-toggle-icon:nth-child(1) {
	top: 9px;
	transform: rotate(45deg);
}

.navbar-toggle.active .navbar-toggle-icon:nth-child(2) {
	opacity: 0;
}

.navbar-toggle.active .navbar-toggle-icon:nth-child(3) {
	top: 9px;
	transform: rotate(-45deg);
}

/* Mobile menu */
.navbar-menu {
	position: fixed;
	top: 68px;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	padding: 0 1.5rem;
	gap: 0.25rem;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
	max-height: 0;
	opacity: 0;
	overflow: hidden;
	transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
	border-bottom: 1px solid var(--color-border);
	background: white;
}

.navbar-menu.active {
	max-height: 400px;
	opacity: 1;
	padding: 1rem 1.5rem;
}

.navbar-link {
	padding: 1rem 1.25rem;
	color: var(--color-text-primary);
	text-decoration: none;
	font-weight: 500;
	border-radius: 8px;
	transition: all 0.2s ease;
	text-align: left;
	display: block;
	font-size: 1rem;
	background: white;

}

.navbar-link:hover {
	background: var(--color-bg-light);
	color: var(--color-primary);
}

.navbar-link:focus {
	outline: none;
	background: var(--color-bg-light);
}

.navbar-download {
	background: var(--color-primary);
	color: #ffffff !important;
	font-weight: 600;
}

.navbar-download:hover {
	background: var(--color-primary-dark) !important;
	color: #ffffff !important;
}

/* Desktop navigation */
@media (min-width: 768px) {
	.navbar-toggle {
		display: none;
	}

	.navbar-menu {
		position: static;
		flex-direction: row;
		padding: 0;
		gap: 0.25rem;
		box-shadow: none;
		align-items: center;
		max-height: none;
		opacity: 1;
		overflow: visible;
		border-bottom: none;
	}

	.navbar-download {
		margin-left: auto;
	}

	.navbar-link {
		padding: 0.5rem 1rem;
		font-size: 0.95rem;
		text-align: center;
		border-radius: 8px;
	}
}

@media (min-width: 1024px) {
	.navbar-menu {
		gap: 0.25rem;
	}

	.navbar-link {
		padding: 0.5rem 1.125rem;
	}
}

/* Adjust body to account for sticky navbar */
body {
	padding-top: 0;
}

/* About Page Styles */
.about-content {
	max-width: 900px;
	margin: 0 auto 4rem;
}

.about-section {
	margin-bottom: 3rem;
}

.about-title {
	font-size: 1.75rem;
	font-weight: 600;
	color: var(--color-text-primary);
	margin-bottom: 1rem;
	letter-spacing: -0.02em;
}

@media (min-width: 768px) {
	.about-title {
		font-size: 2rem;
	}
}

.about-text {
	font-size: 1.05rem;
	line-height: 1.8;
	color: var(--color-text-primary);
	margin-bottom: 1rem;
}

.about-text a {
	color: var(--color-primary);
	text-decoration: none;
	font-weight: 500;
	border-bottom: 1px solid transparent;
	transition: border-color 0.2s ease;
}

.about-text a:hover {
	border-bottom-color: var(--color-primary);
}

.about-list {
	list-style: none;
	padding: 0;
	margin: 1.5rem 0;
}

.about-list li {
	position: relative;
	padding-left: 1.75rem;
	margin-bottom: 0.875rem;
	font-size: 1.05rem;
	line-height: 1.7;
	color: var(--color-text-primary);
}

.about-list li:before {
	content: "→";
	position: absolute;
	left: 0;
	color: var(--color-primary);
	font-weight: bold;
}

.github-download-btn {
	display: inline-block;
	padding: 0.75rem 1.5rem;
	background: var(--color-primary);
	color: white;
	border-radius: 8px;
	font-weight: 500;
	font-size: 1rem;
	text-decoration: none;
	transition: all 0.3s ease;
	border-bottom: none;
}

.github-download-btn:hover {
	background: var(--color-primary-dark);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
	border-bottom: none;
	color: white;
}

/* Community Links */
.community-links {
	margin: 3rem 0;
}

.community-title {
	font-size: 1.75rem;
	font-weight: 600;
	color: var(--color-primary);
	margin-bottom: 2rem;
	text-align: center;
	letter-spacing: -0.02em;
}

@media (min-width: 768px) {
	.community-title {
		font-size: 2rem;
	}
}

.link-cards {
	display: grid;
	grid-template-columns: 1fr;
	gap: 1rem;
	max-width: 600px;
	margin: 0 auto;
}

@media (min-width: 640px) {
	.link-cards {
		grid-template-columns: 1fr 1fr;
	}
}

.link-card {
	background: rgba(255, 255, 255, 0.9);
	backdrop-filter: blur(8px);
	-webkit-backdrop-filter: blur(8px);
	border: 1px solid rgba(255, 255, 255, 0.8);
	border-radius: 12px;
	padding: 1.5rem;
	text-decoration: none;
	display: flex;
	align-items: center;
	gap: 1rem;
	transition: all 0.3s ease;
}

.link-card:hover {
	box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
	transform: translateY(-4px);
	background: rgba(255, 255, 255, 0.95);
}

.link-card[href*="github"] {
	border-color: #24292e;
}

.link-card[href*="github"]:hover {
	background: #f6f8fa;
	border-color: #24292e;
}

.link-card[href*="github"] .link-icon {
	color: #24292e;
}

.link-card[href*="slack"] {
	border-color: #4A154B;
}

.link-card[href*="slack"]:hover {
	background: #f4ede4;
	border-color: #4A154B;
}

.link-card[href*="slack"] .link-icon {
	color: #4A154B;
}

.link-icon {
	width: 40px;
	height: 40px;
	flex-shrink: 0;
}

.link-content {
	flex: 1;
}

.link-title {
	font-size: 1.125rem;
	font-weight: 600;
	color: var(--color-text-primary);
	margin-bottom: 0.25rem;
}

.link-desc {
	font-size: 0.875rem;
	color: var(--color-text-secondary);
	margin: 0;
}

/* Info Banner */
.info-banner {
	background: var(--color-bg-light);
	border-left: 4px solid var(--color-primary);
	border-radius: 12px;
	padding: 1.5rem;
	margin: 2rem 0;
}

@media (min-width: 768px) {
	.info-banner {
		padding: 2rem;
	}
}

.info-banner p {
	font-size: 1rem;
	line-height: 1.7;
	color: var(--color-text-primary);
	margin: 0;
}

@media (min-width: 768px) {
	.info-banner p {
		font-size: 1.05rem;
		line-height: 1.8;
	}
}

.info-banner a {
	color: var(--color-primary);
	text-decoration: none;
	font-weight: 500;
	border-bottom: 1px solid transparent;
	transition: border-color 0.2s ease;
}

.info-banner a:hover {
	border-bottom-color: var(--color-primary);
}

/* Simple Section for Clean Content */
.simple-section {
	max-width: 800px;
	margin: 0 auto 3rem;
	padding: 2rem 0;
}

@media (min-width: 768px) {
	.simple-section {
		padding: 3rem 0;
	}
}

.section-intro {
	font-size: 1.125rem;
	line-height: 1.7;
	color: var(--color-text-primary);
	margin-bottom: 1.5rem;
	font-weight: 500;
}

@media (min-width: 768px) {
	.section-intro {
		font-size: 1.2rem;
		line-height: 1.8;
		margin-bottom: 2rem;
	}
}

.feature-list {
	list-style: none;
	padding: 0;
	margin: 0;
}

.feature-list li {
	position: relative;
	padding-left: 2rem;
	margin-bottom: 1.5rem;
	font-size: 1rem;
	line-height: 1.7;
	color: var(--color-text-primary);
}

.feature-list li:before {
	content: "→";
	position: absolute;
	left: 0;
	color: var(--color-primary);
	font-weight: bold;
	font-size: 1.2rem;
}

.feature-list li strong {
	color: var(--color-text-primary);
	font-weight: 600;
}

@media (min-width: 768px) {
	.feature-list li {
		font-size: 1.05rem;
		margin-bottom: 1.75rem;
	}
  }
}

/* Footer */
.footer {
	background: transparent;
	color: var(--color-text-primary);
	padding: 3rem 0 10rem 0;
	margin-top: 6rem;
	position: relative;
	z-index: 1;
	border-top: 1px solid var(--color-border);
	box-shadow: none;
}

.footer-content {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 2rem;
}

.footer-link {
	color: var(--color-text-primary);
	text-decoration: none;
	font-size: 0.95rem;
	transition: color 0.2s;
	border-bottom: none;
	font-weight: 500;
}

.footer-link:hover {
	color: var(--color-primary);
	border-bottom: none;
}

.footer-copyright {
	color: var(--color-text-secondary);
	font-size: 0.95rem;
}

@media (max-width: 768px) {
	.footer-content {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.footer-right {
		flex-direction: column;
		gap: 1rem;
	}
}

/* Download Page */
.install-box-container {
	position: relative;
}

.install-box {
	background: #2d3748;
	border-radius: 12px;
	padding: 1.5rem;
	margin: 1.5rem 0;
	border: 1px solid #1a202c;
	position: relative;
}

.install-command {
	font-family: var(--font-mono);
	color: var(--color-primary-light);
	font-size: 0.95rem;
	word-break: break-all;
}

.install-command code {
	color: var(--color-primary-light);
}

.copy-button {
	position: absolute;
	top: 0.75rem;
	right: 0.75rem;
	background: rgba(255, 255, 255, 0.1);
	border: none;
	color: rgba(255, 255, 255, 0.7);
	padding: 0.5rem;
	border-radius: 6px;
	cursor: pointer;
	transition: all 0.2s;
}

.copy-button:hover {
	background: rgba(255, 255, 255, 0.2);
	color: white;
}

.cli-output-box {
	background: #2d3748;
	border-radius: 12px;
	padding: 1.5rem;
	margin: 1.5rem 0;
	border: 1px solid #1a202c;
	overflow-x: auto;
}

.cli-output-text {
	font-family: var(--font-mono);
	color: var(--color-primary-light);
	font-size: 0.9rem;
	margin: 0;
	white-space: pre;
}

.download-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;
	margin-top: 2rem;
}

@media (max-width: 768px) {
	.download-grid {
		grid-template-columns: 1fr;
	}
}

.download-card-modern {
	background: white;
	padding: 2rem;
	border-radius: 12px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	text-align: center;
	transition: transform 0.3s, box-shadow 0.3s;
}

.download-card-modern:hover {
	transform: translateY(-4px);
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.download-icon-container {
	width: 64px;
	height: 64px;
	border-radius: 16px;
	background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto 1rem;
	transition: transform 0.3s;
	color: #4b5563;
}

.download-card-modern:hover .download-icon-container {
	transform: scale(1.05);
}

.download-icon-linux {
	background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
	color: #3b82f6;
}

.download-icon-windows {
	background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
	color: #2563eb;
}

.download-platform-title {
	font-family: var(--font-heading);
	font-size: 1.5rem;
	font-weight: 600;
	color: var(--color-text-primary);
	margin-bottom: 0.5rem;
}

.download-platform-desc {
	color: var(--color-text-secondary);
	margin-bottom: 1.5rem;
	font-size: 0.95rem;
}

.download-coming-soon {
	display: inline-block;
	width: 100%;
	background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
	color: var(--color-text-secondary);
	font-weight: 600;
	padding: 0.75rem 1.5rem;
	border-radius: 8px;
	font-size: 0.95rem;
}

/* Beta App Section */
.beta-app-section {
	margin: 3rem 0;
	text-align: center;
}

.app-store-buttons {
	display: flex;
	gap: 1rem;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 2rem;
}

.app-store-button {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	padding: 0.875rem 1.5rem;
	border-radius: 12px;
	text-decoration: none;
	font-weight: 500;
	transition: transform 0.2s, box-shadow 0.2s;
	min-width: 200px;
}

.app-store-button:hover {
	transform: translateY(-2px);
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.testflight-button {
	background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
	color: white;
}

.playstore-button {
	background: linear-gradient(135deg, #16a34a 0%, #22c55e 100%);
	color: white;
}

.app-store-label {
	font-size: 0.75rem;
	opacity: 0.9;
	text-align: left;
}

.app-store-name {
	font-size: 1.125rem;
	font-weight: 600;
	text-align: left;
}

@media (max-width: 640px) {
	.app-store-buttons {
		flex-direction: column;
		align-items: center;
	}

	.app-store-button {
		width: 100%;
		max-width: 300px;
	}
}
`

export const styles = `* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
		sans-serif;
	background: linear-gradient(135deg, #f8fffe 0%, #f0fdf4 100%);
	min-height: 100vh;
	color: #1f2937;
	line-height: 1.6;
}

.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 1rem;
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
	margin-bottom: 2rem;
	padding: 1rem 0;
}

@media (min-width: 768px) {
	.header {
		margin-bottom: 3rem;
	}
}

@media (min-width: 1024px) {
	.header {
		margin-bottom: 4rem;
	}
}

.header p {
	font-size: 0.95rem;
	line-height: 1.6;
}

@media (min-width: 768px) {
	.header p {
		font-size: 1rem;
	}
}

@media (min-width: 1024px) {
	.header p {
		font-size: 1.125rem;
	}
}

.logo {
	font-size: 1.75rem;
	font-weight: 700;
	color: #059669;
	margin-bottom: 0.75rem;
	letter-spacing: -0.02em;
}

@media (min-width: 640px) {
	.logo {
		font-size: 2rem;
	}
}

@media (min-width: 1024px) {
	.logo {
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
}

.tagline {
	font-size: 1rem;
	color: #6b7280;
	font-weight: 300;
	padding: 0 1rem;
}

@media (min-width: 640px) {
	.tagline {
		font-size: 1.125rem;
	}
}

@media (min-width: 1024px) {
	.tagline {
		font-size: 1.25rem;
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
	color: #059669;
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
	color: #4b5563;
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
	color: #4b5563;
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
	color: #10b981;
	font-weight: bold;
}

.story-steps li strong {
	color: #1f2937;
	font-weight: 600;
}

.story-intro a {
	color: #059669;
	text-decoration: none;
	font-weight: 600;
	border-bottom: 2px solid transparent;
	transition: all 0.3s ease;
}

.story-intro a:hover {
	color: #047857;
	border-bottom-color: #059669;
}

.story-intro a:focus {
	outline: 2px solid #059669;
	outline-offset: 2px;
	border-radius: 4px;
}

.network {
	margin-bottom: 2rem;
	padding: 1.5rem;
	background: white;
	border-radius: 16px;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
	border: 1px solid rgba(16, 185, 129, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	display: flex;
	flex-direction: column;
	height: 100%;
}

@media (min-width: 768px) {
	.network {
		padding: 2rem;
		border-radius: 20px;
	}
}

@media (min-width: 1024px) {
	.network {
		padding: 2.5rem;
		margin-bottom: 4rem;
	}
}

@media (hover: hover) {
	.network:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
	}
}

.network-title {
	font-size: 1.25rem;
	font-weight: 600;
	color: #059669;
	margin-bottom: 1.5rem;
	text-align: center;
}

@media (min-width: 768px) {
	.network-title {
		font-size: 1.5rem;
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

.network-intro > div:first-child,
.network-intro > .image-wrapper {
	width: 100%;
	max-width: 100%;
}

@media (min-width: 640px) {
	.network-intro > div:first-child,
	.network-intro > .image-wrapper {
		max-width: 400px;
	}
}

@media (min-width: 768px) {
	.network-intro > div:first-child,
	.network-intro > .image-wrapper {
		width: 50%;
		max-width: none;
		flex-shrink: 0;
	}
}

.network-intro img {
	width: 100%;
	max-width: 100%;
	height: auto;
	border-radius: 8px;
	display: block;
}

.network-intro p {
	font-size: 1rem;
}

@media (min-width: 768px) {
	.network-intro p {
		font-size: 1.125rem;
	}
}

.network-intro a {
	color: #059669;
	text-decoration: none;
	font-weight: 600;
	border-bottom: 2px solid transparent;
	transition: all 0.3s ease;
}

.network-intro a:hover {
	color: #047857;
	border-bottom-color: #059669;
}

.network-intro a:focus {
	outline: 2px solid #059669;
	outline-offset: 2px;
	border-radius: 4px;
}

.top-section {
	background: white;
	border-radius: 16px;
	padding: 1.5rem;
	margin-bottom: 2rem;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
	border: 1px solid rgba(16, 185, 129, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	display: flex;
	flex-direction: column;
	height: 100%;
}

@media (min-width: 768px) {
	.top-section {
		padding: 2rem;
		border-radius: 20px;
	}
}

@media (min-width: 1024px) {
	.top-section {
		padding: 2.5rem;
		margin-bottom: 4rem;
	}
}

@media (hover: hover) {
	.top-section:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
	}
}

.top-section-title {
	font-size: 1.25rem;
	font-weight: 600;
	color: #059669;
	margin-bottom: 1.5rem;
	text-align: center;
}

@media (min-width: 768px) {
	.top-section-title {
		font-size: 1.5rem;
	}
}

.section {
	background: white;
	border-radius: 16px;
	padding: 1.5rem;
	box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
	border: 1px solid rgba(16, 185, 129, 0.1);
	display: flex;
	flex-direction: column;
	height: 100%;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

@media (min-width: 768px) {
	.section {
		padding: 2rem;
		border-radius: 20px;
	}
}

@media (hover: hover) {
	.section:hover {
		transform: translateY(-5px);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1);
	}
}

.section-title {
	font-size: 1.25rem;
	font-weight: 600;
	color: #059669;
	margin-bottom: 1.5rem;
	text-align: center;
}

@media (min-width: 768px) {
	.section-title {
		font-size: 1.5rem;
	}
}

.cli-mockup {
	background: #1f2937;
	border-radius: 8px;
	padding: 1rem;
	margin-top: 0.5rem;
	margin-bottom: 1rem;
	font-family: 'Monaco', 'Menlo', monospace;
	color: #10b981;
	font-size: 0.75rem;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	width: 100%;
	max-width: 100%;
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
	color: #34d399;
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
	color: #059669;
	margin-bottom: 1rem;
	text-align: center;
}

.how-it-works-list {
	list-style: none;
	padding: 0;
	margin: 0;
	font-size: 0.85rem;
	color: #4b5563;
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
	color: #10b981;
	font-weight: bold;
}

.network-node {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
	background: linear-gradient(90deg, #10b981, #34d399, #10b981);
	transform: translateY(-50%);
}

.mobile-mockups {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-bottom: 1rem;
	width: 100%;
	max-width: 100%;
}

.mobile-mockups img {
	max-width: 100%;
	height: auto;
	display: block;
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
		border-color: #10b981;
	}

	.phone-screen {
		width: 100%;
		height: 70%;
		background: linear-gradient(180deg, #10b981 0%, #059669 100%);
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
		background: #f0fdf4;
		color: #059669;
		padding: 0.25rem 0.625rem;
		border-radius: 20px;
		font-size: 0.7rem;
		font-weight: 500;
		border: 1px solid #bbf7d0;
	}

	@media (min-width: 640px) {
		.badge {
			padding: 0.25rem 0.75rem;
			font-size: 0.75rem;
		}
	}

	.features {
		background: white;
		border-radius: 16px;
		padding: 2rem 1.5rem;
		margin-bottom: 2rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(16, 185, 129, 0.1);
	}

	@media (min-width: 768px) {
		.features {
			padding: 2.5rem 2rem;
			border-radius: 20px;
		}
	}

	@media (min-width: 1024px) {
		.features {
			padding: 3rem;
			margin-bottom: 4rem;
		}
	}

	.features-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 700;
		color: #059669;
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		.features-title {
			font-size: 1.75rem;
		}
	}

	@media (min-width: 1024px) {
		.features-title {
			font-size: 2rem;
		}
	}

	.features-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		text-align: center;
	}

	@media (min-width: 640px) {
		.features-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.features-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.feature {
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.feature {
			padding: 1.5rem;
		}
	}

	.feature-icon {
		width: 50px;
		height: 50px;
		background: linear-gradient(135deg, #10b981 0%, #059669 100%);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 1rem;
		color: white;
		font-size: 1.25rem;
		font-weight: bold;
	}

	@media (min-width: 768px) {
		.feature-icon {
			width: 60px;
			height: 60px;
			font-size: 1.5rem;
		}
	}

	.feature-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: #1f2937;
		margin-bottom: 0.5rem;
	}

	@media (min-width: 768px) {
		.feature-title {
			font-size: 1.25rem;
		}
	}

	.feature-desc {
		color: #6b7280;
		font-size: 0.9rem;
	}

	@media (min-width: 768px) {
		.feature-desc {
			font-size: 0.95rem;
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
		background: linear-gradient(135deg, #059669 0%, #047857 100%);
		padding: 1.25rem 1rem;
		text-align: center;
		color: white;
		margin: 1.5rem 0;
		border-radius: 12px;
	}

	@media (min-width: 768px) {
		.signup-strip {
			padding: 1.5rem 2rem;
			margin: 2rem 0;
		}
	}

	.signup-strip .signup-form {
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		align-items: stretch;
	}

	@media (min-width: 640px) {
		.signup-strip .signup-form {
			flex-direction: row;
			gap: 1rem;
			align-items: center;
			justify-content: center;
		}
	}

	.signup-strip .email-input {
		flex: 1;
		padding: 0.75rem 1rem;
		border: none;
		border-radius: 50px;
		font-size: 0.95rem;
		outline: none;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	}

	@media (min-width: 640px) {
		.signup-strip .email-input {
			max-width: 300px;
			padding: 0.75rem 1.25rem;
		}
	}

	.signup-strip .signup-btn {
		background: white;
		color: #059669;
		padding: 0.75rem 1.5rem;
		border: none;
		border-radius: 50px;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		white-space: nowrap;
		min-height: 44px;
	}

	@media (hover: hover) {
		.signup-strip .signup-btn:hover {
			transform: translateY(-1px);
			box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		}
	}

	.signup-strip .signup-btn:active {
		transform: translateY(0);
	}

	.signup {
		background: linear-gradient(135deg, #059669 0%, #047857 100%);
		border-radius: 16px;
		padding: 2.5rem 1.5rem;
		text-align: center;
		color: white;
	}

	@media (min-width: 768px) {
		.signup {
			padding: 3.5rem 2rem;
			border-radius: 20px;
		}
	}

	@media (min-width: 1024px) {
		.signup {
			padding: 4rem 2rem;
		}
	}

	.signup-title {
		font-size: 1.75rem;
		font-weight: 700;
		margin-bottom: 1rem;
	}

	@media (min-width: 768px) {
		.signup-title {
			font-size: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.signup-title {
			font-size: 2.5rem;
		}
	}

	.signup-subtitle {
		font-size: 1rem;
		opacity: 0.9;
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		.signup-subtitle {
			font-size: 1.125rem;
			margin-bottom: 2.5rem;
		}
	}

	@media (min-width: 1024px) {
		.signup-subtitle {
			font-size: 1.25rem;
			margin-bottom: 3rem;
		}
	}

	.signup-form {
		max-width: 500px;
		margin: 0 auto;
		display: flex;
		gap: 0.75rem;
		flex-direction: column;
		align-items: stretch;
	}

	@media (min-width: 640px) {
		.signup-form {
			flex-direction: row;
			gap: 1rem;
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	.email-input {
		flex: 1;
		min-width: 0;
		width: 100%;
		padding: 0.875rem 1.25rem;
		border: none;
		border-radius: 50px;
		font-size: 0.95rem;
		outline: none;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		min-height: 44px;
	}

	@media (min-width: 640px) {
		.email-input {
			width: auto;
			min-width: 250px;
			padding: 1rem 1.5rem;
			font-size: 1rem;
		}
	}

	@media (min-width: 768px) {
		.email-input {
			min-width: 300px;
		}
	}

	.signup-btn {
		background: white;
		color: #059669;
		padding: 0.875rem 1.75rem;
		border: none;
		border-radius: 50px;
		font-size: 0.95rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
		min-height: 44px;
	}

	@media (min-width: 640px) {
		.signup-btn {
			padding: 1rem 2rem;
			font-size: 1rem;
		}
	}

	@media (hover: hover) {
		.signup-btn:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
		}
	}

	.signup-btn:active {
		transform: translateY(0);
	}

	.call-to-action {
		background: white;
		border-radius: 16px;
		padding: 2rem 1.5rem;
		margin-bottom: 2rem;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
		border: 1px solid rgba(16, 185, 129, 0.1);
	}

	@media (min-width: 768px) {
		.call-to-action {
			padding: 2.5rem 2rem;
			border-radius: 20px;
		}
	}

	@media (min-width: 1024px) {
		.call-to-action {
			padding: 3rem;
			margin-bottom: 4rem;
		}
	}

	.cta-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 700;
		color: #059669;
		margin-bottom: 1.5rem;
	}

	@media (min-width: 768px) {
		.cta-title {
			font-size: 1.75rem;
			margin-bottom: 2rem;
		}
	}

	@media (min-width: 1024px) {
		.cta-title {
			font-size: 2rem;
		}
	}

	.cta-list {
		max-width: 800px;
		margin: 0 auto;
		padding-left: 1.25rem;
	}

	@media (min-width: 768px) {
		.cta-list {
			padding-left: 1.5rem;
		}
	}

	.cta-item {
		color: #4b5563;
		margin-bottom: 1rem;
		line-height: 1.8;
		font-size: 0.95rem;
	}

	@media (min-width: 768px) {
		.cta-item {
			font-size: 1rem;
		}
	}

	.cta-desc {
		text-align: center;
		color: #6b7280;
		margin-top: 1.5rem;
		font-size: 0.95rem;
		line-height: 1.7;
	}

	@media (min-width: 768px) {
		.cta-desc {
			margin-top: 2rem;
			font-size: 1rem;
		}
	}

	.faq {
		max-width: 1200px;
		margin: 0 auto 2rem;
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.faq {
			padding: 1.5rem;
		}
	}

	@media (min-width: 1024px) {
		.faq {
			padding: 2rem;
			margin: 0 auto 4rem;
		}
	}

	.faq-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 700;
		color: #059669;
		margin-bottom: 2rem;
	}

	@media (min-width: 768px) {
		.faq-title {
			font-size: 1.75rem;
		}
	}

	@media (min-width: 1024px) {
		.faq-title {
			font-size: 2rem;
			margin-bottom: 2.5rem;
		}
	}

	.faq-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
		max-width: 900px;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		.faq-grid {
			gap: 2rem;
		}
	}

	.faq-item {
		padding: 1.5rem;
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
		border: 1px solid rgba(16, 185, 129, 0.1);
		transition: all 0.3s ease;
	}

	@media (min-width: 768px) {
		.faq-item {
			padding: 2rem;
		}
	}

	@media (hover: hover) {
		.faq-item:hover {
			transform: translateY(-2px);
			box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
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
		color: #6b7280;
		line-height: 1.7;
		font-size: 0.9rem;
	}

	@media (min-width: 768px) {
		.faq-answer {
			font-size: 0.95rem;
		}
	}

	.faq-answer a {
		color: #059669;
		text-decoration: none;
		font-weight: 600;
		border-bottom: 2px solid transparent;
		transition: all 0.3s ease;
	}

	.faq-answer a:hover {
		color: #047857;
		border-bottom-color: #059669;
	}

	.faq-answer a:focus {
		outline: 2px solid #059669;
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
		outline: 2px solid #059669;
		outline-offset: 2px;
	}

/* Navbar Styles */
.navbar {
	background: white;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 1000;
	border-bottom: 2px solid #10b981;
}

.navbar-container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 64px;
}

.navbar-logo {
	font-size: 1.5rem;
	font-weight: 700;
	color: #059669;
	text-decoration: none;
	letter-spacing: -0.02em;
	transition: color 0.3s ease;
}

.navbar-logo:hover {
	color: #047857;
}

/* Hamburger menu toggle button */
.navbar-toggle {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 28px;
	height: 28px;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 1001;
}

.navbar-toggle:focus {
	outline: 2px solid #059669;
	outline-offset: 2px;
	border-radius: 4px;
}

.navbar-toggle-icon {
	width: 28px;
	height: 3px;
	background: #059669;
	border-radius: 2px;
	transition: all 0.3s ease;
	transform-origin: center;
}

.navbar-toggle.active .navbar-toggle-icon:nth-child(1) {
	transform: rotate(45deg) translateY(9px);
}

.navbar-toggle.active .navbar-toggle-icon:nth-child(2) {
	opacity: 0;
}

.navbar-toggle.active .navbar-toggle-icon:nth-child(3) {
	transform: rotate(-45deg) translateY(-9px);
}

/* Mobile menu */
.navbar-menu {
	position: fixed;
	top: 64px;
	left: 0;
	right: 0;
	background: white;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	gap: 0.5rem;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	transform: translateY(-100%);
	opacity: 0;
	visibility: hidden;
	transition: all 0.3s ease;
	border-bottom: 2px solid #10b981;
}

.navbar-menu.active {
	transform: translateY(0);
	opacity: 1;
	visibility: visible;
}

.navbar-link {
	padding: 0.875rem 1rem;
	color: #1f2937;
	text-decoration: none;
	font-weight: 500;
	border-radius: 8px;
	transition: all 0.3s ease;
	text-align: center;
	display: block;
}

.navbar-link:hover {
	background: #f0fdf4;
	color: #059669;
}

.navbar-link:focus {
	outline: 2px solid #059669;
	outline-offset: 2px;
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
		gap: 0.5rem;
		box-shadow: none;
		transform: none;
		opacity: 1;
		visibility: visible;
		border-bottom: none;
	}

	.navbar-link {
		padding: 0.5rem 1rem;
	}
}

@media (min-width: 1024px) {
	.navbar-menu {
		gap: 1rem;
	}

	.navbar-link {
		padding: 0.5rem 1.5rem;
	}
}

/* Adjust body to account for sticky navbar */
body {
	padding-top: 0;
}
}
`

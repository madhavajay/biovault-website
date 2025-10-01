import type { FC } from 'hono/jsx'
import { styles } from './styles'

export const Layout: FC<{ title?: string; children: any }> = ({
	title = 'Join the Beta - BioVault',
	children,
}) => (
	<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>{title}</title>
			<script async src="https://www.googletagmanager.com/gtag/js?id=G-4D2KBBR5W5"></script>
			<script
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-4D2KBBR5W5');
				`,
				}}
			/>
			<script src="https://metrics.syftbox.net/api/script.js" data-site-id="3" defer></script>
			<style dangerouslySetInnerHTML={{ __html: styles }} />
		</head>
		<body>
			{children}
			<Modal />
		</body>
	</html>
)

export const Modal: FC = () => (
	<div className="modal-overlay" id="message-modal" style="display: none;" onclick="if(event.target === this && !document.getElementById('follow-up-form')) this.style.display='none'">
		<div className="modal-content" onclick="event.stopPropagation()">
			<button className="modal-close" onclick="document.getElementById('message-modal').style.display='none'">×</button>
			<div id="modal-main-content">
				<div id="modal-icon" className="modal-icon success">
					✓
				</div>
				<div id="modal-message" className="modal-message success">
				</div>
			</div>
			<div id="modal-follow-up" style="display: none;">
				<h3 style="margin-bottom: 1rem; color: var(--color-text-primary);">Optional: Help us prepare</h3>
				<form id="follow-up-form" style="text-align: left;">
					<div id="follow-up-questions"></div>
					<div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
						<button type="button" onclick="document.getElementById('message-modal').style.display='none'" style="padding: 0.75rem 1.5rem; background: #e5e7eb; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">
							Skip
						</button>
						<button type="submit" id="follow-up-submit-btn" style="padding: 0.75rem 1.5rem; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
)

export const Message: FC<{ message: string }> = ({ message }) => {
	const isSuccess = message.startsWith('Success')
	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `
				document.addEventListener('DOMContentLoaded', () => {
					const modal = document.getElementById('message-modal');
					const icon = document.getElementById('modal-icon');
					const msg = document.getElementById('modal-message');
					if (modal && icon && msg) {
						icon.className = 'modal-icon ${isSuccess ? 'success' : 'error'}';
						icon.textContent = '${isSuccess ? '✓' : '⚠'}';
						msg.className = 'modal-message ${isSuccess ? 'success' : 'error'}';
						msg.textContent = ${JSON.stringify(message)};
						modal.style.display = 'flex';
					}
				});
			`,
			}}
		/>
	)
}

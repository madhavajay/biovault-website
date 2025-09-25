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
		<body>{children}</body>
	</html>
)

export const Message: FC<{ message: string }> = ({ message }) => (
	<div className={`message ${message.startsWith('Success') ? 'success' : 'error'}`}>{message}</div>
)

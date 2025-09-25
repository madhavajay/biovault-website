import type { FC } from 'hono/jsx'
import { Layout } from '../Layout'
import { TOP_GENES } from './geneList'

// Genes index page - lists all available genes
export const GenesIndexPage: FC = () => (
	<Layout title="Genes - BioVault">
		<div className="container">
			<header className="header">
				<h1 className="logo">BioVault Genes</h1>
				<p className="tagline">Explore the top 100 most clinically significant genes</p>
			</header>

			<div className="features">
				<h2 className="features-title">Available Genes</h2>
				<div
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
						gap: '1rem',
						maxWidth: '1000px',
						margin: '0 auto',
					}}
				>
					{TOP_GENES.map((gene) => (
						<a
							href={`/genes/${gene.toLowerCase()}`}
							key={gene}
							style={{
								padding: '1rem',
								background: 'white',
								borderRadius: '8px',
								textDecoration: 'none',
								color: '#059669',
								fontWeight: '600',
								textAlign: 'center',
								border: '1px solid rgba(16, 185, 129, 0.1)',
								transition: 'all 0.3s ease',
							}}
						>
							{gene}
						</a>
					))}
				</div>
			</div>
		</div>
	</Layout>
)

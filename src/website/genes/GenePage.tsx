import type { FC } from 'hono/jsx'
import { Layout } from '../Layout'

interface GenePageProps {
	gene: string
}

// Individual gene page component
export const GenePage: FC<GenePageProps> = ({ gene }) => (
	<Layout title={`${gene} - BioVault Genes`}>
		<div className="container">
			<header className="header">
				<h1 className="logo">Page for Gene {gene}</h1>
				<p className="tagline">Clinical information and research for {gene}</p>
			</header>

			<div className="features">
				<div className="feature">
					<div className="feature-icon">🧬</div>
					<h3 className="feature-title">{gene}</h3>
					<p className="feature-desc">
						This page will contain detailed information about the {gene} gene, including clinical
						variants, research studies, and BioVault collaboration opportunities.
					</p>
				</div>
			</div>

			<div className="call-to-action">
				<h2 className="cta-title">Coming Soon</h2>
				<p className="cta-desc">
					Detailed gene information, variant data, and research collaboration features for {gene}{' '}
					are coming soon.
				</p>
				<div style={{ textAlign: 'center', marginTop: '2rem' }}>
					<a href="/genes" style={{ color: '#059669', textDecoration: 'none', fontWeight: '600' }}>
						← Back to All Genes
					</a>
				</div>
			</div>
		</div>
	</Layout>
)

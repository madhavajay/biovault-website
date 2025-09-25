import { Hono } from 'hono'
import { MainPage } from './website/MainPage'
import { ResearcherPage } from './website/ResearcherPage'
import { ParticipantPage } from './website/ParticipantPage'
import { GenesIndexPage } from './website/genes/index'
import { GenePage } from './website/genes/GenePage'
import { isValidGene, getProperGeneName } from './website/genes/geneList'
import waitlist from './api/waitlist'

const app = new Hono<{ Bindings: Env }>()

// Website routes - handle query parameters for Post-Redirect-Get messages
app.get('/', (c) => {
	const message = c.req.query('message')
	return c.html(<MainPage message={message} />)
})

app.get('/researcher', (c) => {
	const message = c.req.query('message')
	return c.html(<ResearcherPage message={message} />)
})

app.get('/participant', (c) => {
	const message = c.req.query('message')
	return c.html(<ParticipantPage message={message} />)
})

// Gene routes
app.get('/genes', (c) => {
	return c.html(<GenesIndexPage />)
})

app.get('/genes/:gene', (c) => {
	const geneParam = c.req.param('gene')
	const properGeneName = getProperGeneName(geneParam)

	if (!properGeneName) {
		return c.notFound()
	}

	return c.html(<GenePage gene={properGeneName} />)
})

// API routes
app.route('/api/waitlist', waitlist)

// Handle 404 for all other routes
app.notFound((c) => {
	return c.text('Not Found', 404)
})

export default app

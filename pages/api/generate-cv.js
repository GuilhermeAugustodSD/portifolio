const portfolioData = require('../../lib/portfolio-data')

export default async function handler(req, res) {
  const lang = req.query.lang || 'BR'

  try {
    const { renderToBuffer } = await import('@react-pdf/renderer')
    const React = (await import('react')).default
    const { default: CVDocument } = await import('../../components/CV/CVDocument')

    const element = React.createElement(CVDocument, { data: portfolioData, lang })
    const buffer  = await renderToBuffer(element)

    const filename = lang === 'US'
      ? 'guilherme-dantas-cv-en.pdf'
      : 'guilherme-dantas-cv.pdf'

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`)
    res.send(buffer)
  } catch (err) {
    console.error('CV generation error:', err)
    res.status(500).json({ error: 'Failed to generate CV', detail: err.message })
  }
}

const portfolioData = require('../../lib/portfolio-data')

export default function handler(req, res) {
  res.status(200).json(portfolioData)
}

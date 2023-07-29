/**
 * @type {import('gatsby').GatsbyConfig}
 */
require('dotenv').config()
console.log(process.env) // for debugging purposes. remove when ready.

module.exports = {
  siteMetadata: {
    title: `gatsby-edge`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
}

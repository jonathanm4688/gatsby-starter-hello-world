/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'tutorial',
    description: 'Some description about our site',
    author: 'Jonathan Martinez',
    data: {name: 'Jon', age: 25}
  },
  plugins: [
    `gatsby-plugin-sass`
  ]
}

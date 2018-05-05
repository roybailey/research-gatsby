/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
    const { createNodeField } = boundActionCreators
    if (node.internal.type === `MarkdownRemark`) {
        let slug = createFilePath({ node, getNode, basePath: `pages` })
        console.log(`\n${slug}`)
        createNodeField({
            node,
            name: `slug`,
            value: slug,
          })
    }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
    const { createPage } = boundActionCreators
    return new Promise((resolve, reject) => {
      graphql(`
        {
          allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }`
        ).then(result => {
            console.log(JSON.stringify(result, null, 4))
            result.data.allMarkdownRemark.edges.forEach(({ node }) => {
                createPage({
                  path: node.fields.slug,
                  component: path.resolve(`./src/templates/blog-post.js`),
                  context: {
                    // Data passed to context is available in page queries as GraphQL variables.
                    slug: node.fields.slug,
                  },
                })
              })
            resolve()
        })
    })
  };

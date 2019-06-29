const path = require('path')
const _ = require("lodash")

module.exports.onCreateNode = ({node, actions}) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {

      const slug = path.basename(node.fileAbsolutePath, '.md')

      createNodeField({
          node,
          name: 'slug',
          value: slug
      })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")
  const tagTemplate = path.resolve("src/templates/tags.js")

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const posts = response.data.allMarkdownRemark.edges

  posts.forEach(edge => {
      createPage({
          component: blogTemplate,
          path: `/blog/${edge.node.fields.slug}`,
          context: {
              slug: edge.node.fields.slug
          }
      })
  })

  let tags = []
  // Iterate through each post, putting all found tags into `tags`
  _.each(posts, edge => {
    if (_.get(edge, "node.frontmatter.tags")) {
      tags = tags.concat(edge.node.frontmatter.tags)
    }
  })

  tags = _.uniq(tags)

  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag,
      },
    })
  })

}

/*
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogTemplate = path.resolve("./src/templates/blog.js")

  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBlogPost.edges.forEach(edge => {
      createPage({
          component: blogTemplate,
          path: `/blog/${edge.node.slug}`,
          context: {
              slug: edge.node.slug
          }
      })
  })
}
*/

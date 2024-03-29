import React from "react"
import Layout from "../components/layout"
import TagsPanel from "../components/tags-panel"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blog.module.sass"
import Head from "../components/head"

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "MMMM Do, YYYY")
              author
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <div className="section">
        <div className="container">
          <h2 className="title">Blog</h2>
          <div className="columns">
            <div className="column is-two-thirds">
              <ol className={blogStyles.posts}>
                {posts.allMarkdownRemark.edges.map(post => {
                  return (
                    <li className="notification">
                      <h3 className="title">{post.node.frontmatter.title}</h3>
                      <h5 className="subtitle">
                        {`Posted by ${post.node.frontmatter.author} on ${post.node.frontmatter.date}`}
                      </h5>

                      <ul className="tags">
                        {post.node.frontmatter.tags.map(tag => {
                          return (
                            <li className="tag is-link is-rounded">
                              <Link to={`/tags/${tag}`}>{tag}</Link>
                            </li>
                          )
                        })}
                      </ul>

                      <Link
                        to={`/blog/${post.node.fields.slug}`}
                        className="button is-primary"
                      >
                        Read
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className="column">
              <TagsPanel />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

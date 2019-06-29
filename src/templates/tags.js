import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import { Link, graphql } from "gatsby"
import tagsStyles from "./tags.module.sass"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <Head title={tagHeader} />
      <section className="section">
        <div className="container">
          <h2 className="title">Tags</h2>
          <h3 className="subtitle">{tagHeader}</h3>
          <div className="columns">
            <div className="column is-two-thirds">
              <ol className={tagsStyles.posts}>
                {edges.map(({ node }) => {
                  const { slug } = node.fields
                  const { title, date, author } = node.frontmatter
                  return (
                    <li className="notification">
                      <h3 className="title">{title}</h3>
                      <h5 className="subtitle">
                        {`Posted by ${author} on ${date}`}
                      </h5>
                      <Link to={`/blog/${slug}`} className="button is-primary">
                        Read
                      </Link>
                    </li>
                  )
                })}
              </ol>
            </div>
            <div className="column">
                <Link to="/tags" className="button is-link">
                  All tags
                </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            author
          }
        }
      }
    }
  }
`

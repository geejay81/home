import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.sass'
import Head from '../components/head'

const BlogPage = () => {

    const posts = useStaticQuery(graphql`
      query {
        allContentfulBlogPost (
          sort: {
            fields: publishedDate,
            order: DESC
          }
        ) {
          edges {
            node {
              title
              slug
              publishedDate(formatString:"MMMM Do, YYYY")
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
              <ol className={blogStyles.posts}>
                {
                    posts.allContentfulBlogPost.edges.map(post => {
                        return (
                          <li className="notification">
                            <h3 className="title">
                              {post.node.title}
                            </h3>
                            <h4 className="subtitle">{post.node.publishedDate}</h4>
                            <Link
                              to={`/blog/${post.node.slug}`}
                              className="button is-primary">
                                Read
                            </Link>
                          </li>
                        )
                    })
                }
              </ol>
            </div>
          </div>
        </Layout>
    )
}

export default BlogPage

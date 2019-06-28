import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
// import './blog-template.sass'

export const query = graphql`
  query (
    $slug: String!
  ) {
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date(formatString: "MMMM Do, YYYY")
      }
      html
    }
  }
`

// This was used to get the content fron Contentful

// export const query = graphql`
//   query($slug: String!) {
//     contentfulBlogPost(slug: {eq: $slug}) {
//       title
//       publishedDate(formatString: "MMMM Do, YYYY"),
//       body {
//         json
//       }
//     }
//   }
// `

const Blog = (props) => {

    return (
      <Layout>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <section className="section">
          <div className="container">
            <h1 className="title">{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            {
              // documentToReactComponents(props.data.contentfulBlogPost.body.json, options)
            }
            <div className="content" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
          </div>
        </section>
      </Layout>
    )

    /*
    const options = {
      renderNode: {
        "embedded-asset-block": (node) => {

          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url

          return <img alt={alt} src={url} />
        }
      }
    }

    return (
      <Layout>
        <Head title={props.data.contentfulBlogPost.title} />
        <section className="section">
          <div className="container">
            <h1 className="title">{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
          </div>
        </section>
      </Layout>
    )

    */
}

export default Blog
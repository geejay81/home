import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"
import { Link, graphql, useStaticQuery } from "gatsby"

const TagsPanel = () => {
  
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div className="content">
        <h3 className="title">Tags</h3>
        <ul>
            {data.allMarkdownRemark.group.map(tag => (
            <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`} className="tag is-link is-rounded">
                {tag.fieldValue} ({tag.totalCount})
                </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}
  
export default TagsPanel
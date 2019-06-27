import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.scss'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <footer className="footer">
            <div className="container">
                &copy; 2019 {data.site.siteMetadata.author}
            </div>
        </footer>
    )
}

export default Footer

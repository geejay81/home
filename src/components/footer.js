import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from './footer.module.sass'
import GatsbyLogo from '../images/Gatsby_Logo.png'
import BulmaLogo from '../images/made-with-bulma-semiblack.png'
import SocialFollow from '../components/social/social-follow'

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
                <div className="level">
                    <div className="level-item">
                        &copy; 2019 {data.site.siteMetadata.author}
                    </div>
                    <div className="level-item">
                        <img src={GatsbyLogo} className={footerStyles.footerLogo} alt="Powered by Gatsby" />
                    </div>
                    <div className="level-item">
                        <img src={BulmaLogo} className={footerStyles.footerLogo} alt="Made with Bulma" />
                    </div>
                    <div className="level-item">
                        <SocialFollow />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

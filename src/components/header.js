import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        <Link o="/">
                            {data.site.siteMetadata.title}
                        </Link>
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Header
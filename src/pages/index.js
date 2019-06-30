import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className="section">
                <div className="container">
                    <div className="content">
                        <h2 className="title">Hello</h2>
                        <h3 className="subtitle">I'm Greg, a full-stack developer living in Sussex.</h3>
                        <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

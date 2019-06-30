import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import TwitterTimeline from '../components/social/twitter-timeline';

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <div className="section">
                <div className="container">
                    <div className="columns">
                        <main className="column is-two-thirds">
                            <div className="content">
                                <h2 className="title">Hello</h2>
                                <h3 className="subtitle">I'm Greg, a full-stack developer living in Sussex.</h3>
                                <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
                            </div>
                        </main>
                        <section className="column">
                            <TwitterTimeline />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage

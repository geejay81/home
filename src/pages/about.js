import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h2 className="title">About Me</h2>
                        <p>I'm Greg Parr, a full-stack developer based in Sussex/Surrey</p>
                        <p><Link to="/contact">Contact me</Link></p>
                    </div>
                </div>
            </section>   
        </Layout>
    )
}

export default AboutPage

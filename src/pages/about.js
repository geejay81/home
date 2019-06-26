import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>I'm Greg Parr, a full-stack developer based in Sussex/Surrey</p>
            <p>Contact me <Link to="/contact"></Link></p>
        </Layout>
    )
}

export default AboutPage
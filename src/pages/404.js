import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout>
            <Head title="Page not found" />
            <section className="section">
                <div className="container">
                    <h2>Page not found</h2>
                    <p><Link to="/">Head home</Link></p>
                </div>
            </section>
        </Layout>
    )
}

export default NotFound

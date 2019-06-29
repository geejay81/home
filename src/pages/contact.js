import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <section className="section">
                <div className="container">
                    <h2 className="title">Contact</h2>
                    <p>Contact me on twitter at <a href="https://twitter.com/gregparr" target="_blank" rel="noopener noreferrer">@gregparr</a>.</p>
                </div>
            </section> 
        </Layout>
    )
}

export default ContactPage

import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import FollowMe from '../components/social/follow-me';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <main className="column is-two-thirds">
                            <h2 className="title">Contact</h2>
                            <p>Contact me on twitter at <a href="https://twitter.com/gregparr" target="_blank" rel="noopener noreferrer">@gregparr</a>.</p>
                        </main>
                        <section className="column">
                            <h2 className="title">Folow Me</h2>
                            <FollowMe />
                        </section>
                    </div>
                </div>
            </section> 
        </Layout>
    )
}

export default ContactPage

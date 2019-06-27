import React from 'react'
import NavBar from './nav'
import Header from './header'
import Footer from './footer'
// import '../styles/index.scss'
import '../styles/site.sass'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
            <NavBar />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout

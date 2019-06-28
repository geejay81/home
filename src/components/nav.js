import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {

    const handleMenuClick = () => {
        const burger = document.getElementById('navbar-burger')
        burger.classList.toggle('is-active')
        const menu = document.getElementById('navbar-menu')
        menu.classList.toggle('is-active')
    }

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="container">
                <div className="navbar-brand">
                    <a id="navbar-burger" role="button" onClick={handleMenuClick} className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbar-menu" className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" activeClassName="is-active" to="/">Home</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/blog">Blog</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/about">About</Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

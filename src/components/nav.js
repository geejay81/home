import React from 'react'
import { Link } from 'gatsby'

const NavBar = () => {

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div class="container">
                <div className="navbar-brand">
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
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

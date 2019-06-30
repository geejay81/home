import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBookOpen, faUser, faComment } from '@fortawesome/free-solid-svg-icons'

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
                        <Link className="navbar-item" activeClassName="is-active" to="/">
                            <FontAwesomeIcon icon={faHome} />&nbsp;Home
                        </Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/blog">
                        <FontAwesomeIcon icon={faBookOpen} />&nbsp;Blog
                        </Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/about">
                            <FontAwesomeIcon icon={faUser} />&nbsp;About
                        </Link>
                        <Link className="navbar-item" activeClassName="is-active" to="/contact">
                        <FontAwesomeIcon icon={faComment} />&nbsp;Contact
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

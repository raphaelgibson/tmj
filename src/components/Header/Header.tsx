  
import React from 'react'

import { Link } from 'react-router-dom'

import './Header.scss'

export const Header = () => {
    return (
        <nav className="navbar">
            <section className="sec-1"></section>
            <section className="sec-2"></section>
            <section className="sec-3">
                <button type="button" className="signin">
                    <Link to="/signin">login</Link>
                </button>
                <button type="button" className="purple-button">
                    <Link to="/signup">cadastre-se</Link>
                </button>
            </section>
        </nav>
    )
}

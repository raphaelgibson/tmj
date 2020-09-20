import React from 'react'
import './Header.scss'

export const Header = () => {
    return (
        <nav className="navbar">
            <section className="sec-1"></section>
            <section className="sec-2"></section>
            <section className="sec-3">
                <button type="button" className="signin">login</button>
                <button type="button" className="signup">cadastre-se</button>
            </section>
        </nav>
    )
}

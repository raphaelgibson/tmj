import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export default() => {
	return(
        <main className="homepage">
            <div className="sec-1">
                <h1>Conheça instituições que tem tudo a ver com você</h1>
                <button type="button" className="purple-button">
                    <Link to="/register">explorar</Link>
                </button>
            </div>
            
            <section className="sec-2">
            </section>
        </main>
	)
}

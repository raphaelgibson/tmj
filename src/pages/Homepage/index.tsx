import React from 'react'
import { Link } from 'react-router-dom'

import './styles.scss'

export default() => {
	return(
        <main className="homepage">
            <div className="ong">
                <h1>Conheça instituições que tem tudo a ver com você</h1>
                <button type="button" className="purple-button">
                    <Link to="">explorar</Link>
                </button>
            </div>
            
            <div className="ongValues">
                <div className="triangle"></div>
            </div>
        </main>
	)
}

import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Ativo 1.svg'

import './styles.scss'

export default() => {
	return(
		<div id="header" >

			<img src={ Logo } alt="Logo" />

			<div>
				<Link to="" > Login </Link>
				<Link to="" > Cadastre-se </Link>
			</div>
		</div>
	)
}

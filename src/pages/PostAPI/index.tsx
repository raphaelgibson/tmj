import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default() => {
	return(
		<div className="postApi" >
			<header>

				<div>
					<img src="https://github.com/pedr0aroucha.png" alt="Logo" />
					<div>
						<h1>ONG X</h1>
						500 pts
					</div>

				</div>
				
				<Link to="" > EDITANDO </Link>

			</header>

			<label htmlFor=""> Slogan </label>
			<input 
				type="text" 
				name="slogan" 
				id="slogan" 
				placeholder="Slogan da ONG"
			/>
			<label htmlFor=""> Apresentação </label>
			<textarea 
				name="presentation" 
				id="presentation"
				placeholder="Apresentação"
			></textarea>

			<div className="buttonContainer">
				<Link to="" > GUARDAR ALTERAÇÔES </Link>
			</div>

		</div>
	);
}
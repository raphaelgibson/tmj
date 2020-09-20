import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default() => {
	const [checked, setChecked] = useState(false);

	return(
		<div className="register">
				
			<h1> Cadastro </h1>

			<span> É um pequeno passo para você, um gigante para nossa causa! </span>

			<form>
				
				<div className="input-block">
					<label htmlFor="email"> Seu e-mail </label>
					<input 
						type="email" 
						name="email" 
						id="email" 
						placeholder="nome@domínio.com"
					/>
				</div>

				<div className="input-block">
					<label htmlFor="password"> Senha </label>
					<input 
						type="password" 
						name="password" 
						id="password"
						placeholder="ao menos 8 caracteres"
					/>
				</div>

				<div className="input-block">
					<label htmlFor="email"> Confirme a senha </label>
					<input 
						type="password" 
						name="passwordConfirm" 
						id="passwordConfirm"
						placeholder="ao menos 8 caracteres"
					/>
				</div>


				<div className="iAm" >
						
					<div>
				  	<input 
				  		type="radio"
				  		id="ong" 
				  		name="gender"
				  		onChange={() => setChecked(!checked)}
				  	/>
				  	<label htmlFor="ong">Sou uma ONG</label><br />
					</div>
					<div>
				  	<input 
				  		type="radio" 
				  		id="helper" 
				  		name="gender"
				  		onChange={() => setChecked(!checked)}
				  	/>
				  	<label htmlFor="helper">Quero Ajudar</label>
					</div>

				</div>

				{ checked ?
					<div id="cause">
						<label htmlFor="cause" > Selecione sua casa </label>
						<select name="cause" id="cause">
							<option value="">Animais</option>
						</select>
					</div>
					: <></> }

				<button> Cadastre-se </button>

			</form>

			<span id="login" > Já tem uma conta? <Link to="/login" >Log-in</Link> </span>

		</div>
	);
}
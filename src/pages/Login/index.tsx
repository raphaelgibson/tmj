import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default() => {

	return(
		<div className="register">
				
			<h1> Login </h1>

			<span> Efetue login com os dados que você utilizou ao se registrar </span>

			<div className="buttonsContainer" >
				<Link to="" >Login com o Facebook</Link>
				<Link to="" >Login com o Google</Link>
			</div>

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

				<div className="checkbox">
					<div>
						<input 
							type="checkbox" 
							name="ong" 
							id="ong"
						/>
						<label htmlFor="ong"> Matenha-me conectado </label>
					</div>
				</div>

				<button> Log in </button>

			</form>

			<span id="login" > Não tem uma conta? <Link to="/register" >Cadastre-se</Link> </span>
			<Link to="/login" >Esqueceu a senha?</Link>

		</div>
	);
}
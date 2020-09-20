import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export default() => {
	const [checked, setChecked] = useState(true);
	const [iAm, setIam] = useState({who: 'none', status: checked});

	const handleChange = ({ target }: any) => {
		const { name } = target;
		setChecked(!checked)
		if (checked) {
			setIam({who: name, status: checked})
		} else {
			setIam({who: 'none', status: checked});
		}
	}

	useEffect(() => {
		if (iAm.status) {
			console.log(iAm);
		}
	})

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

				<div className="checkbox">
					<div>
						<input 
							type="checkbox" 
							name="ong" 
							id="ong"
							onChange={handleChange}
						/>
						<label htmlFor="ong"> Sou uma ONG </label>
					</div>
					<div>
						<input 
							type="checkbox" 
							name="helper" 
							id="helper"
							onChange={handleChange}
						/>
						<label htmlFor="helper"> Quero ajudar </label>
					</div>
				</div>

				{ iAm && iAm.who === "ong" ?
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
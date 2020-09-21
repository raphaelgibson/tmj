import React, { FormEvent } from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'

import api from '../../services/api'

import './styles.scss';

export interface OngItemProps {
	id: number;
	ongName: string;
	points: number;
}

const OngItem: React.FC<OngItemProps> = ({ ongName, points }) => {
	return (
		<div className="ongItem" >
			<div>
			
				<b> 1 </b>
				<img src="https://github.com/pedr0aroucha.png" alt="ongImage" />
				<Link to="/ong" > ONG X </Link>
			</div>

			<div> 500 </div>

		</div>
	)
}

export default() => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const body = { mensagem: `Olá pessoal, hoje compramos o arame que será utilizado para cercar o segundo canil.
        Em breve enviamos as fotos do novo canil pronto pra vocês. Obrigada por fazer parte dessa
        história!` }
        
        try {
            await api.post('/zenvia/viaWhats', body);

            Swal.fire({
                icon: 'success',
                title: 'Doação enviada com sucesso!'
            })

        } catch (error) {
            console.log(error)

            Swal.fire({
                icon: 'error',
                title: 'Falha no servidor. Tente novamente mais tarde.'
            })
        }
    }

	const ongs = 
	[
		{id: 0, ongName: "ONG X", points: 500},
		{id: 1, ongName: "ONG X", points: 500},
		{id: 2, ongName: "ONG X", points: 500},
		{id: 3, ongName: "ONG X", points: 500},
		{id: 4, ongName: "ONG X", points: 500},
		{id: 5, ongName: "ONG X", points: 500},
		{id: 6, ongName: "ONG X", points: 500},
		{id: 7, ongName: "ONG X", points: 500},
		{id: 8, ongName: "ONG X", points: 500},
		{id: 9, ongName: "ONG X", points: 500},
		{id: 10, ongName: "ONG X", points: 500},
	];

	return(
		<div className="message" >
			
			<div className="content">
					
				<header>

					<div>
						<img src="https://github.com/pedr0aroucha.png" alt="Logo" />
						<div>
							<h1>ONG X</h1>
							500 pts
						</div>

					</div>
					
					<div className="buttons">
						<Link to="/postapi" > EDITAR </Link>
						<Link to="/timeline" > TIMELINE </Link>
					</div>

				</header>

				<h1> Alcance mais doadores recorrentes! </h1>

				<span> Aqui sua ONG ganha mais visibilidade ao ser trasnparente! </span>

				<textarea name="" id="" placeholder="POST" value="Olá pessoal, hoje compramos o arame que será utilizado para cercar o segundo canil.
Em breve enviamos as fotos do novo canil pronto pra vocês. Obrigada por fazer parte dessa
história!" ></textarea>

				<div className="lastButton" >
					<Link to="/timeline" onClick={() => handleSubmit} > ENVIAR DADOS </Link>
				</div>

			</div>

			<div className="items">
				<h5> ONGs melhores pontuadas </h5>
				<div className="title">
					<span> Na categoria escolhida </span>
					<span> Causa </span>
					<span> Pontos </span>
				</div>
				{
					ongs.map(ong => {
						return (
							<OngItem
								id={ ong.id }
								ongName={ ong.ongName }
								points={ ong.points }
							/>
						);
					})
				}
			</div>

		</div>
	);
}
import React from 'react'
import { Link } from 'react-router-dom'

import Swal from 'sweetalert2'
import api from '../../services/api'

import './styles.scss'

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
	);
}

export default () => {
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
	]

	return(
		<div className="postViaAPI" >
			<div className="content">
				<header>
					<div>
						<img src="https://github.com/pedr0aroucha.png" alt="Logo" />
						<div>
							<h1>ONG X</h1>
							500 pts
						</div>

					</div>
					
					<div className="editing"> EDITANDO </div>
				</header>

				<h1> Alcance mais doadores recorrentes! </h1>

				<span> Aqui sua ONG ganha mais visibilidade ao ser trasnparente! </span>

				<textarea name="" id="" ></textarea>

				<div>
					<Link to="" > ENVIAR DADOS </Link>
				</div>
			</div>

			<div className="items">
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
	)
}

import React from 'react';

import OngItem, { OngItemProps } from './components/OngItem';

import './styles.scss';

export default() => {
	var count = 0;
	const ongs = 
	[
		{id: 0, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 1, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 2, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 3, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 4, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 5, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 6, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 7, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 8, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 9, ongName: "ONG X", points: 500, description: "Breve descrição"},
		{id: 10, ongName: "ONG X", points: 500, description: "Breve descrição"},
	]

	return(
		<div className="ongList" >
			<h1> Escolha um de nossos projetos </h1>

			<section className="headerTable" >

				<h5> ONGs melhores pontuadas </h5>

				<div className="title">
					<span> Na categoria escolhida </span>
					<span> Causa </span>
					<span> Pontos </span>
				</div>

			<div className="items" >
				{ongs.map((ong: OngItemProps) => {
					count++;
					return <OngItem key={ ong.id } ong={ ong } count={ count }/>
				})}
			</div>

			</section>

		</div>
	);
}
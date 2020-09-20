import React from 'react';
import { MdCheck } from 'react-icons/md';

import OngItem, { IOngItemProps } from './components/OngItem'

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

	return (
		<div className="ongList" >
			<h1> ONGs melhores pontuadas </h1>

			<section className="headerTable" >
				<h5> <MdCheck /> Acreditamos que essas instituições tem tudo a ver com você </h5>

				<div className="title">
					<div> Na categoria escolhida </div>
					<div> Causa </div>
					<div> Pontos </div>
				</div>

                <div className="items" >
                    {ongs.map((ong: IOngItemProps) => {
                        count++
                        return <OngItem key={ ong.id } ong={ ong } count={ count }/>
                    })}
                </div>
			</section>
		</div>
	)
}

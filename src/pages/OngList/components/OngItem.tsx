import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

export interface OngItemProps {
	id: number;
	ongName: string;
	points: number;
	description: string;
}

interface Props {
  ong: OngItemProps;
  count: number
}


const OngItem: React.FC<Props> = ({ ong, count }) => {
	return(
		<div className="ongItem" >
			
			<div>
				<b> { count } </b>
				<img src="https://github.com/pedr0aroucha.png" alt="ongImage" />
				<Link to="/ong" > { ong.ongName } </Link>
			</div>

			<div> { ong.description } </div>

			<div> { ong.points } </div>

		</div>
	);
}

export default OngItem;
import React from 'react';

import './styles.css';

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
				<span> { ong.ongName } </span>
			</div>

			<div> { ong.description } </div>

			<div> { ong.points } </div>

		</div>
	);
}

export default OngItem;
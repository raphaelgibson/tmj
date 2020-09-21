import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import './styles.scss';

export default() => {
	const details = 
	{
		name: "ONG X",
		points: 500,
		description: "Magna molestie commodo ac magna sodales primis dui fermentum, lectus nisl sit hendrerit risus commodo venenatis integer, aenean curabitur aenean tortor eros velit sem. sodales turpis lacinia curabitur venenatis semper malesuada quisque aenean, urna vulputate aliquam id blandit semper nam, per conubia ut lorem faucibus metus purus. arcu imperdiet pulvinar ornare per viverra aenean, viverra nullam nec luctus arcu, conubia sem pulvinar at ut",
		urlImage: "https://github.com/pedr0aroucha.png"
	}

	return(
		<div className="ongDetail" >

			<h1> Você escolheu: </h1>
			<section>
				
				<div className="ong">
					<header>
						<img src={ details.urlImage } alt={ details.name } />
						<div>
							<h1>{ details.name }</h1>
							{ details.points }
						</div>
					</header>
					<p>
						<span>Breve descrição</span>	
						{ details.description }
					</p>
				</div>
				
				<div className="ongValues">
					
					<h5>Escolha um valor para doar</h5>

					<div id="firstChild" >
						<span> R$ 19.90 <span>/mês</span> </span>
						<Link to="" > DOAR </Link>
						<p>Lorem ipsum dolor sit amet, consectetur</p>
					</div>

					<div>
						<span> R$ 49.90 <span>/mês</span> </span>
						<Link to="" > DOAR </Link>
						<p>Lorem ipsum dolor sit amet, consectetur</p>
					</div>

					<div id="lastChild" >
						<span> R$ 99.90 <span>/mês</span> </span>
						<Link to="" > DOAR </Link>
						<p>Lorem ipsum dolor sit amet, consectetur</p>
					</div>

				</div>

			</section>

			<Link to="/" > <MdArrowBack /> Voltar para lista de ongs </Link>

		</div>
	);
}
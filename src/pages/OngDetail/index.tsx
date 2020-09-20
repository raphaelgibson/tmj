import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default() => {
	return(
		<div className="ongDetail" >
			<h1> Você escolheu: </h1>
			<section>
				<div className="ong">
						<header>
							<img src="https://github.com/pedr0aroucha.png" alt="ongImage" />
							<div>
								<h1>ONG X</h1>
								500 pts
							</div>
						</header>
						<p><span>Breve descrição</span>
                        sdfsdfsdfsdfsdfsdfsdfsdfffffffffffffffdsjdfsdkjfskdjfskdjfsdjkfsjdlkfsdf
                        sdfsdfsdfsdfsdfsdfsdfsdfffffffffffffffdsjdfsdkjfskdjfskdjfsdjkfsjdlkfsdf
                        sdfsdfsdfsdfsdfsdfsdfsdfffffffffffffffdsjdfsdkjfskdjfskdjfsdjkfsjdlkfsdf
                        sdfsdfsdfsdfsdfsdfsdfsdfffffffffffffffdsjdfsdkjfskdjfskdjfsdjkfsjdlkfsdf</p>
				</div>
				
				<div className="ongValues">
					<h5>Escolha um valor para doar</h5>

					<div>
						<span> R$ 19.90 <span>/mês</span> </span>
						<Link to="" > Doar </Link>
					</div>
				</div>
			</section>
		</div>
	)
}

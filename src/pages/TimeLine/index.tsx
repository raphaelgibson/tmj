import React from 'react';
import { TiSocialInstagram, TiSocialFacebook } from 'react-icons/ti';

import './styles.scss';

export default() => {
	return(
		<div className="timeLine" >
			
			<header>

				<div>
					<img src="https://github.com/pedr0aroucha.png" alt="Logo" />
					<div>
						<h1>ONG X</h1>
						500 pts
					</div>

				</div>

			</header>

			<div className="content" >
				

				<div>
					<span>Breve descrição</span>
					<p>Tortor etiam vehicula curae sagittis ullamcorper in luctus convallis scelerisque, lectus amet diam tempus ullamcorper primis convallis molestie egestas, bibendum adipiscing eleifend blandit eu aliquam aenean eu. semper dictumst donec urna tincidunt curae et ligula euismod cubilia tempor curabitur, mattis turpis habitant quis nam pellentesque fermentum nulla dolor</p>
				</div>
				
				<div className="buttons">
					<TiSocialInstagram />
					<TiSocialFacebook />
				</div>

			</div>

			<div className="content" >
				

				<div>
					<span>Breve descrição</span>
					<p>Tortor etiam vehicula curae sagittis ullamcorper in luctus convallis scelerisque, lectus amet diam tempus ullamcorper primis convallis molestie egestas, bibendum adipiscing eleifend blandit eu aliquam aenean eu. semper dictumst donec urna tincidunt curae et ligula euismod cubilia tempor curabitur, mattis turpis habitant quis nam pellentesque fermentum nulla dolor</p>
				</div>
				
				<div className="buttons">
					<TiSocialInstagram />
					<TiSocialFacebook />
				</div>

			</div>

		</div>
	);
}
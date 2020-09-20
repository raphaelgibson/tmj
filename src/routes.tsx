import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import Homepage from './pages/Homepage/'
import OngList from './pages/OngList/'
import OngDetail from './pages/OngDetail/'
import Donation from './pages/Donation/'
import Register from './pages/Register'

import './index.scss'

const App = () => {
	return (
		<BrowserRouter>
  		<Header />
			<Switch>	
				<Route path='/' exact component={ Homepage } />
				<Route path='/ongs' exact component={ OngList } />
				<Route path='/ong' component={ OngDetail } />
				<Route path='/donation' component={ Donation } />
				<Route path='/signup' component={ Register } />
			</Switch>
		</BrowserRouter>
	)
}

export default App

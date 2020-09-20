import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import OngList from './components/OngList/'
import OngDetail from './components/OngDetail/'

import './index.css'

const App = () => {
	return (
		<BrowserRouter>
  		<Header />
			<Switch>
				
				<Route path='/' exact component={ OngList } />
				<Route path='/details' component={ OngDetail } />

			</Switch>
		</BrowserRouter>
	)
}

export default App

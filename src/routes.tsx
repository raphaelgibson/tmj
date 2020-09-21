import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header/Header'
import Homepage from './pages/Homepage/'
import OngList from './pages/OngList/'
import OngDetail from './pages/OngDetail/'
import Register from './pages/Register/'
import Login from './pages/Login/'
import Donation from './pages/Donation/'
import PostAPI from './pages/PostAPI/'
import PostViaAPI from './pages/PostViaAPI/'
import TimeLine from './pages/TimeLine/'

import './index.scss'

const App = () => {
	return (
		<BrowserRouter>
  		<Header />
			<Switch>
				<Route path='/ongs' exact component={ OngList } />
				<Route path='/ong' component={ OngDetail } />
				<Route path='/register' component={ Register } />
				<Route path='/login' component={ Login } />
				<Route path='/donation' component={ Donation } />
				<Route path='/postapi' component={ PostAPI } />
				<Route path='/postviaapi' component={ PostViaAPI } />
				<Route path='/timeline' component={ TimeLine } />
				<Route path='*' component={ Homepage } />
			</Switch>
		</BrowserRouter>
	)
}

export default App

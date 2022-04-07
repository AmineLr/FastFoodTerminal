import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import 'normalize.css/normalize.css'
import './assets/scss/index.scss'

import Navbar from './components/Navbar'
import Home from "./pages/Home";
import Meals from "./pages/Meals";

const App = () => {

	return (
		<div className="App">
			<BrowserRouter>
			
				<Switch>

					<Route exact path='/'>
						<Home />
					</Route> 

					<Route path='/meals/:catid'>
						<Meals />
					</Route>

				</Switch>

				<Navbar />
			</BrowserRouter>
		</div>
	)
};

export default App;

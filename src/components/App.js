import React from 'react';
import NavBar from './Nav.js';
import PlantTree from '../components/PlantTree';
import Footer from '../components/Footer';
import '../styles/Footer.css';
import '../styles/PlantTree.css';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../styles/Form.css';
import HomePage from './Homepage.js';
import Questions from './Questions.js';

const App = () => (
	<div className="App">
		<BrowserRouter>
			{/* <NavBar /> */}
			<Switch>
				<Route exact path="/Homepage" component={HomePage} />
				<Route exact path="/Questions" component={Questions} />
				<Route exact path="/PlantTree" component={PlantTree} />
			</Switch>
			<Footer />
		</BrowserRouter>
	</div>
);

export default App;

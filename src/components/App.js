import React from 'react';
import NavBar from './Nav.js';
import PlantTree from '../components/PlantTree'
import Footer from '../components/Footer';
import '../styles/App.css'
import '../styles/Footer.css'
import '../styles/PlantTree.css'
import Facts from './Facts'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css'
import '../styles/Form.css'
import HomePage from './Homepage.js';

const App = () => (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Footer />
        <Switch>
          <Route exact path="/Homepage" component={HomePage} />
          <Route exact path="/Facts" component={Facts} /> 
          <Route exact path="/PlantTree" component={PlantTree} />
        </Switch>
      </BrowserRouter>
    </div>
  );

export default App;







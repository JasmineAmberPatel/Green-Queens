import React from 'react';
import NavBar from './Nav.js';
import Facts from './Facts'
import Inspiration from './Inspiration';
import Tree from './Tree'
import '../styles/App.css'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Facts} /> 
          <Route exact path="/Inspiration" component={Inspiration} />
          <Route exact path="/Tree" component={Tree} />
        </Switch>
      </BrowserRouter>  
    </div>
  );
}

export default App;

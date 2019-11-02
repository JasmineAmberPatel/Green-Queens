import React from 'react';
import NavBar from './Nav.js';
import Facts from './Facts'
import Inspiration from './Inspiration';
import Tree from './Tree'
import '../styles/App.css'
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Form from "react-jsonschema-form";
import schema from './FormSchema';
import uiSchema from './UiSchema';
import calculateCarbon from './CarbonCalculator';
import calculateWater from './WaterCalculator';

const log = (type) => console.log.bind(console, type);

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      jeans: 0,
      woolJumper: 0,
      polyesterDress: 0,
      cottonTShirt: 0,
      cottonShirts: 0,
      polyesterCoat: 0,
      rubberShoes: 0,
      carbon: 0,
      water: 0,
      name: '',
      showMessage: false,
    };
    this.calculatedCarbon = this.calculatedCarbon.bind(this);
  }

calculatedCarbon( data) {
  const { jeans = 0, woolJumper = 0, polyesterDress = 0, cottonTShirt = 0, cottonShirts = 0, polyesterCoat = 0, rubberShoes = 0, name } = data.formData;
  const carbon = calculateCarbon(jeans, woolJumper, polyesterDress, cottonTShirt, cottonShirts, polyesterCoat, rubberShoes)
  const water = calculateWater(jeans, woolJumper, polyesterDress, cottonTShirt, cottonShirts, polyesterCoat, rubberShoes)
  this.setState({ showMessage: true, name, carbon, water, jeans, woolJumper, polyesterDress, cottonTShirt, cottonShirts, polyesterCoat, rubberShoes });
}

render() {
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
      <Form schema={schema}
          ui={uiSchema}
          onSubmit={this.calculatedCarbon}
          onError={log("errors")} 
      /> 
      <h4>
       {this.state.showMessage ? `Hello ${this.state.name} the volume of carbon the clothing you bought this year is ${this.state.carbon} KG C02` : ''}
      </h4>
      <h4>
       {this.state.showMessage ? `Hello ${this.state.name} the volume of water the clothing you bought this year is ${this.state.water} Litres` : ''}
      </h4>
    </div>
  );
}    
}

export default App;

import React from 'react';
import NavBar from './Nav.js';
import PlantTree from '../components/PlantTree'
import Footer from '../components/Footer';
import '../styles/App.css'
import '../styles/Footer.css'
import '../styles/PlantTree.css'
import Facts from './Facts'
import Inspiration from './Inspiration';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import '../styles/App.css'
import '../styles/Form.css'
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
        <Footer />
        <Switch>
          <Route exact path="/" component={Facts} /> 
          <Route exact path="/PlantTree" component={PlantTree} />
          <Route exact path="/Inspiration" component={Inspiration} />
        </Switch>
      </BrowserRouter>
      <Form schema={schema}
          ui={uiSchema}
          onSubmit={this.calculatedCarbon}
          onError={log("errors")} 
      /> 
      <h4>
       {this.state.showMessage ? `Hello ${this.state.name} the clothing you bought this year created ${this.state.carbon} KG of C02 and used ${this.state.water} Litres of water in production.` : ''}
      </h4>
    </div>
  );
}    
}

export default App;







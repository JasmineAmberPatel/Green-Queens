import React, { Fragment } from 'react';
import Form from "react-jsonschema-form";
import schema from './FormSchema';
import uiSchema from './UiSchema';
import calculateCarbon from './CarbonCalculator';
import calculateWater from './WaterCalculator';
import ImageCard from './ImageCard';

const log = (type) => console.log.bind(console, type);

class HomePage extends React.Component {
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
      <Fragment>
        <ImageCard />
        <br/>
          <div className="calculator-box">
          <h2 className="calculator-box__heading">Calculate the environmental cost of your clothes</h2>
        <br />
          <div className="calculator-box__calculator"> 
        <Form className="rectangle"
              schema={schema}
              ui={uiSchema}
              onSubmit={this.calculatedCarbon}
              onError={log("errors")} 
          /> 
          <h4>
           {this.state.showMessage ? `Hello ${this.state.name} the clothing you bought this year created ${Math.round(this.state.carbon)} KG of C02 and used ${this.state.water} Litres of water in production. This amount of C02 would take 1 tree ${Math.round(this.state.carbon/21)} years to offset.` : ''}
          </h4>
          </div>
      </div>
      </Fragment>
    );
  }
}

export default HomePage;

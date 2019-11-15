import React, { Fragment } from 'react';
import Form from "react-jsonschema-form";
import schema from './FormSchema';
import uiSchema from './UiSchema';
import calculateCarbon from './CarbonCalculator';
import calculateWater from './WaterCalculator';
import ImageCard from './ImageCard';
import PlantBanner from './PlantBanner';

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

renderFancyMessage() {
  return (
    <Fragment>
      {`Hello ${this.state.name} the clothing you bought this year created`} <span className="colour-message">{Math.round(this.state.carbon)}</span>{` KG of C02 
      and used`} <span className="colour-message">{this.state.water}</span> {`Litres of water in production. `}
      {`This amount of C02 would take 1 tree `}<span className="colour-message">{Math.round(this.state.carbon/21)}</span>{` years to offset.`}
    </Fragment>
  )
}

  render() {
    return (
      <Fragment>
        <ImageCard />
        <br/>
          <div className="calculator-box">
          <h2 className="calculator-box__heading">Calculate the environmental cost of your clothes.</h2>
        <br />
          <div className="calculator-box__calculator"> 
        <Form className="rectangle"
              schema={schema}
              ui={uiSchema}
              onSubmit={this.calculatedCarbon}
              onError={log("errors")} 
          /> 
          <h4 className="calculator-message">
           {this.state.showMessage ? this.renderFancyMessage() : ''}
          </h4>
          </div>
      </div>
      <PlantBanner />
      </Fragment>
    );
  }
}

export default HomePage;

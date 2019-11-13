import React, { Fragment } from 'react';
import Form from 'react-jsonschema-form';
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
			showMessage: false
		};
		this.calculatedCarbon = this.calculatedCarbon.bind(this);
	}

	calculatedCarbon(data) {
		const {
			jeans = 0,
			woolJumper = 0,
			polyesterDress = 0,
			cottonTShirt = 0,
			cottonShirts = 0,
			polyesterCoat = 0,
			rubberShoes = 0,
			name
		} = data.formData;
		const carbon = calculateCarbon(
			jeans,
			woolJumper,
			polyesterDress,
			cottonTShirt,
			cottonShirts,
			polyesterCoat,
			rubberShoes
		);
		const water = calculateWater(
			jeans,
			woolJumper,
			polyesterDress,
			cottonTShirt,
			cottonShirts,
			polyesterCoat,
			rubberShoes
		);
		this.setState({
			showMessage: true,
			name,
			carbon,
			water,
			jeans,
			woolJumper,
			polyesterDress,
			cottonTShirt,
			cottonShirts,
			polyesterCoat,
			rubberShoes
		});
	}
	render() {
		return (
			<Fragment>
				<ImageCard />
				<div className="Calculator">
					<Form
						className="rectangle"
						schema={schema}
						ui={uiSchema}
						onSubmit={this.calculatedCarbon}
						onError={log('errors')}
					/>
					<h4>
						{this.state.showMessage ? (
							`Hello ${this.state.name} the clothing you bought this year created ${this.state
								.carbon} KG of C02 and used ${this.state.water} Litres of water in production.`
						) : (
							''
						)}
					</h4>
				</div>
			</Fragment>
		);
	}
}

export default HomePage;

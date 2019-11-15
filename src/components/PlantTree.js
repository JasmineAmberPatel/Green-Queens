import React, { Component } from 'react';
import '../styles/PlantTree.css';
import axios from 'axios';
import Allprojects from '../projects.json';

class PlantTree extends Component {
	constructor() {
		super();

		this.state = {
			projects: Allprojects,
			selected_project_id: null,
			trees: 0,
			certificate: null
		};
	}

	onClick = () => {
		if (this.state.trees === 0) {
			return;
		}

		axios({
			method: 'post',
			url: 'https://cors-anywhere.herokuapp.com/https://api.printreleaf.com/v1/transactions',
			data: {
				trees: this.state.trees,
				project_id: this.state.selected_project_id
			},
			auth: {
				username: '17bb2790cae51936b1e92730bf977ed4'
			}
		})
			.then(this.downloadCertificate)
			.catch((err) => console.log(err));
	};
	downloadCertificate = (project_res) => {
		axios({
			method: 'get',
			url: `https://cors-anywhere.herokuapp.com/https://api.printreleaf.com/v1/certificates/${project_res.data
				.certificate_id}`,

			auth: {
				username: '17bb2790cae51936b1e92730bf977ed4'
			}
		})
			.then((res) => {
				this.setState({
					certificate: res.data
				});
				console.log(res);
				console.log(res.data);
			})
			.catch((err) => console.log(err));
	};

	renderProject = (project) => {
		if (project.id === this.state.selected_project_id) {
			return (
				<div className="lista_project">
					<button className="button_project">{project.name}</button>
					<input
						className="input"
						type="number"
						onChange={(event) =>
							this.setState({
								trees: event.target.value
							})}
					/>
				</div>
			);
		}
		return (
			<ul key={project.id} className="lista_project">
				<button
					className="button_project"
					onClick={() =>
						this.setState({
							selected_project_id: project.id
						})}
				>
					{project.name}
				</button>
			</ul>
		);
	};

	renderCertificate() {
		//if (this.state.certificate) {href={this.state.certificate.url}>
		return (
			<div>
				<button className="button_certyficate">Download certificate</button>
			</div>
		);
		//	}
		//return null;
	}

	render() {
		return (
			<div className="Plant-a-Tree">
				<div className="container">
					<div className="img_left">
						<img
							className="page-leaves-left"
							src={require('../img/page-leaves-left/page-leaves-left.svg')}
							alt="leaves-left"
						/>
						<img
							className="page-tree-left"
							src={require('../img/page-tree-left/page-tree-left.svg')}
							alt="tree-left"
						/>
					</div>
					<div className="text">
						<h1 className="Title">Plant a tree!</h1>
						<div className="II">Explore our network of global reforestation projects by clicking the links below. Select your favorite forests, and input how many trees you would like to plant. You can then download your certificate.</div>
						<ul className="list">
							<li>By absorbing CO2 from the atmosphere, trees help to combat climate change, help to improve soils and prevent flooding and erosion.</li>
							<li>Trees help clean the air we breathe, filter the water we drink, and provide habitat to over 80% of the world's terrestrial biodiversity.</li>
							<li>Forests provide jobs to over 1.6 billion people, absorb harmful carbon from the atmosphere, and are key ingredients in 25% of all medicines.</li>
						</ul>
					</div>

					<div className="api">
						<div className="RectangleAPI">
							<div className="projects">
								<li>{this.state.projects.map(this.renderProject)}</li>
							</div>

							<button onClick={this.onClick} className="ButtonPaT">
								<p className="Plant-a-tree">Plant a Tree</p>
							</button>
							<div className="certificate_div">{this.renderCertificate()}</div>
						</div>
					</div>
					<div className="img_right">
						<img
							className="page-leaves-right "
							src={require('../img/page-leaves-right/page-leaves-right.svg')}
							alt="leaves-right"
						/>

						<img
							className="page-tree-right"
							src={require('../img/page-tree-right/page-tree-right.svg')}
							alt="tree-right"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default PlantTree;
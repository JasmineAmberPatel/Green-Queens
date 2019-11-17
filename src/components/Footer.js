import React from 'react';
import '../img/logo.png';
import '../styles/Footer.css';

const Footer = () => {
	return (
		<div className="Footer">
			<div className="Help-Information ">
				<img className="logo" src={require('../img/logo.png')} alt="logo" />
			</div>
			<div className="bottom">
				<div className="Information">Information</div>
				<div className="-Green-Queen-2019"> &copy;Green Queens 2019 </div>
			</div>
		</div>
	);
};

export default Footer;

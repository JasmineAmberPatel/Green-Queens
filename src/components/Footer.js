import React from 'react'
import '../img/logo.png'
import '../styles/Footer.css'


const Footer = () => {
        return (
            <div className="Footer">
                <img className="footer-logo" src={require('../img/logo.png')} alt="logo"></img>
                <div className="Green-Queen-2019"> &copy;Green Queens 2019 </div>
            </div>
        );
}


export default Footer
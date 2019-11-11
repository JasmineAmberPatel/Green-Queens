import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <div className="NavBar">
     <ul className="PageLinks">
        <img className="logo1" alt="logo" src={require('../img/logo.png')} />  
        <Link className="HomePage" to="/Homepage"> Home </Link>
        <Link className="faq" to="/Facts"> Facts </Link> 
        <Link className="Tree" to="/PlantTree"><button className="TreeButton"><text className="TreeText">Plant a Tree</text></button></Link>
     </ul>
 </div>
)
}

export default NavBar;
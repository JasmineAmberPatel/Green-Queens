import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <div className="NavBar">
     
     <ul className="PageLinks">
        <img className="logo1" alt="logo" src={require('../img/logo.png')} />  
        <Link className="FAQ" to="/"> Facts </Link> 
        <Link className="Inspiration" to="/Inspiration"> Inspiration </Link>
        <Link className="Plant-a-tree" 
              to="/PlantTree"> <button className="buttonPaT"><text className="PlantaTree">Plant a Tree</text></button></Link>
     </ul>
 </div>
)
}

export default NavBar;
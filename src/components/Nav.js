import React from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <div className="NavBar">
     
     <ul className="PageLinks">
        <img className="logo" alt="logo" src={require('../img/Logo/Logo.png')} />  
        <Link className="FAQ" to="/"> Facts </Link> 
        <Link className="Inspiration" to="/Inspiration"> Inspiration </Link>
        <Link className="Plant-a-tree" to="/Tree"> Plant Tree </Link>
     </ul>
 </div>
)
}

export default NavBar;
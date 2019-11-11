import React from 'react';
import '../styles/NavBar.css';
import { Link } from 'react-router-dom';
import Questions from './Questions.js';

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul className="PageLinks">
                <img className="logo1" alt="logo" src={require('../img/logo.png')} />
                <div>
                    <Link className="FAQ" to="/Questions">
                        Facts
                    </Link>
                    <Link className="HomePage" to="/Homepage">
                        Home
                    </Link>
                    <Link className="Tree" to="/PlantTree">
                        <button className="TreeButton">
                            <div className="TreeText">Plant a Tree</div>
                        </button>
                    </Link>
                </div>
            </ul>
        </div>
    );
};

export default NavBar;
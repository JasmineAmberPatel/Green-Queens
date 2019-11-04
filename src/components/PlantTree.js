import React, { Component } from 'react'
import "../styles/PlantTree.css"



const PlantTree = () => {


    return (
        <div className="Plant-a-Tree">
                            <img className="page-leaves-left" src={require('../img/page-leaves-left/page-leaves-left.svg')} alt="leaves-left"></img>

                            <img className="page-leaves-right " src={require('../img/page-leaves-right/page-leaves-right.svg')} alt="leaves-right"></img>

                            <img className="page-tree-right" src={require('../img/page-tree-right/page-tree-right.svg')} alt="tree-right"></img>

                            <img className="page-tree-left" src={require('../img/page-tree-left/page-tree-left.svg')} alt="tree-left"></img>

            <div className="I">Lorem ipsum dolor sit amet, consectetur.</div>
            <div className="II">Lorem ipsum dolor sit amet, consectetur adipiscing elit, a. . </div>
            <ul className="list">
                <li className="III">Lorem ipsum dolor sit amet, consectetur adipiscing elit,. </li>
                <li className="IV">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
                <li className="V">Lorem ipsum dolor sit amet, consectetur adipiscing elit, . </li>
                <li className="VI">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </li>
            </ul>

            <div className="RectangleAPI">
                <button className="ButtonPaT"><text className="Plant-a-tree">Plant a Tree</text></button>
            </div>

        </div>

    );
}

export default PlantTree;
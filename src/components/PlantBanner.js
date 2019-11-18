import React from 'react';
import '../styles/TreeBanner.css';

const plantBanner = () => {
    return (
        <div className="Banner-Green-rectangle">
                <img className="cta-tree-left" src={require('../img/Illustrations/CTA/PNG/cta-tree-left.png')} alt="tree"></img>
            <div className="Banner-text-all">
                <h2 className="Banner-title">Plant Your Own Tree</h2>
                <h3 className="Banner-text">Reduce your carbon input by planting a tree! By absorbing CO2 from the atmosphere, trees help to combat climate change, help to improve soils and prevent flooding and erosion.</h3>
                <a className="Banner-button" href="/PlantTree">Plant a Tree</a>
            </div>
            <img className="cta-tree-right" src={require('../img/Illustrations/CTA/PNG/cta-tree-right.png')} alt="leaves"></img>
        </div>
    )
}

export default plantBanner;
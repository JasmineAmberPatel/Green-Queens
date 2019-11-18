import React from 'react';
import '../styles/ImageCard.css'

const Photos = () => {
    return(
        <div className="Title-Page">
            <div className="Title-Rectangle">
                <h1 className="Title">Green Queens Fighting Fast Fashion.</h1>
            </div>
            <div className="Photo-cards">  
                <div className="Photos">
                    <img className="jumper" src={require('../img/Jumper.jpg')} alt="jumper" ></img>
                    <h4 className="fact">The fast fashion industry produces 97% of our clothes overseas.</h4>
                    <h4 className="caption">Jumpers<br className="space"/><div className="heart">♥</div></h4>
                </div>
                <div className="Photos">
                    <img className="shirt" src={require('../img/Shirt.jpg')} alt="shirt"></img>
                    <h4 className="fact">A single t-shirt takes 2,700 liters of water to make. The same amount of water an average person drinks over the course of 900 days.</h4>
                    <h4 className="caption">Shirts<br className="space"/><div className="heart">♥</div></h4>
                </div>
                <div className="Photos">
                    <img className="dress" src={require('../img/dress.jpg')} alt="dress"></img>
                    <h4 className="fact">Synthetic fibres from clothing make up 75% of microplastics in the ocean.</h4>
                    <h4 className="caption">Dresses<br className="space"/><div className="heart">♥</div></h4>
                </div>
                <div className="Photos">
                    <img className="trainer" src={require('../img/Trainers.jpg')} alt="trainers"></img>
                    <h4 className="fact">The fast fashion industry emits 1.2 billion tons of CO2 per year.</h4>
                    <h4 className="caption">Shoes<br className="space"/><div className="heart">♥</div></h4>
                </div>
                <div className="Photos">
                    <img className="jeans" src={require('../img/Jeans.jpg')} alt="jeans"></img>
                    <h4 className="fact">The fast fashion industry is responsible for producing 20% of global wastewater.</h4>
                    <h4 className="caption">Jeans<br className="space"/><div className="heart">♥</div></h4>
                </div>
            </div>
            <h3 className="Photo-cards-facts">Visit the facts page to learn more.</h3>
        </div>
    )
}

export default Photos;

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
                    <h4><b>Jumpers</b></h4>
                </div>
                <div className="Photos">
                    <img className="dress" src={require('../img/dress.jpg')} alt="dress"></img>
                    <h4><b>Dresses</b></h4>
                </div>
                <div className="Photos">
                    <img className="trainer" src={require('../img/Trainers.jpg')} alt="trainers"></img>
                    <h4><b>Trainers</b></h4>
                </div>
                <div className="Photos">
                    <img className="jeans" src={require('../img/Jeans.jpg')} alt="jeans"></img>
                    <h4><b>Jeans</b></h4>
                </div>
            </div>
        </div>
    )
}

export default Photos;
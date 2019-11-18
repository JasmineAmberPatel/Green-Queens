import React from 'react';

import '../styles/reforestation.css'

const reforestation = () => {
    return(
        <div className="reforestation-projects">
                <div className="Project">
                <h4 className="location">Brazil</h4>
                    <img className="Forest-image" src={require('../img/Brazil.png')} alt="Brazil" ></img>
                    <h4 className="Project-Info">Our Brazil project is located in the state of Sao Paulo in the 60 million-year-old Atlantic Forest. The forest spans across the eastern coastline of Brazil, Argentina, and Paraguay and is one of the world’s top five biodiversity hotspots, despite losing 85% of its original vegetation. The remaining forest is in far greater danger of disappearing than the more renowned Amazon Rainforest.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/brazil" target="_blank">Read more here</a>
                </div>
                <div className="Project">
                    <h4 className="location">Dominican Republic</h4>
                    <img className="Forest-image" src={require('../img/Dominican-Republic.png')} alt="Dominican Republic"></img>
                    <h4 className="Project-Info">Deforestation and poverty are devastating global problems which can’t be solved in isolation. Desperate to feed their families, poor farmers in many parts of the world are driven to cut down trees for immediate survival despite the horrible disasters that result: farms become wasteland, springs dry up, flooding and landslides ensue, and the land is utterly depleted for future generations.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/dominican" target="_blank">Read more here</a>
                </div>
                <div className="Project">
                    <h4 className="location">India</h4>
                    <img className="Forest-image" src={require('../img/India.png')} alt="India"></img>
                    <h4 className="Project-Info">Located in a little known state in north east India called Meghalaya (‘The Abode of the Clouds’ in Sanskrit) the East Khasi Hills form part of the Meghalaya subtropical forests ecoregion. Mining has degraded the ancient biodiverse forest. The indigenous Khasi people who are at the heart of this project are actively restoring the landscape to the native biodiverse forest, whilst helping to mitigate climate change through sequestration of carbon in forest ecosystems.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/india" target="_blank">Read more here</a>
                </div>
                <div className="Project">
                    <h4 className="location">Ireland</h4>
                    <img className="Forest-image" src={require('../img/Ireland.png')} alt="Ireland"></img>
                    <h4 className="Project-Info">With native woodland circa at 1% of the surface area of Ireland, it has become vitally important not only to create new native woodlands for the future, but also to link existing fragments of native and or ancient planted woodlands as wildlife corridors.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/ireland" target="_blank">Read more here</a>
                </div>
                <div className="Project">
                    <h4 className="location">Madagascar</h4>
                    <img className="Forest-image" src={require('../img/Madagascar.png')} alt="Madagascar"></img>
                    <h4 className="Project-Info">Madagascar, due to its isolation from the rest of the world, has tremendous biodiversity and high rates of endemic species. 80% of the species of Madagascar are endemic to that country. That constitutes 200,000 species that exist nowhere else on earth.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/madagascar" target="_blank">Read more here</a>
                </div>
                <div className="Project">
                    <h4 className="location">Mexico</h4>
                    <img className="Forest-image" src={require('../img/Mexico.png')} alt="Mexico"></img>
                    <h4 className="Project-Info">Deforestation and poverty are devastating global problems which can’t be solved in isolation. Desperate to feed their families, poor farmers in Oaxaca and Chiapas, Mexico are driven to cut down trees for immediate survival despite the horrible disasters that result: farms become wasteland, springs dry up, flooding and landslides ensue, and the land is utterly depleted for future generations.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/mexico" target="_blank">Read more here</a>
                </div>
                <div className="Project">
                    <h4 className="location">United States</h4>
                    <img className="Forest-image" src={require('../img/United-States.png')} alt="United States"></img>
                    <h4 className="Project-Info">Located in South Dakota, the Pine Ridge Indian Reservation is an Oglala Lakota Native American Reservation encompassing 3,468.85 square miles and is the eighth-largest reservation in the United States, larger than Delaware and Rhode Island combined.</h4>
                    <a style={{display: "table-cell"}} href="https://printreleaf.com/projects/us" target="_blank">Read more here</a>
                </div>
        </div> 
    )
}

export default reforestation;

import React from "react";
import "../styles/TreeBanner.css";
import { withRouter } from "react-router";

const LinkButtonComp = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    ...rest
  } = props;
  return (
    <button
      {...rest} // `children` is just another prop!
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

const LinkButton = withRouter(LinkButtonComp);

const plantBanner = () => {
  return (
    <div className="Banner-Green-rectangle">
      <img
        className="cta-tree-left"
        src={require("../img/Illustrations/CTA/PNG/cta-tree-left.png")}
        alt="tree"
      ></img>
      <div className="Banner-text-all">
        <h2 className="Banner-title">Plant Your Own Tree</h2>
        <h3 className="Banner-text">
          Reduce your carbon input by planting a tree! By absorbing CO2 from the
          atmosphere, trees help to combat climate change, help to improve soils
          and prevent flooding and erosion.
        </h3>
        <LinkButton className="Banner-button" to="/PlantTree">
          Plant a Tree
        </LinkButton>
      </div>
      <img
        className="cta-tree-right"
        src={require("../img/Illustrations/CTA/PNG/cta-tree-right.png")}
        alt="leaves"
      ></img>
    </div>
  );
};

export default plantBanner;
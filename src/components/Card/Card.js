import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.name} src={require("../../images/" + props.image)} value={props.clicked}/>
    </div>
  </div> 
);

export default Card;
import React from "react";
import "../css/Card.css"

const Card = (props) => {
  return (
    <>
      <div className="card-container">
        <img src={props.image} alt="" />
        <h2>{props.title}</h2>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import "./Features.css";

const FeatureCard = (props) => {
  const borderstyle = {
    borderColor : props.color,
  };
  const mystyle = {
    backgroundColor: props.color,
  };
  return (
    <>
      <div class="card mb-3 card-main" style={borderstyle}>
        <div className="imgproduct" style={mystyle}>
        <img class="card-img-top" src={props.imgPath} alt="Card image cap" />
        </div>
        <div class="card-body">
          <h3 class="card-title">{props.title}</h3>
          <p class="card-text">
          {props.text}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;

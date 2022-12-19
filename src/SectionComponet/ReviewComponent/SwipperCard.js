import React from "react";
import "./ReviewHome.css";

const SwipperCard = (props) => {
  return (
    <>
      <div class="card mb-3 card-main">
        <div className="swipper">
          <div class="card-body">
          <p class="">{props.desc}</p>
            <h3 class="card-title">{props.title}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SwipperCard;

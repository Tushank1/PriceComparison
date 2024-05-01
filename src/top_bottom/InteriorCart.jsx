import React from "react";
import "./HomeInterior.css";

function InteriorCart({ id, name, img, sub1, sub2, sub3, sub4, sub5 }) {
  return (
    <div className="productCart">
      <div className="image">
        <img src={img} alt="" />
      </div>
      <div className="otherMaterial">
        <h2>{name}</h2>
        <li>{sub1}</li>
        <li>{sub2}</li>
        <li>{sub3}</li>
        <li>{sub4}</li>
        <li>{sub5}</li>
      </div>
    </div>
  );
}

export default InteriorCart;

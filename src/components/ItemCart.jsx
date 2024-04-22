import React from "react";
import "./ItemCart.css";
import { LuHeart } from "react-icons/lu";
import { GrStar } from "react-icons/gr";
import { LuEuro } from "react-icons/lu";

function ItemCart({ id, name, price, img, rating }) {
  return (
    <>
      <div className="cart">
        <img src={img} alt="" />
        <div className="text">
          <span>200+watching</span>
          <LuHeart className="heart" />
        </div>
        <div className="detail">
          <div className="name">
            <span>{name.slice(0, 55)}</span>
          </div>
          <div className="extra">
            <div className="other_stuff">
              <LuEuro className="euro" />
              <span>{price}</span>
            </div>
            <div className="rating">
              <GrStar className="star" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;

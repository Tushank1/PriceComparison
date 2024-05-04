import React from "react";
import "./Cart.css";
import { LuHeart } from "react-icons/lu";
import { GrStar } from "react-icons/gr";
import { LuEuro } from "react-icons/lu";

function Cart({ id, name, price, img, rating }) {
  return (
    <>
      <div className="productcart">
        <img src={img} alt="" />
        <div className="producttext">
          <span>200+watching</span>
          <LuHeart className="productheart" />
        </div>
        <div className="productdetail">
          <div className="productname">
            <span>{name.slice(0, 55)}</span>
          </div>
          <div className="productextra">
            <div className="productother_stuff">
              <LuEuro className="producteuro" />
              <span>{price}</span>
            </div>
            <div className="productrating">
              <GrStar className="productstar" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;

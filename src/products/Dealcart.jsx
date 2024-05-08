import React from "react";
import { LuHeart } from "react-icons/lu";
import { GrStar } from "react-icons/gr";
import { LuEuro } from "react-icons/lu";
import "./DealCart.css";

function Dealcart({ id, name, price, img, rating }) {
  return (
    <>
      <div className="dealcart">
        <img src={img} alt="" />
        <div className="dealtext">
          <span>200+watching</span>
          <LuHeart className="dealheart" />
        </div>
        <div className="dealdetail">
          <div className="dealname">
            <span>{name.slice(0, 55)}</span>
          </div>
          <div className="dealextra">
            <div className="dealother_stuff">
              <LuEuro className="dealeuro" />
              <span>{price}</span>
            </div>
            <div className="dealrating">
              <GrStar className="dealstar" />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dealcart;

import React, { useState } from "react";
import "./ItemCart.css";
import { LuHeart } from "react-icons/lu";
import { GrStar } from "react-icons/gr";
import { LuEuro } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function ItemCart({ id, name, price, img, rating }) {
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState([]);

  const handleClick = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/product/${id}`);
      const data = response;
      setProductDetails(data);
      // console.log(data);
      navigate(`/product?id=${id}`);
    } catch (error) {
      console.log("Failed to fetch product details:", error);
    }
  };

  return (
    <>
      <div className="cart" onClick={handleClick}>
        <img src={img} alt={`Image of ${name}`} />
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

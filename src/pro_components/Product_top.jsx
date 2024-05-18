import React from "react";
import "./Product_top.css";
import { BsSlashLg } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { GrStar } from "react-icons/gr";
import { LuPencilLine } from "react-icons/lu";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { RxDotsVertical } from "react-icons/rx";
import PriceComparison from "./PriceComparison.jsx";
import { useNavigate } from "react-router-dom";
// import Product_bottom from "./Product_bottom.jsx";

function Product_top({ item }) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        {item ? (
          <div className="top">
            <div className="heading_head">
              <span onClick={() => navigate("/")}>Start</span>
              <BsSlashLg className="icon" />
              <span onClick={() => navigate("/phones&Wearables")}>
                Phone & Wearables
              </span>
              <BsSlashLg className="icon" />
              <span>Mobile Phones</span>
            </div>
            <div className="bottom">
              <div className="image">
                <div className="side_img">
                  <img src={item.img} alt="" />
                </div>
                <div className="center_img">
                  <img src={item.img} alt="" />
                  <div className="stuff">
                    <div className="text">
                      <span>200+ watching</span>
                    </div>
                    <div className="icon">
                      <FaRegHeart className="change" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="name">
                  <h2>{item.name}</h2>
                </div>
                <div className="function">
                  <div className="rating">
                    <GrStar className="star" />
                    <span>{item.rating}</span>
                  </div>
                  <RxDotsVertical />
                  <div className="rate">
                    <LuPencilLine />
                    <span>Rate</span>
                  </div>
                  <RxDotsVertical />
                  <div className="alert">
                    <HiOutlineBellAlert />
                    <span>Price alert</span>
                  </div>
                  <RxDotsVertical />
                  <div className="compare">
                    <FaScaleUnbalanced />
                    <span>Compare</span>
                  </div>
                </div>
                <div className="description">
                  <p>
                    High performance, superior camera quality and a large
                    display–meet the iPhone 15 Pro Max.
                  </p>
                  <span>Read more</span>
                </div>
                <PriceComparison
                  priceRange={{ min: "£1,005.00", max: "£2,038.53" }}
                  popularity={{ rank: "1", category: "Mobile Phones" }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div>Error</div>
        )}
      </div>
    </>
  );
}

export default Product_top;

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

function Product_top() {
  return (
    <div>
      <div className="top">
        <div className="heading_head">
          <span>Start</span>
          <BsSlashLg className="icon" />
          <span>Phone & Wearables</span>
          <BsSlashLg className="icon" />
          <span>Mobile Phones</span>
        </div>
        <div className="bottom">
          <div className="image">
            <div className="side_img">
              <img
                src="https://www.pricerunner.com/product/252x252/3013982814/Apple-iPhone-15-Pro-Max-256GB.jpg?ph=true&fmt=avif"
                alt=""
              />
            </div>
            <div className="center_img">
              <img
                src="https://www.pricerunner.com/product/252x252/3013982814/Apple-iPhone-15-Pro-Max-256GB.jpg?ph=true&fmt=avif"
                alt=""
              />
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
              <h2>Apple iPhone 15 Pro Max 256GB</h2>
            </div>
            <div className="function">
              <div className="rating">
                <GrStar className="star" />
                <span>4.5</span>
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
    </div>
  );
}

export default Product_top;

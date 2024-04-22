import React from "react";
import "./Banner.css";
import { RiArrowRightLine } from "react-icons/ri";

function Banner() {
  return (
    <div className="banner">
      <img
        src="https://images.ctfassets.net/31h9ykss8g0q/3N0gB1Pi4muv7JYZ78eGHJ/90a7e828eff4e46a97e48078f6594150/PriceRunner_Web_header_Trendy_shoes-24.jpg?w=1728&q=80&fm=avif"
        alt=""
      />
      <div className="text">
        <div className="heading">
          <h1>This year's trendiest trainers</h1>
        </div>
        <div className="para">
          <p>Take a look at most popular picks of 2024</p>
        </div>
      </div>
      <div className="icon">
        <RiArrowRightLine />
      </div>
    </div>
  );
}

export default Banner;

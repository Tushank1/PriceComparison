import React from "react";
import "./Banner_2.css";
import { RiArrowRightLine } from "react-icons/ri";

function Banner_2() {
  return (
    <div className="banner_2">
      <img
        src="https://images.ctfassets.net/31h9ykss8g0q/2QStWVHTgIjJdgGxbWrU4R/2318b40b8434309fb706cbb99dbd5886/apple-news.jpg?w=1728&q=80&fm=avif"
        alt=""
      />
      <div className="text">
        <div className="heading">
          <h1>News from Apple</h1>
        </div>
        <div className="para">
          <p>
            "Whether you're a big Apple fan or just appreciate the brand's
            simple design and great products, then this is the page for you!
            Read all about the latests Apple news and rumours - all in one
            place."Take a look at most popular picks of 2024
          </p>
        </div>
      </div>
      <div className="icon">
        <RiArrowRightLine />
      </div>
    </div>
  );
}

export default Banner_2;

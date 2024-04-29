import React from "react";
import "./how_to_use.css";
import { useState } from "react";
import Compare from "../content.jsx/Compare";
import Default from "../content.jsx/Default";
import Guide from "../content.jsx/Guide";
import Tips from "../content.jsx/Tips";
import Subscribe from "../content.jsx/Subscribe";

function HowToUse() {
  // Define state for content
  const [currentContent, setCurrentContent] = useState("content1");
  const [selectedSpan, setSelectedSpan] = useState("");

  // Function to change the content
  const showContent1 = () => {
    setCurrentContent("content1");
    setSelectedSpan("content1");
  };
  const showContent2 = () => {
    setCurrentContent("content2");
    setSelectedSpan("content2");
  };
  const showContent3 = () => {
    setCurrentContent("content3");
    setSelectedSpan("content3");
  };
  const showContent4 = () => {
    setCurrentContent("content4");
    setSelectedSpan("content4");
  };
  const showContent5 = () => {
    setCurrentContent("content5");
    setSelectedSpan("content5");
  };

  // Conditional rendering based on state
  const renderContent = () => {
    switch (currentContent) {
      case "content1":
        return <Default />;
      case "content2":
        return <Compare />;
      case "content3":
        return <Guide />;
      case "content4":
        return <Tips />;
      case "content5":
        return <Subscribe />;
    }
  };

  return (
    <div className="container">
      <div className="left">
        <span
          onClick={showContent1}
          className={selectedSpan === "content1" ? "selected" : ""}
        >
          Find the right product
        </span>
        <span
          onClick={showContent2}
          className={selectedSpan === "content2" ? "selected" : ""}
        >
          Compare prices
        </span>
        <span
          onClick={showContent3}
          className={selectedSpan === "content3" ? "selected" : ""}
        >
          Guides & shopping tips
        </span>
        <span
          onClick={showContent4}
          className={selectedSpan === "content4" ? "selected" : ""}
        >
          6 tips: Make your online shopping climate-friendly
        </span>
        <span
          onClick={showContent5}
          className={selectedSpan === "content5" ? "selected" : ""}
        >
          Subscribe to our newsletter
        </span>
      </div>
      <div className="right">{renderContent()}</div>
    </div>
  );
}

export default HowToUse;

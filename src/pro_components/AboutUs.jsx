import React from "react";
import "./AboutUs.css";
import SelfUs from "../about_content/SelfUs";
import History from "../about_content/History";
import Guidelines from "../about_content/Guidelines";
import Contact from "../about_content/Contact";
import Management from "../about_content/Management";
import Owner from "../about_content/Owner";
import { useState } from "react";

function AboutUs() {
  const [currentContent, setCurrentContent] = useState("content1");
  const [selectedSpan, setSelectedSpan] = useState("content1");

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
  const showContent6 = () => {
    setCurrentContent("content6");
    setSelectedSpan("content6");
  };

  // Conditional rendering based on state
  const renderContent = () => {
    switch (currentContent) {
      case "content1":
        return <SelfUs />;
      case "content2":
        return <History />;
      case "content3":
        return <Guidelines />;
      case "content4":
        return <Contact />;
      case "content5":
        return <Management />;
      case "content6":
        return <Owner />;
    }
  };

  return (
    <div className="about_container">
      <div className="left">
        <span
          onClick={showContent1}
          className={selectedSpan === "content1" ? "selected" : ""}
        >
          About Us
        </span>
        <span
          onClick={showContent2}
          className={selectedSpan === "content2" ? "selected" : ""}
        >
          History
        </span>
        <span
          onClick={showContent3}
          className={selectedSpan === "content3" ? "selected" : ""}
        >
          Sustainability and guidelines
        </span>
        <span
          onClick={showContent4}
          className={selectedSpan === "content4" ? "selected" : ""}
        >
          Contact us
        </span>
        <span
          onClick={showContent5}
          className={selectedSpan === "content5" ? "selected" : ""}
        >
          Management
        </span>
        <span
          onClick={showContent6}
          className={selectedSpan === "content6" ? "selected" : ""}
        >
          Owners
        </span>
      </div>
      <div className="right">{renderContent()}</div>
    </div>
  );
}

export default AboutUs;

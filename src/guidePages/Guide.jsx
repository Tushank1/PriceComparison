import React, { useState } from "react";
import { TbSlash } from "react-icons/tb";
import "./Guide.css";
import { useNavigate } from "react-router-dom";
import G_H_I from "./G_H_I";
import G_K_F from "./G_K_F";
import G_C_A from "./G_C_A";
import G_ALL from "./G_ALL";
import G_H_B from "./G_H_B";

function Guide() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("content1");

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    switch (selectedCategory) {
      case "Home & Interior":
        setCurrentPage("content2");
        break;
      case "Kids & Family":
        setCurrentPage("content3");
        break;
      case "Clothing & Accessories":
        setCurrentPage("content4");
        break;
      case "Health & Beauty":
        setCurrentPage("content5");
        break;
      default:
        setCurrentPage("content1");
    }
  };

  const renderContent = () => {
    switch (currentPage) {
      case "content1":
        return <G_ALL />;
      case "content2":
        return <G_H_I />;
      case "content3":
        return <G_K_F />;
      case "content4":
        return <G_C_A />;
      case "content5":
        return <G_H_B />;
    }
  };

  return (
    <div className="guidefull">
      <div className="guidetop">
        <span className="guide_start" onClick={() => navigate("/")}>
          Start
        </span>
        <TbSlash className="guideIcon" />
        <span className="guide_guide">Guides</span>
      </div>
      <div className="guide_head">
        <div className="guide_heading">
          <h1>Guides</h1>
        </div>
        <div className="guide_para">
          <p>
            Here is where we gather tips, instructions, lists and step-by-step
            manuals that collectively make the best guides in all areas
            imaginable.
          </p>
        </div>
        <div className="guide_select">
          <select name="category" id="category" onChange={handleCategoryChange}>
            <option value="Choose category">Choose category</option>
            <option value="Home & Interior">Home & Interior</option>
            <option value="Kids & Family">Kids & Family</option>
            <option value="Clothing & Accessories">
              Clothing & Accessories
            </option>
            <option value="Health & Beauty">Health & Beauty</option>
          </select>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

export default Guide;

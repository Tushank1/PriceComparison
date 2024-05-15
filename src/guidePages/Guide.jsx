import React from "react";
import { TbSlash } from "react-icons/tb";
import "./Guide.css";
import { useNavigate } from "react-router-dom";
import G_H_I from "../Data/G_H&I";

function Guide() {
  const navigate = useNavigate();

  const Data = () => {};
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
          <select name="category" id="category">
            <option value="Choose category">Choose category</option>
            <option value="Home & Interior">Home & Interior</option>
            <option value="Kids & Family">Kids & Family</option>
            <option value="Clothing & Accessories">
              Clothing & Accessories
            </option>
          </select>
        </div>
        {/* <div className="guide_H_I">
          <h2>Home & Interior</h2>
          <div className="guide_cart">
            <div
              className="guide_H_I_content"
              onClick={() => navigate("/first")}
            >
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>
                By <span>Zara Andrén</span>
              </span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
          </div>
        </div>
        <div className="guide_H_I">
          <h2>kids & Family</h2>
          <div className="guide_cart">
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div>
            <div className="guide_H_I_content">
              <img
                src="https://www.pricerunner.com/images/assets/content/bit/board/uk_pricerunner_airfryer_creative-recipies_og.jpeg?d=410x230"
                alt=""
              />
              <h3>Unexpected Air Fryer Recipes</h3>
              <span>By Zara Andrén</span>
            </div> */}
        {/* </div> */}
        {/* </div> */}
        <div className="guide_H_I">
          {G_H_I.map((val, index) => {
            return (
              <div key={index}>
                <div className="guide_H_I_content">
                  <img src={val.img} />
                  <h5>{val.heading}</h5>
                  <span>
                    By <span>{val.name}</span>
                  </span>
                  <p>{val.desc.slice(0, 89) + "..."}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Guide;

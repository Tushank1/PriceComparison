import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  // const [isArrowRotated, setIsArrowRotated] = useState(false);
  const location = useLocation();

  const isArrowRotated = location.pathname === "/categories";

  return (
    <div className="header">
      <div className="header_left">
        <div className="logo">
          <span>Klarna</span>
        </div>
        <div className="logo_text">
          <span>PriceCompare</span>
        </div>
      </div>

      <div className="header_center">
        <div className="header_element">
          <div
            className="special"
            onClick={() => {
              if (isArrowRotated) {
                navigate("/");
              } else {
                navigate("/categories");
              }
              // Toggle the rotation state regardless of the current state
              // setIsArrowRotated(!isArrowRotated);
            }}
          >
            <span>All categories</span>
            <img
              src="/arrowDown.png"
              alt="ArrowDown"
              className={isArrowRotated ? "rotated" : ""}
            />
          </div>
        </div>
        <div className="header_element">
          <span>Expert reviews</span>
        </div>
        <div className="header_element">
          <span>Sales</span>
        </div>
        <div className="header_element">
          <span>Guides</span>
        </div>
        <div className="header_element">
          <span
            onClick={() => {
              navigate("/info");
            }}
          >
            How to use{" "}
          </span>
        </div>
        <div className="header_element">
          <span
            onClick={() => {
              navigate("/about");
            }}
          >
            About us
          </span>
        </div>
      </div>

      <div className="header_right">
        <div className="searchbar">
          <img src="/search.png" alt="Search Icon" />
          <input type="text" placeholder="Search Products..." />
        </div>
        <div className="Signin">
          <span>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

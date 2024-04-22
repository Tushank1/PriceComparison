import React from "react";
import "./Header.css";

function Header() {
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
          <div className="special">
            <span>All categories</span>
            <img src="/arrowDown.png" alt="ArrowDown" />
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
          <span>How to use </span>
        </div>
        <div className="header_element">
          <span>About us</span>
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

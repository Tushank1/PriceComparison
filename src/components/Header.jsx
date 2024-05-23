import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { logOut } from "../feature/userSlice";
import { auth } from "../firebase";

function Header() {
  const navigate = useNavigate();
  // const [isArrowRotated, setIsArrowRotated] = useState(false);
  const location = useLocation();

  const isArrowRotated = location.pathname === "/categories";

  const dispatch = useDispatch();

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(logOut());
    });
  };

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
            <FaAngleDown
              className={isArrowRotated ? "rotated" : "" || "arrow"}
            />
          </div>
        </div>
        <div className="header_element">
          <span>Expert reviews</span>
        </div>
        <div className="header_element">
          <span onClick={() => navigate("/deal")}>Sales</span>
        </div>
        <div className="header_element">
          <span onClick={() => navigate("/guide")}>Guides</span>
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
          <IoSearch className="searchIcon" />
          <input type="text" placeholder="Search Products..." />
        </div>
        <div className="Signin" onClick={signOut}>
          <span>Sign out</span>
        </div>
      </div>
    </div>
  );
}

export default Header;

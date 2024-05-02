import React from "react";
import "./HomeInterior.css";
import { RxSlash } from "react-icons/rx";
import InteriorCart from "./InteriorCart";
import { useLocation, useNavigate } from "react-router-dom";

function Soundvision({ vision }) {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;

  return (
    <div className="all">
      <div className="head">
        <span
          className="start"
          onClick={() => {
            navigate("/");
          }}
        >
          Start
        </span>
        <RxSlash className="slash" />
        <span>{title}</span>
      </div>
      <div className="main">
        <h1>{title}</h1>
        <div className="mainCart">
          {vision?.map((interior) => {
            return (
              <InteriorCart
                key={interior.id}
                id={interior.id}
                name={interior.name}
                img={interior.img}
                sub1={interior.sub1}
                sub2={interior.sub2}
                sub3={interior.sub3}
                sub4={interior.sub4}
                sub5={interior.sub5}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Soundvision;

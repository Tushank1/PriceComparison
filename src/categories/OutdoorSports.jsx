import React from "react";
import InteriorCart from "../top_bottom/InteriorCart";
import Sports from "../Data/Sports";
import "./IconContent.css";
import { MdCancel } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

function OutdoorSports() {
  const navigate = useNavigate();
  const location = useLocation();
  const title = location.state?.title;

  return (
    <div className="allcontent">
      <div className="main">
        <h1
          onClick={() => {
            navigate("/sportsOutdoor", {
              state: { title: "Sports & Outdoor" },
            });
          }}
        >
          Sports & Outdoor
        </h1>
        <div className="cancel">
          <MdCancel
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
      <div className="mainCart">
        {Sports?.map((interior) => {
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
  );
}

export default OutdoorSports;

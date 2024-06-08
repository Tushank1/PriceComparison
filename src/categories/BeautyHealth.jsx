import React, { useState, useEffect } from "react";
import InteriorCart from "../top_bottom/InteriorCart";
import "./IconContent.css";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BeautyHealth() {
  const navigate = useNavigate();
  const [health, setHealth] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/health&Beauty");
        const data = await response.json();
        setHealth(data);
      } catch (error) {
        console.log("Error fetchinf data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="allcontent">
      <div className="main">
        <h1
          onClick={() => {
            navigate("/health&Beauty", {
              state: { title: "Health & Beauty" },
            });
          }}
        >
          Health & Beauty
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
        {health?.map((interior) => {
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

export default BeautyHealth;

import React, { useState, useEffect } from "react";
import InteriorCart from "../top_bottom/InteriorCart";
import "./IconContent.css";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function EntertainmentGaming() {
  const navigate = useNavigate();
  const [gaming, setGaming] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/gaming&Entertainment"
        );
        const data = response.data;
        setGaming(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="allcontent">
      <div className="main">
        <h1
          onClick={() => {
            navigate("/gaming&Entertainment", {
              state: { title: "Gaming & Entertainment" },
            });
          }}
        >
          Gaming & Entertainment
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
        {gaming?.map((interior) => {
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

export default EntertainmentGaming;

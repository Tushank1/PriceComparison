import React, { useState, useEffect } from "react";
import InteriorCart from "../top_bottom/InteriorCart";
import "./IconContent.css";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function HobbiesToys() {
  const navigate = useNavigate();
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/toys&Hobbie");
        const data = response.data;
        setToys(data);
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
            navigate("/toys&Hobbies", {
              state: { title: "Toys & Hobbies" },
            });
          }}
        >
          Toys & Hobbies
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
        {toys?.map((interior) => {
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

export default HobbiesToys;

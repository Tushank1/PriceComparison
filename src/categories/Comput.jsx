import React from "react";
import InteriorCart from "../top_bottom/InteriorCart";
import Computing from "../Data/Computing";
import "./IconContent.css";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Comput() {
  const navigate = useNavigate();

  return (
    <div className="allcontent">
      <div className="main">
        <h1
          onClick={() => {
            navigate("/computing", {
              state: { title: "Computing" },
            });
          }}
        >
          Computing
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
        {Computing?.map((interior) => {
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

export default Comput;
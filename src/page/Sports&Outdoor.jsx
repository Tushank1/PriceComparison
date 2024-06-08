import React, { useState, useEffect } from "react";
import Outdoor from "../top_bottom/Outdoor";

function SportsOutdoor() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/sports&Outdoor");
        const data = await response.json();
        setSports(data);
      } catch (error) {
        console.log("Error fetchinf data:", error);
      }
    };
    fetchData();
  }, []);
  return <Outdoor sports={sports} />;
}

export default SportsOutdoor;

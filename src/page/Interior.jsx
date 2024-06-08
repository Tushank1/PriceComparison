import React, { useEffect } from "react";
import HomeInterior from "../top_bottom/HomeInterior";
import { useState } from "react";

function Interior() {
  const [Interior, setInterior] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/home&Interior");
        const data = await response.json();
        setInterior(data);
      } catch (error) {
        console.log("Error fetchind data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HomeInterior InteriorData={Interior} />
    </>
  );
}

export default Interior;

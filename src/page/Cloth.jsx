import React, { useState, useEffect } from "react";
import ClothingAccessories from "../top_bottom/ClothingAccessories";

function Cloth() {
  const [cloth, setcloth] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/clothing&Accessories"
        );
        const data = await response.json();
        setcloth(data);
      } catch (error) {
        console.log("Error fetchinf data:", error);
      }
    };
    fetchData();
  }, []);
  return <ClothingAccessories clothing={cloth} />;
}

export default Cloth;

import React, { useState, useEffect } from "react";
import Health from "../top_bottom/HealthBeauty";

function HealthBeauty() {
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
  return <Health Beauty={health} />;
}

export default HealthBeauty;

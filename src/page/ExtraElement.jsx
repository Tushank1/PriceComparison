import React, { useState, useEffect } from "react";
import Element from "../top_bottom/Element";

function ExtraElement() {
  const [yourself, setYourself] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/doItYourself");
        const data = await response.json();
        setYourself(data);
      } catch (error) {
        console.log("Error fetchinf data:", error);
      }
    };
    fetchData();
  }, []);
  return <Element extra={yourself} />;
}

export default ExtraElement;

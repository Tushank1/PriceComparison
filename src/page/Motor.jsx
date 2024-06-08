import React, { useState, useEffect } from "react";
import MotorTransport from "../top_bottom/MotorTransport";

function Motor() {
  const [motor, setMotor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/motorTransport");
        const data = await response.json();
        setMotor(data);
      } catch (error) {
        console.log("Error fetchinf data:", error);
      }
    };
    fetchData();
  }, []);
  return <MotorTransport transport={motor} />;
}

export default Motor;

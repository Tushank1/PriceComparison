import React, { useEffect, useState } from "react";
import PhoneWearable from "../top_bottom/PhoneWearable";

function Wearables() {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/phone&Wearables");
        const data = await response.json();
        setPhone(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <PhoneWearable phone={phone} />;
}

export default Wearables;

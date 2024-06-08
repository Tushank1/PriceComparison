import React, { useEffect, useState } from "react";
import Entertainment from "../top_bottom/GamingEntertainment";
import axios from "axios";

function GamingEntertainment() {
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

  return <Entertainment game={gaming} />;
}

export default GamingEntertainment;

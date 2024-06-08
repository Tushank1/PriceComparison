import React, { useEffect, useState } from "react";
import KidFamily from "../top_bottom/Kids";
import axios from "axios";

function KidsFamily() {
  const [kids, setkids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/kids&Family");
        const data = response.data;
        setkids(data);
      } catch (error) {
        console.log("Error fetchind data:", error);
      }
    };

    fetchData();
  }, []);

  return <KidFamily family={kids} />;
}

export default KidsFamily;

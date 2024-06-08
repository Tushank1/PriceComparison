import React, { useEffect, useState } from "react";
import Computer from "../top_bottom/Computer";

function Computing() {
  const [computing, setComputing] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/computing");
        const data = await response.json();
        setComputing(data);
      } catch (error) {
        console.log("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);

  return <Computer Comput={computing} />;
}

export default Computing;

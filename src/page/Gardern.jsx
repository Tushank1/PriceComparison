import React, { useEffect, useState } from "react";
import GardernPatio from "../top_bottom/GardernPatio";
import axios from "axios";

function Patio() {
  const [Gardern, setGardern] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/gardern&Patio");
        const data = response.data;
        setGardern(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <GardernPatio GardernPatio={Gardern} />
    </>
  );
}

export default Patio;

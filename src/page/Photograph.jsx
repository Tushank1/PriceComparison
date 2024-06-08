import React, { useEffect, useState } from "react";
import Photo from "../top_bottom/Photo";

function Photograph() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/photography");
        const data = await response.json();
        setPhoto(data);
      } catch (error) {
        console.log("Error fetchinf data:", error);
      }
    };
    fetchData();
  }, []);

  return <Photo pic={photo} />;
}

export default Photograph;

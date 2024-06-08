import React, { useEffect, useState } from "react";
import Soundvision from "../top_bottom/SoundVision";

function Vision() {
  const [sound, setSound] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/sound&Vision");
        const data = await response.json();
        setSound(data);
      } catch (error) {
        console.log("Error fetcchind data:", error);
      }
    };
    fetchData();
  }, []);

  return <Soundvision vision={sound} />;
}

export default Vision;

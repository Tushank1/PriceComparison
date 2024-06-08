import React, { useEffect, useState } from "react";
import ToyHobbie from "../top_bottom/ToyHobbie";
import axios from "axios";

function ToysHobbies() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/toys&Hobbie");
        const data = response.data;
        setToys(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <ToyHobbie Hobbie={toys} />;
}

export default ToysHobbies;

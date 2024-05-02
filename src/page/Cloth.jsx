import React from "react";
import Clothing from "../Data/Clothing";
import ClothingAccessories from "../top_bottom/ClothingAccessories";

function Cloth() {
  return <ClothingAccessories clothing={Clothing} />;
}

export default Cloth;

import React from "react";
import phoneWearables from "../Data/PhoneWearables";
import PhoneWearable from "../top_bottom/PhoneWearable";

function Wearables() {
  return <PhoneWearable phone={phoneWearables} />;
}

export default Wearables;

import React from "react";
import "./PriceComparison.css";

function PriceComparison({ priceRange, popularity }) {
  return (
    <div className="price">
      <p>
        Compare prices from{" "}
        <span className="price-range"> {priceRange.min}</span> to
        <span className="price-range"> {priceRange.max} .</span>
      </p>
      <p>
        Popularity <span className="popularity-rank">{popularity.rank}</span> to{" "}
        <span className="popularity-category">{popularity.category}</span>
      </p>
    </div>
  );
}

export default PriceComparison;

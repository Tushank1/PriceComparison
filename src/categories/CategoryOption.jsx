import React from "react";
import "./CategoryOption.css";

function CategoryOption({ Icon, title, onClick }) {
  return (
    <div className="CategoryOption" onClick={onClick}>
      {Icon && <Icon className="categoryOption_icon" />}
      <h5 className="categoryOption_title">{title}</h5>
    </div>
  );
}

export default CategoryOption;

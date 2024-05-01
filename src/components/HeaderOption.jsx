import React from "react";
import "./HeaderOption.css";

function HeaderOption({ Icon, title, onClick }) {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;

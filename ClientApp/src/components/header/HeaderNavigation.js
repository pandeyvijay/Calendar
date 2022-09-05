import React from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const HeaderNavigation = () => {
  return (
    <div className="header-middle-section">
      <button className="btn">Today</button>
      <span style={{ display: "flex", marginLeft: "1em" }}>
        <button className="nav-icon">
          <FaArrowLeft />
        </button>
        <button className="nav-icon">
          <FaArrowRight />
        </button>
      </span>
      <span className="cur-date">September 1, 2022</span>
    </div>
  );
};

export default HeaderNavigation;

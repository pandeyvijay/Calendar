import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdArrowDropDown } from "react-icons/md";
import "./header.css";
import HeaderNavigation from "./HeaderNavigation";
function Header() {
  return (
    <div className="header">
      <div className="header-left-section">
        <GiHamburgerMenu />
        <span
          style={{ marginLeft: "1em", fontSize: "140%", fontWeight: "bold" }}
        >
          Calendar
        </span>
      </div>
      <HeaderNavigation />
      <div className="header-right-section">
        <button className="btn drop-btn">
          Day <MdArrowDropDown />
        </button>
      </div>
    </div>
  );
}

export default Header;

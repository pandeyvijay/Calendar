import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";
import HeaderNavigation from "./HeaderNavigation";
import DropDown from "../../controls/dropdown";
function Header() {
  const spanDDData = [
    { id: "day", value: "Day" },
    { id: "week", value: "Week" },
    { id: "month", value: "Month" },
  ];
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
        <DropDown data={spanDDData} onChange={(value) => alert(value)} />
      </div>
    </div>
  );
}

export default Header;

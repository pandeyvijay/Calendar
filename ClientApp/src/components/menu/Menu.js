import React from "react";
import "./menu.css";
import DatePicker from "react-datepicker";
import { BsPlusCircle } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import "react-datepicker/dist/react-datepicker.css";

const Menu = () => {
  return (
    <div className="menu">
      <button className="btn create-btn">
        <div className="create-btn-content">
          <BsPlusCircle color="blue" />
          Create
          <MdArrowDropDown />
        </div>
      </button>
      <DatePicker
        selected={new Date()}
        onChange={() => {}}
        selectsRange
        inline
      />
    </div>
  );
};

export default Menu;

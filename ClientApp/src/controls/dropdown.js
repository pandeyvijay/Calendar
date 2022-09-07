import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const aStyle = {
  display: "block",
  color: "black",
  padding: "5px",
  backgroundColor: "lightgray",
};

const DDElement = ({ onChange, data }) => {
  return (
    <div
      key={data.id}
      onMouseDown={(e) => e.stopPropagation()}
      onClick={() => {
        onChange(data);
      }}
      style={aStyle}
    >
      {data.value}
    </div>
  );
};

const DropDown = ({ data, onChange, selectedVal = data[0] }) => {
  const [show, setShow] = useState(false);
  const [selectValue, setSelectedValue] = useState(selectedVal);
  const btnRef = useRef(null);
  useEffect(() => {
    const btn = btnRef.current;
    const modal = btn.nextElementSibling;
    const { height } = btn.getBoundingClientRect();
    modal.style.cssText += `top:${height}px;right:5px;`;
  }, [btnRef]);

  useEffect(() => {
    const handleCLick = () => {
      setShow(false);
    };
    document.addEventListener("mousedown", handleCLick);
    return () => {
      document.removeEventListener("mousedown", handleCLick);
    };
  });

  const onClick = (e) => {
    e.stopPropagation();
    setShow((sh) => !sh);
  };
  return (
    <div style={{ position: "relative" }}>
      <button ref={btnRef} onMouseDown={onClick} className="btn drop-btn">
        {selectValue.value} <MdArrowDropDown />
      </button>
      <div
        className="drop-down-modal"
        style={{ display: show ? "block" : "none" }}
      >
        {data.map((d) => (
          <DDElement
            onChange={(data) => {
              onChange(data.id);
              setSelectedValue(data);
              setShow(false);
            }}
            data={d}
          />
        ))}
      </div>
    </div>
  );
};

export default DropDown;

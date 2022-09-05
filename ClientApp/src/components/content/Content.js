import React from "react";

const TimeGrid = ({ text }) => {
  return (
    <div className="time-list">
      <div className="grid-time">
        <span> 1AM </span>
      </div>
      <div></div>
    </div>
  );
};

const CalendarGrid = () => {
  return (
    <div className="main">
      <div className="grid-container">
        <div className="grid-header">
          <div className="grid-header-left">GMT</div>
          <div className="grid-header-right">Date</div>
        </div>
        <div style={{ overflowY: "scroll" }}>
          {Array.from(new Array(12)).map((value, index) => {
            return <TimeGrid text={index + 1 + "AM"} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;

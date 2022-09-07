import React from "react";

const TimeGrid = ({ text }) => {
  return (
    <div className="time-list">
      <div className="grid-time">
        <span> {text} </span>
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
        <div style={{ overflowY: "scroll", position: "relative" }}>
          <div className="tile">My First task</div>
          {Array.from(new Array(24)).map((value, index) => {
            const time = (index + 1) % 12;
            return (
              <TimeGrid text={`${time || 12} ${time <= 12 ? "AM" : "PM"}`} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;

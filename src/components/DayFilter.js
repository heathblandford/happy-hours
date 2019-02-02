import React from "react";

const DayFilter = ({ dayChange }) => {
  return (
    <div className="dayFilter">
      <select onChange={dayChange}>
        <option value="">Pick a Day</option>
        <option value="Sunday">Sunday</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
      </select>
    </div>
  )
}

export default DayFilter;

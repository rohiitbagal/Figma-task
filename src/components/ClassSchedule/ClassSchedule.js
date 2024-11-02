import React from "react";
import "./ClassSchedule.css";

const ClassSchedule = () => {
  return (
    <div className="class-schedule-container">
      <h3>Your Class Schedule</h3>
      <div className="schedule-item">
        <p>Class 7, Science | Live Class</p>
        <p>Tuesday, 5:00 - 5:50 PM</p>
      </div>
      <div className="schedule-item">
        <p>Class 7, Science | Live Class</p>
        <p>Tuesday, 6:30 - 7:15 PM</p>
      </div>
    </div>
  );
};

export default ClassSchedule;

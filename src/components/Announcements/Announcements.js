import React from "react";
import "./Announcements.css";

const Announcements = () => {
  return (
    <div className="announcements-container">
      <h3>Announcements</h3>
      <div className="announcement">
        <p>On account of Independence Day, August 15th will be a holiday.</p>
      </div>
      <div className="announcement">
        <p>Reminder to finish your assignments and submit them by Monday.</p>
      </div>
    </div>
  );
};

export default Announcements;

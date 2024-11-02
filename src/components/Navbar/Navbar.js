// Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar({ recentClass }) {
  return (
    <div className="navbar">
      <h2>Student Portal</h2>
      <div className="user-info">
        <span>Hello, Gabrisa!</span>
        {recentClass && (
          <div className="recent-class">
            <span> {recentClass.subject}</span>
            <span> {recentClass.time}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;

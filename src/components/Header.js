import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="ConnectEd" />
      </div>
      <div className="title">Student Portal</div>
      <div className="userInfo">
        <h3>Hello, Gabrisa!</h3>
        <p>Class 7, Math + Science</p>
      </div>
    </header>
  );
};

export default Header;

// StudentPortal.js
import React from "react";
import Header from "./Header";
import Announcements from "./Announcements/Announcements";
import ClassSchedule from "./ClassSchedule/ClassSchedule";
import QuickLinks from "./QuickLinks/QuickLinks";
import ClassRecordings from "./ClassRecordings/ClassRecordings";
import "./StudentPortal.css";

const StudentPortal = () => {
  return (
    <div className="student-portal">
      <Header />
      <div className="portal-body">
        <div className="left-section">
          <Announcements />
          <ClassSchedule />
        </div>
        <div className="middle-section">
          <QuickLinks />
        </div>
        <div className="right-section">
          <ClassRecordings />
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;

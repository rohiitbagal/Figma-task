import React, { useState, useEffect } from "react";
import "./App.css";
import Announcements from "./components/Announcements/Announcements";
import ClassSchedule from "./components/ClassSchedule/ClassSchedule";
import QuickLinks from "./components/QuickLinks/QuickLinks";
import ClassRecordings from "./components/ClassRecordings/ClassRecordings";
import LiveClassModal from "./components/LiveClassModal/LiveClassModal";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [hasLiveClass, setHasLiveClass] = useState(false);
  const [isEarly, setIsEarly] = useState(false); // If user is too early for the class
  const [recentClass, setRecentClass] = useState(null); // Store recent class info

  useEffect(() => {
    const checkLiveClasses = () => {
      // Dummy data to simulate live class info and recent class
      const liveClassToday = {
        subject: "Math",
        time: "5:00 PM - 5:50 PM",
        isEarly: true, // Replace with actual check if the user is early for the live class
      };

      setHasLiveClass(true); // Update based on actual live class schedule
      setIsEarly(liveClassToday.isEarly);
      setRecentClass(liveClassToday);
    };

    checkLiveClasses();
  }, []);

  return (
    <div>
      {/* Navbar with recent class info */}
      <Navbar recentClass={recentClass} />

      <div className="dashboard">
        {/* Left Side */}
        <div className="left-side">
          <Announcements />
          <ClassSchedule />
        </div>

        {/* Center - Quick Links */}
        <div className="center">
          <QuickLinks />
        </div>

        {/* Right Side - Access Class Recordings */}
        <div className="right-side">
          <ClassRecordings />
        </div>

        {/* Conditional Rendering for Live Class Modal */}
        {hasLiveClass ? (
          isEarly ? (
            <LiveClassModal message="You can join the live class 5 minutes before it starts. Please wait." />
          ) : (
            <LiveClassModal message="Your live class is starting soon!" />
          )
        ) : (
          <div className="no-live-classes">
            <p>No Live Classes Scheduled for Today</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

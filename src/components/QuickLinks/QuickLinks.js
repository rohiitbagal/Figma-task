import React from "react";
import "./QuickLinks.css"; // Importing the CSS specific to QuickLinks

function QuickLinks() {
  return (
    <div className="quick-links-container">
      <h2 className="quick-links-heading">Quick Links</h2>{" "}
      <div className="link-card canvas">
        <h3>Canvas LMS</h3>
        <p>
          Click here to access your LMS for all course materials and
          assignments.
        </p>
      </div>
      <div className="link-card no-live-classes">
        <h3>No Live Classes</h3>
        <p>There are no live classes available at the moment.</p>
      </div>
      <div className="link-card contact">
        <h3>Contact Teacher</h3>
        <p>
          Click here to reach out to your teacher for any concerns or questions.
        </p>
      </div>
    </div>
  );
}

export default QuickLinks;

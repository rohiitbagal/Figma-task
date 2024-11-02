import React from "react";
import "./LiveClassModal.css";

function LiveClassModal({ message }) {
  return (
    <div className="live-class-modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={() => alert("Joining the live class...")}>
          Join Class
        </button>
      </div>
    </div>
  );
}

export default LiveClassModal;

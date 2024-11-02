import React, { useState } from "react";
import "./ClassRecordings.css";
import ReactPlayer from "react-player";

const recordingsData = [
  {
    title: "Algebraic Equations",
    date: "24th October, 2024",
    videoUrl: "https://www.example.com/video1.mp4",
    thumbnail: "https://www.example.com/thumb1.jpg",
  },
  {
    title: "Differential Maths",
    date: "24th October, 2024",
    videoUrl: "https://www.example.com/video2.mp4",
    thumbnail: "https://www.example.com/thumb2.jpg",
  },
  {
    title: "Fundamentals of Organic Chemistry",
    date: "24th October, 2024",
    videoUrl: "https://www.example.com/video3.mp4",
    thumbnail: "https://www.example.com/thumb3.jpg",
  },
  {
    title: "Trigonometry 101",
    date: "24th October, 2024",
    videoUrl: "https://www.example.com/video4.mp4",
    thumbnail: "https://www.example.com/thumb4.jpg",
  },
  {
    title: "Introduction to Physics",
    date: "24th October, 2024",
    videoUrl: "https://www.example.com/video5.mp4",
    thumbnail: "https://www.example.com/thumb5.jpg",
  },
  {
    title: "History of Ancient Civilizations",
    date: "24th October, 2024",
    videoUrl: "https://www.example.com/video6.mp4",
    thumbnail: "https://www.example.com/thumb6.jpg",
  },
];

const ClassRecordings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openVideo = (video) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  const filteredRecordings = recordingsData.filter((recording) =>
    recording.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="class-recordings-container">
      <h3>Access Class Recordings</h3>

      <input
        type="text"
        placeholder="Search for class recordings..."
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="recording-list">
        {filteredRecordings.length > 0 ? (
          filteredRecordings.map((recording, index) => (
            <div key={index} className="recording-item">
              <div className="recording-info">
                <h4>{recording.title}</h4>
                <p>{recording.date}</p>
              </div>
              <img
                src={recording.thumbnail}
                alt={recording.title}
                className="thumbnail"
                onClick={() => openVideo(recording)}
              />
            </div>
          ))
        ) : (
          <p>No recordings found</p>
        )}
      </div>

      {selectedVideo && (
        <div className="video-modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeVideo}>
              X
            </button>
            <h3>{selectedVideo.title}</h3>
            <ReactPlayer
              url={selectedVideo.videoUrl}
              controls
              playing
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ClassRecordings;

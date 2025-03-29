import React from "react";
import "./CassetteLoader.css";

// Use absolute path from public folder
const cassetteImage = "/images3 copy.jpeg"; // Corrected path

const CassetteLoader = () => {
  return (
    <div className="cassette-loader-container">
      <img
        src={cassetteImage}
        alt="Loading Cassette"
        className="cassette-image"
      />
      <div className="generating-text">🎵 Generating lyrics...</div>
    </div>
  );
};

export default CassetteLoader;

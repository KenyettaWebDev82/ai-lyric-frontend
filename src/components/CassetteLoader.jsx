import React from "react";
import "./CassetteLoader.css";

const CassetteLoader = () => {
  return (
    <div className="cassette-loader">
    <img
      src="/cassette2.jpg" 
      alt="Cassette Loader"
      className="cassette-image"
    />
    <p>Generating lyrics...</p>
  </div>

  );
};

export default CassetteLoader;

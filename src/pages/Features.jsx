import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-content">
        <h2 className="features-title">✨ Nova's Cool Features! 🎧</h2>
        <ul className="features-list">
          <li>
            <span>🎵</span>{" "}
            <strong className="feature-title">Custom AI Lyrics:</strong> 
            Generate original song lyrics that match your vibe and mood.
          </li>

          <li>
            <span>🎤</span>{" "}
            <strong className="feature-title">Genre Selection:</strong> 
            Pick your vibe — Hip Hop, R&B, Pop, Country, or Rock — for lyrics that feel authentic to that style.
          </li>

          <li>
            <span>🎨</span>{" "}
            <strong className="feature-title">Mood-Based Themes:</strong> 
            Choose from Dreamy, Romantic, Joyful, Melancholy, or Empowered moods for a personal touch.
          </li>

          <li>
            <span>📼</span>{" "}
            <strong className="feature-title">Cassette Loader:</strong> 
            Watch a retro cassette animation while Nova cooks up your lyrics.
          </li>

          <li>
            <span>🔗</span>{" "}
            <strong className="feature-title">One-Click Copy:</strong> 
            Copy your song lyrics and drop bars like a pro.
          </li>

          <li>
            <span>🔄</span>{" "}
            <strong className="feature-title">Reset & Refresh:</strong> 
            Start over anytime with a simple reset button.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;

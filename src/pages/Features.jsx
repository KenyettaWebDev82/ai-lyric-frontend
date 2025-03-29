import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-content">
        <h2>✨ Nova's Cool Features! 🎧</h2>
        <ul>
          <li>
            <span>🎵</span>{" "}
            <strong className="feature-title">Custom AI Lyrics:</strong> Generate
            lyrics that match your vibe and mood.
          </li>
          <li>
            <span>🎨</span>{" "}
            <strong className="feature-title">Mood-Based Themes:</strong> Choose
            from dreamy, romantic, joyful, melancholy, and empowered moods!
          </li>
          <li>
            <span>📼</span>{" "}
            <strong className="feature-title">Cassette Loader:</strong> Watch a
            retro cassette animation while Nova crafts your lyrics.
          </li>
          <li>
            <span>🔗</span>{" "}
            <strong className="feature-title">One-Click Copy:</strong> Easily
            copy your generated lyrics and share the magic.
          </li>
          <li>
            <span>🔄</span>{" "}
            <strong className="feature-title">Reset & Refresh:</strong> Start
            fresh anytime with a simple reset button.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;

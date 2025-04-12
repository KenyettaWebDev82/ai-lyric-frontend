import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <h2 className="features-title">✨ Nova's Cool Features! 🎧</h2>
      <ul className="features-list">
        <li>
          🎵 <span className="feature-title">Custom AI Lyrics:</span> Generate lyrics that match your vibe and mood.
        </li>
        <li>
          🎨 <span className="feature-title">Mood-Based Themes:</span> Choose from dreamy, romantic, joyful, melancholy, and empowered moods!
        </li>
        <li>
          📼 <span className="feature-title">Cassette Loader:</span> Watch a retro cassette animation while Nova crafts your lyrics.
        </li>
        <li>
          🔗 <span className="feature-title">One-Click Copy:</span> Easily copy your generated lyrics and share the magic.
        </li>
        <li>
          🔄 <span className="feature-title">Reset & Refresh:</span> Start fresh anytime with a simple reset button.
        </li>
      </ul>
    </div>
  );
};

export default Features;

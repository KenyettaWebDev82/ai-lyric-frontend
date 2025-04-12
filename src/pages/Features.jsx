import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-content">
        <h2 className="features-title">🎧 Nova's AI Lyric Generator - Features</h2>
        <ul className="features-list">
          <li>
            <span>🎭</span>{" "}
            <strong className="feature-title">Mood-Based Lyrics:</strong> 
            Instantly generate lyrics that match your current vibe — dreamy, romantic, joyful, empowered, or melancholy.
          </li>

          <li>
            <span>🎵</span>{" "}
            <strong className="feature-title">Genre Selection:</strong> 
            Pick your style — Hip Hop, R&B, Pop, Country, or Rock — and watch Nova write like a true songwriter.
          </li>

          <li>
            <span>🎙️</span>{" "}
            <strong className="feature-title">Singing Mode (Karaoke Vibes):</strong> 
            Let Nova *sing* your lyrics out loud using AI-powered line-by-line rhythm and pitch variation.
          </li>

          <li>
            <span>📼</span>{" "}
            <strong className="feature-title">Cassette Loader Animation:</strong> 
            Feel the throwback vibes while Nova generates your custom song behind-the-scenes.
          </li>

          <li>
            <span>📋</span>{" "}
            <strong className="feature-title">One-Click Copy:</strong> 
            Easily copy your custom lyrics to save, share, or drop a verse.
          </li>

          <li>
            <span>🔄</span>{" "}
            <strong className="feature-title">Reset & Regenerate:</strong> 
            Refresh anytime to create a brand new set of lyrics.
          </li>

          <li>
            <span>🔐</span>{" "}
            <strong className="feature-title">User Login & Personalization:</strong> 
            Sign up or log in with Firebase to personalize your lyric-making experience.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;

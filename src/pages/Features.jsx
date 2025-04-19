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
            Let Nova *sing* your lyrics out loud using AI-powered rhythm and pitch variation for each line.
          </li>

          <li>
            <span>💾</span>{" "}
            <strong className="feature-title">Save My Lyrics:</strong>
            Login to save your custom lyrics with a unique title and revisit them anytime.
          </li>

          <li>
            <span>📂</span>{" "}
            <strong className="feature-title">View Saved Lyrics:</strong>
            Browse all the songs you've created, complete with delete functionality and personalized user filtering.
          </li>

          <li>
            <span>📼</span>{" "}
            <strong className="feature-title">Cassette Loader Animation:</strong>
            Feel the retro vibes while Nova spins up your custom track.
          </li>

          <li>
            <span>📋</span>{" "}
            <strong className="feature-title">One-Click Copy:</strong>
            Easily copy your generated lyrics to paste, share, or remix.
          </li>

          <li>
            <span>🔄</span>{" "}
            <strong className="feature-title">Reset & Regenerate:</strong>
            Start fresh anytime with a new mood and genre combo.
          </li>

          <li>
            <span>🔐</span>{" "}
            <strong className="feature-title">User Login & Personalization:</strong>
            Sign in with Firebase to personalize your experience, save content, and more to come.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;

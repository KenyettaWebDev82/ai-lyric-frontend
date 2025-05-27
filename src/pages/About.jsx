import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* About App Section */}
        <h1 className="about-title">🎧 Welcome to Nova's AI Lyric Generator 🎵</h1>
        <p className="about-text">
          Nova’s AI Lyric Generator blends throwback cassette-era vibes with futuristic AI magic — where music isn’t just created, it’s *felt*.
        </p>

        <p className="about-text">
          Inspired by the mixtape culture of the '80s and '90s, Nova helps you create personalized song lyrics that reflect your mood and favorite genre. Whether you're hyped up, heartbroken, or feeling unstoppable — Nova’s got lyrics for that.
        </p>

        <p className="about-text">
          Music is personal. Your lyrics should be too. Let Nova help you write your story — one line at a time.
        </p>

        {/* Instructions Section */}
        <div className="instructions-container">
          <h2 className="how-to-title">🚀 How to Use Nova's AI Lyric Generator</h2>
          <ul className="how-to-list">
            <li>
              <span className="bold">1. Select a Genre:</span> Choose from Hip Hop, R&B, Pop, Country, or Rock for an authentic style match.
            </li>
            <li>
              <span className="bold">2. Pick Your Mood:</span> Dreamy, Romantic, Empowered, Joyful, or Melancholy — Nova tailors the lyrics to how you feel.
            </li>
            <li>
              <span className="bold">3. Hit "Generate Lyrics":</span> Watch the retro cassette animation while your song is created in real time.
            </li>
            <li>
              <span className="bold">4. Copy and Reset:</span> Save it, or remix it — your song, your way.
            </li>
            <li>
              <span className="bold">5. Save & Revisit:</span> Logged in? Save your lyrics and access them anytime under “My Lyrics.”
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

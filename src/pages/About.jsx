import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* About App Section */}
        <h1 className="about-title">🎧 Welcome to Nova's AI Lyric Generator 🎵</h1>
        <p className="about-text">
          Nova’s AI Lyric Generator brings back that old-school cassette tape vibe — where music wasn’t just heard... it was *felt*. 
        </p>

        <p className="about-text">
          Inspired by the classic mixtape era, Nova uses modern AI magic to help you create custom song lyrics based on your mood and favorite music genre. Whether you're feeling hype, heartbroken, or anything in between — Nova’s got lyrics for that.
        </p>

        <p className="about-text">
          But Nova doesn’t stop there — turn on *Singing Mode* and hear your lyrics performed back to you, karaoke-style. It’s a whole vibe.
        </p>

        <p className="about-text">
          Music is personal. Nova makes sure your lyrics feel that way too. Let’s create something that's *so you*.
        </p>

        {/* Instructions Section */}
        <div className="instructions-container">
          <h2 className="how-to-title">🚀 How to Use Nova's AI Lyric Generator</h2>
          <ul className="how-to-list">
            <li>
              <span className="bold">1. Select a Genre:</span> Choose from Hip Hop, R&B, Pop, Country, or Rock for authentic lyric style.
            </li>
            <li>
              <span className="bold">2. Pick Your Mood:</span> Dreamy, Romantic, Empowered, Joyful, or Melancholy — how you feel shapes your song.
            </li>
            <li>
              <span className="bold">3. Turn on Singing Mode (Optional):</span> Want Nova to *sing* your lyrics back? Just toggle it on!
            </li>
            <li>
              <span className="bold">4. Hit "Generate Lyrics":</span> Watch the retro cassette spin while Nova cooks up your custom song.
            </li>
            <li>
              <span className="bold">5. Play, Copy or Reset:</span> Listen to your lyrics in karaoke style, copy them, or start over anytime.
            </li>
            <li>
              <span className="bold">6. Vibe Out:</span> Share it, sing it, or save it for later — it’s your vibe, your lyrics, your story.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

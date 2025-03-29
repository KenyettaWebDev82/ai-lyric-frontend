import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* About App Section */}
        <h1 className="about-title">🎧 Bringing Back the Soul of Music! 🎵</h1>
        <p className="about-text">
          Remember the good ol' days when cassette tapes ruled the airwaves? 🎶
          Back then, music wasn’t just something you listened to—it was an{" "}
          <span className="highlight">*EXPERIENCE*</span>. Every tape came with
          the lyrics printed out so you could sing along, feel every word, and
          truly vibe with the music.
        </p>
        <p className="about-text">
          <span className="bold">Nova's AI Lyric Generator</span> is here to
          bring that magic back! We've combined that nostalgic feeling with
          cutting-edge AI to create an experience where music meets emotions. 🎤✨
        </p>
        <p className="about-text">
          Whether you're feeling dreamy, empowered, joyful, or a little
          melancholy—Nova generates custom lyrics that reflect your mood. It’s
          like having a personalized mixtape but with lyrics crafted{" "}
          <span className="bold">"JUST 4 YOU"</span>! 🎧
        </p>
        <p className="about-text">
          Nova isn't just an app—it's a{" "}
          <span className="highlight">VIBE</span>. It’s where technology and
          emotion collide to give music back its heart and soul. So get ready to
          express yourself, tap into your feelings, and bring back the
          sing-along magic of cassette tapes—one AI lyric at a time! 🚀
        </p>
        <p className="about-text">
          Let’s make some music that moves the soul! 💓🎧
        </p>

        {/* Instructions Section */}
        <div className="instructions-container">
          <h2 className="how-to-title">🎵 How to Use Nova's AI Lyric Generator</h2>
          <ul className="how-to-list">
            <li>
              <span className="bold">Choose Your Mood:</span> Select how you're
              feeling from the mood options: dreamy, romantic, melancholy,
              joyful, or empowered.
            </li>
            <li>
              <span className="bold">Hit the "Generate Lyrics" Button:</span>{" "}
              Nova will craft unique lyrics that match your selected mood!
            </li>
            <li>
              <span className="bold">Watch the Magic Happen:</span> Enjoy the fun
              cassette animation while Nova processes your request.
            </li>
            <li>
              <span className="bold">Explore Your Lyrics:</span> Your custom
              lyrics will appear, reflecting your mood. Want something new? Try
              another vibe!
            </li>
            <li>
              <span className="bold">Copy or Reset:</span> Hit{" "}
              <span className="bold">"Copy"</span> to save your lyrics or{" "}
              <span className="bold">"Reset"</span> to start fresh.
            </li>
            <li>
              <span className="bold">Sing Along & Vibe Out!</span> Relive the
              magic of music and let Nova bring the soul back into your
              experience!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

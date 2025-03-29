import React, { useState } from "react";
import NavBar from "./components/NavBar";
import MoodSelector from "./components/MoodSelector";
import CassetteLoader from "./components/CassetteLoader";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const API_URL =
        import.meta.env.VITE_API_URL ||
        "https://ai-lyric-backend.onrender.com/api/lyrics";

      const res = await axios.post(API_URL, {
        mood,
      });

      console.log("Lyrics Response:", res.data.lyrics);
      setLyrics(res.data.lyrics);
    } catch (err) {
      console.error("❌ Error fetching lyrics:", err);
    } finally {
      setLoading(false);
    }
  };

  // Mood-based class applied only to lyrics container
  const moodClass = mood
    ? `${mood}-bg` // Apply mood class to lyrics
    : "default-bg"; // Fallback if no mood selected

  const handleReset = () => {
    window.location.reload();
  };

  // Copy lyrics to clipboard
  const handleCopyLyrics = () => {
    if (lyrics) {
      navigator.clipboard.writeText(lyrics);
      alert("✅ Lyrics copied to clipboard!");
    }
  };

  return (
    <div className="app-wrapper">
      {/* Falling Music Notes */}
      <div className="falling-notes">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="music-note">
            {i % 3 === 0 ? "🎵" : i % 3 === 1 ? "🎶" : "🎧"}
          </span>
        ))}
      </div>
      <NavBar />
      <div className="app-container">
        <h1 className="app-title">🎧 Nova's AI Lyric Generator</h1>

        {/* Mood Selector */}
        <MoodSelector selectedMood={mood} onMoodChange={setMood} />

        {/* Button Container for spacing */}
        <div className="button-container">
          <button
            className="generate-button"
            onClick={handleSubmit}
            disabled={!mood}
          >
            Generate Lyrics
          </button>
        </div>

        {/* Loader while generating */}
        {loading && (
          <div className="cassette-loader-container">
            <CassetteLoader />
          </div>
        )}

        {/* Generated Lyrics */}
        {!loading && lyrics && (
          <div className={`lyrics-container ${moodClass}`}>
            <h3 className="lyrics-title">🎤 Your Lyrics:</h3>
            <pre className="lyrics-content">{lyrics}</pre>
          </div>
        )}

        {/* Reset & Copy Buttons */}
        {!loading && lyrics && (
          <div className="button-container">
            <button onClick={handleReset} className="reset-button">
              Reset
            </button>
            <button onClick={handleCopyLyrics} className="copy-button">
              Copy
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

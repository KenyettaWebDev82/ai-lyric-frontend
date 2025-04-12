import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import MoodSelector from "../components/MoodSelector";
import CassetteLoader from "../components/CassetteLoader";

const Home = ({
  mood,
  setMood,
  lyrics,
  loading,
  handleSubmit,
  handleReset,
  handleCopyLyrics,
}) => {
  const [displayName, setDisplayName] = useState("");
  const [genre, setGenre] = useState("");
  const [singingMode, setSingingMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || user.email);
    }
  }, []);

  const handlePlay = () => {
    if (!lyrics) return;

    const lines = lyrics.split("\n").filter((line) => line.trim() !== "");

    const speakLine = (index) => {
      if (index >= lines.length) {
        setIsSpeaking(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(lines[index]);
      utterance.rate = 0.85; // slower = smoother vibe
      utterance.pitch = 1.1 + Math.random() * 0.2; // random pitch variation
      utterance.volume = 1;

      utterance.onend = () => {
        setTimeout(() => speakLine(index + 1), 300); // pause between lines
      };

      speechSynthesis.speak(utterance);
    };

    setIsSpeaking(true);
    speakLine(0); // start singing line by line
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const resetAll = () => {
    handleStop();
    handleReset();
  };

  return (
    <div className="app-container">
      <h2 className="welcome-text">🎧 Welcome, {displayName}!</h2>
      <h1 className="app-title">Nova's AI Lyric Generator</h1>

      <h3>🎤 Select a Genre:</h3>
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="genre-dropdown"
      >
        <option value="">-- Select Genre --</option>
        <option value="Hip Hop">Hip Hop</option>
        <option value="R&B">R&B</option>
        <option value="Country">Country</option>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
      </select>

      <MoodSelector selectedMood={mood} onMoodChange={setMood} />

      <div className="singing-toggle">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={singingMode}
            onChange={() => setSingingMode(!singingMode)}
          />
          Singing Mode (Melody-Friendly Lyrics)
        </label>
      </div>

      <div className="button-container">
        <button
          className="generate-button"
          onClick={async () => {
            if (!mood || !genre) {
              alert("❌ Please select a mood and genre!");
              return;
            }
            await handleSubmit(mood, genre, singingMode);
          }}
          disabled={!mood || !genre}
        >
          Generate Lyrics
        </button>
      </div>

      {loading && (
        <div className="cassette-loader-container">
          <CassetteLoader />
        </div>
      )}

      {!loading && lyrics && (
        <div className={`lyrics-container ${mood}-bg`}>
          <h3 className="lyrics-title">🎤 Your Lyrics:</h3>
          <pre className="lyrics-content">{lyrics}</pre>

          {singingMode && (
            <div className="button-container">
              {!isSpeaking ? (
                <button className="play-button" onClick={handlePlay}>
                  ▶️ Play
                </button>
              ) : (
                <button className="stop-button" onClick={handleStop}>
                  ⏹ Stop
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {!loading && lyrics && (
        <div className="button-container">
          <button onClick={resetAll} className="reset-button">
            Reset
          </button>
          <button onClick={handleCopyLyrics} className="copy-button">
            Copy
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;

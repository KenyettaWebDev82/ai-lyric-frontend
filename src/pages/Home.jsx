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
  const [genre, setGenre] = useState(""); // new genre state

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || user.email);
    }
  }, []);

  return (
    <div className="app-container">
      <h2 className="welcome-text">🎧 Welcome, {displayName}!</h2>

      <h1 className="app-title">Nova's AI Lyric Generator</h1>

      {/* Genre Dropdown */}
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

      <div className="button-container">
        <button
          className="generate-button"
          onClick={async () => {
            if (!mood || !genre) {
              alert("❌ Please select a mood and genre!");
              return;
            }
            await handleSubmit(mood, genre);
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
        </div>
      )}

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
  );
};

export default Home;

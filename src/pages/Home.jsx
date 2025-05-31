// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import MoodSelector from "../components/MoodSelector";
import CassetteLoader from "../components/CassetteLoader";
import "./Home.css"; // Keep using this for layout-specific styles

const Home = ({
  mood,
  setMood,
  lyrics,
  genre,
  setGenre,
  loading,
  handleSubmit,
  handleSave,
  showSavedToast,
  errorMessage,
  setErrorMessage,
  handleReset,
  handleCopyLyrics,
  title,
  setTitle,
}) => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || user.email);
    }
  }, []);

  const handleGenerate = async () => {
    if (!genre || !mood) {
      setErrorMessage(
        "Please select a genre and mood before generating lyrics."
      );
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    setErrorMessage("");
    await handleSubmit(mood, genre);
  };

  return (
    <div className="home-wrapper">
      {/* Main Content */}
      <div className="home-container">
        <div className="header-left">
          <h1 className="welcome-text">Welcome, {displayName}!</h1>
        </div>
        <div className="form-block">
          <input
            type="text"
            placeholder="Title of Song"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
          />

          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="genre-dropdown primary-button"
          >
            <option value="">Select Genre</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="R&B">R&B</option>
            <option value="Country">Country</option>
            <option value="Pop">Pop</option>
            <option value="Rock">Rock</option>
          </select>
        </div>

        <div className="mood-section">
          <h3 className="mood-label">Choose a Mood:</h3>
          <MoodSelector selectedMood={mood} onMoodChange={setMood} />
        </div>

        {errorMessage && <div className="toast-error">{errorMessage}</div>}

        <div className="button-group">
          <button className="primary-button" onClick={handleGenerate}>
            Generate Lyrics
          </button>
          <button className="primary-button" onClick={handleSave}>
            Save My Lyrics
          </button>
        </div>

        {loading && <CassetteLoader />}

        {!loading && lyrics && (
          <div className="lyrics-output">
            <h3 className="lyrics-title">{title || "Your Lyrics:"}</h3>
            <pre>{lyrics}</pre>
            <div className="button-group">
              <button className="primary-button" onClick={handleCopyLyrics}>
                Copy
              </button>
              <button className="primary-button" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        )}

        {showSavedToast && (
          <div className="toast-success">Your lyrics have been saved!</div>
        )}
      </div>
    </div>
  );
};

export default Home;

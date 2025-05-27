// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import MoodSelector from "../components/MoodSelector";
import CassetteLoader from "../components/CassetteLoader";
import "./Home.css";

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
  const [displayName, setDisplayName] = useState("");        // User name or email

  // On mount, get user display name from Firebase auth
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setDisplayName(user.displayName || user.email);
    }
  }, []);

  // Called when user clicks "Generate Lyrics"
  const handleGenerate = async () => {
    if (!genre || !mood) {
      setErrorMessage("Please select a genre and mood before generating lyrics.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    setErrorMessage("");
    await handleSubmit(mood, genre);
  };

  
  return (
    <div className="home-container">
      {/* Welcome header */}
      <div className="header-left">
        <p className="welcome-text">Welcome, {displayName}!</p>
        <h1 className="nova-title">Nova AI</h1>
      </div>

      {/* Title + Genre Inputs */}
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

      {/* Mood Selector */}
      <div className="mood-section">
        <h3 className="mood-label">Choose a Mood:</h3>
        <MoodSelector selectedMood={mood} onMoodChange={setMood} />
      </div>

      {/* Error Toast */}
      {errorMessage && <div className="toast-error">{errorMessage}</div>}

      {/* Main Action Buttons */}
      <div className="button-group">
        <button className="primary-button" onClick={handleGenerate}>
          Generate Lyrics
        </button>

        <button className="primary-button" onClick={handleSave}>
          Save My Lyrics
        </button>
      </div>

      {/* Loader while waiting for lyrics */}
      {loading && <CassetteLoader />}

      {/* Display Generated Lyrics */}
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

      {/* Save Toast */}
      {showSavedToast && (
        <div className="toast-success">Your lyrics have been saved!</div>
      )}
    </div>
  );
};

export default Home;

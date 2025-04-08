// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import MoodSelector from '../components/MoodSelector';
import CassetteLoader from '../components/CassetteLoader';

const Home = ({ mood, setMood, lyrics, loading, handleSubmit, handleReset, handleCopyLyrics }) => {
  const [displayName, setDisplayName] = useState('');

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

      <MoodSelector selectedMood={mood} onMoodChange={setMood} />

      <div className="button-container">
        <button
          className="generate-button"
          onClick={handleSubmit}
          disabled={!mood}
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

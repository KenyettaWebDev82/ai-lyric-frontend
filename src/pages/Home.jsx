// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { getAuth } from "firebase/auth";
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
  const [title, setTitle] = useState("");
  const [showSavedToast, setShowSavedToast] = useState(false);

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
      utterance.rate = 0.85;
      utterance.pitch = 1.1 + Math.random() * 0.2;
      utterance.volume = 1;
      utterance.onend = () => {
        setTimeout(() => speakLine(index + 1), 300);
      };
      speechSynthesis.speak(utterance);
    };

    setIsSpeaking(true);
    speakLine(0);
  };

  const handleStop = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const resetAll = () => {
    handleStop();
    handleReset();
  };

  const handleSaveLyrics = async () => {
    const user = getAuth().currentUser;
    const uid = user?.uid;

    if (!uid || !lyrics || !title) {
      alert("❗ Please generate lyrics and provide a title before saving.");
      return;
    }

    try {
      // Step 1: Register the user
      const registerRes = await fetch(
        `${import.meta.env.VITE_API_URL}/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firebase_uid: uid,
            email: user.email,
          }),
        }
      );

      if (!registerRes.ok) throw new Error("Failed to register user");

      // Step 2: Save the lyrics
      const res = await fetch(`${import.meta.env.VITE_API_URL}/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firebase_uid: uid,
          title,
          content: lyrics,
          mood,
          genre,
        }),
      });

      if (!res.ok) throw new Error("Failed to save lyrics");
      const data = await res.json();

      console.log("✅ Saved!", data);
      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3000);
    } catch (err) {
      console.error("❌ Error saving lyrics", err);
      alert("Failed to save lyrics. Check the console or network tab for more.");
    }
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

        <div className="title-input-container">
          <label htmlFor="title" className="input-label">
            📝 Title of Song
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="title-input"
            placeholder="e.g., Nova Anthem"
          />
        </div>

        <button onClick={handleSaveLyrics} className="save-btn">
          Save My Lyrics
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

      {showSavedToast && (
        <div className="toast-success">Your lyrics have been saved!</div>
      )}
    </div>
  );
};

export default Home;

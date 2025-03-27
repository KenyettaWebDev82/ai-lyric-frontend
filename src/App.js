import React, { useState } from "react";
import MoodSelector from "./components/MoodSelector";
import CassetteLoader from "./components/CassetteLoader";
import axios from "axios";

function App() {
  const [mood, setMood] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3333/api/lyrics", {
        mood,
      });
      setLyrics(res.data.lyrics);
    } catch (err) {
      console.error("❌ Error fetching lyrics:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">
        🎧 Nova's AI Lyric Generator
      </h1>

      <MoodSelector selectedMood={mood} onMoodChange={setMood} />

      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded disabled:opacity-50"
        onClick={handleSubmit}
        disabled={!mood}
      >
        Generate Lyrics
      </button>

      {loading && <CassetteLoader />}
      {!loading && lyrics && (
        <div className="mt-6 bg-gray-100 p-4 rounded shadow">
          <h3 className="font-bold mb-2">🎤 Your Lyrics:</h3>
          <pre className="whitespace-pre-wrap">{lyrics}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

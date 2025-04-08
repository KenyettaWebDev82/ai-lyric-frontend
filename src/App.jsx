import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import MoodSelector from "./components/MoodSelector";
import CassetteLoader from "./components/CassetteLoader";
import Footer from "./components/Footer";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import axios from "axios";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!mood) {
      alert("❌ Please select a mood before generating lyrics!");
      return;
    }
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

  const handleReset = () => {
    window.location.reload();
  };

  const handleCopyLyrics = () => {
    if (lyrics) {
      navigator.clipboard.writeText(lyrics);
      alert("✅ Lyrics copied to clipboard!");
    }
  };

  return (
    <Router>
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
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <Home
                mood={mood}
                setMood={setMood}
                lyrics={lyrics}
                loading={loading}
                handleSubmit={handleSubmit}
                handleReset={handleReset}
                handleCopyLyrics={handleCopyLyrics}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

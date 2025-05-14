import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import MyLyrics from "./pages/MyLyrics";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import axios from "axios";
import "./App.css";

function AppWrapper() {
  const [mood, setMood] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [loading, setLoading] = useState(false);
  const [singingMode, setSingingMode] = useState(false);
  const location = useLocation();

  const handleSubmit = async (mood, genre, singingMode) => {
    try {
      setLoading(true);
      const BASE_URL = import.meta.env.VITE_API_URL;
      const API_URL = `${BASE_URL}/api/lyrics`;
      
      const res = await axios.post(API_URL, {
          mood,
          genre,
          singingMode,
      });
      

      setLyrics(res.data.lyrics);
    } catch (err) {
      console.error("❌ Error fetching lyrics:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => window.location.reload();

  const handleCopyLyrics = () => {
    if (lyrics) {
      navigator.clipboard.writeText(lyrics);
      alert("✅ Lyrics copied to clipboard!");
    }
  };

  return (
    <>
      <div className="app-wrapper">
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home
                  mood={mood}
                  setMood={setMood}
                  lyrics={lyrics}
                  loading={loading}
                  handleSubmit={handleSubmit}
                  handleReset={handleReset}
                  handleCopyLyrics={handleCopyLyrics}
                  singingMode={singingMode}
                  setSingingMode={setSingingMode}
                />
              </PrivateRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mylyrics" element={<MyLyrics />} />
        </Routes>
        <Footer />
      </div>

      {location.pathname === "/mylyrics" && (
        <div className="falling-notes">
          {[...Array(15)].map((_, i) => {
            const icons = ["🎵", "🎶", "🎧"];
            const randomIcon = icons[i % icons.length];
            return (
              <div key={i} className="music-note">
                {randomIcon}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

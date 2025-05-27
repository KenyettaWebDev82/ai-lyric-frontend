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
import { auth } from "./firebase";
import "./App.css";

function AppWrapper() {
  const [mood, setMood] = useState("");
  const [genre, setGenre] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [title, setTitle] = useState("");
  const [showSavedToast, setShowSavedToast] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); // 
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
      console.error("Error fetching lyrics:", err);
    } finally {
      setLoading(false);
    }
  };

  // Called when user clicks "Save My Lyrics"
  const handleSave = async () => {
    if (!lyrics || !title) {
      setErrorMessage(
        "Please generate lyrics and enter a title before saving."
      );
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    const user = auth.currentUser;

    if (!user) {
      setErrorMessage("You must be logged in to save lyrics.");
      return;
    }

    const firebase_uid = user.uid;
    const email = user.email;  
    console.log("Saving lyrics with:", {
      firebase_uid,
      title,
      content: lyrics,
      mood,
      genre
    });
    
    try {
      const BASE_URL = import.meta.env.VITE_API_URL;
      const API_URL = `${BASE_URL}/api/lyrics/save`;

      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firebase_uid,
          email,
          title,
          content: lyrics,
          mood,
          genre,
        }),
      });

      setShowSavedToast(true);
      setTimeout(() => setShowSavedToast(false), 3000);
    } catch (err) {
      console.error("Error saving lyrics:", err);
      setErrorMessage("Failed to save lyrics. Try again.");
    }
  };

  const handleReset = () => window.location.reload();

  const handleCopyLyrics = () => {
    if (lyrics) {
      navigator.clipboard.writeText(lyrics);
      alert("Lyrics copied to clipboard!");
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
                  genre={genre}           
                  setGenre={setGenre} 
                  loading={loading}
                  handleSubmit={handleSubmit}
                  handleSave={handleSave}
                  title={title}
                  setTitle={setTitle} 
                  showSavedToast={showSavedToast}
                  errorMessage={errorMessage}
                  setErrorMessage={setErrorMessage}
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

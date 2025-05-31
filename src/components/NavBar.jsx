// src/components/NavBar.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });

    return () => unsubscribe(); // cleanup
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // ✅ Hide entire navbar on Register and Login pages
  if (location.pathname === "/register" || location.pathname === "/login") return null;

  const showFallingNotes = ["/", "/about", "/features", "/mylyrics", "/contact"].includes(location.pathname);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">🎧 Nova's AI Lyric Generator</h1>
      </div>

      {/* Falling Notes in NavBar only */}
      {showFallingNotes && (
        <div className="navbar-falling-notes">
          {[...Array(10)].map((_, i) => {
            const icons = ["🎵", "🎶", "🎤", "🎼"];
            const icon = icons[Math.floor(Math.random() * icons.length)];
            const left = Math.random() * 100;
            const duration = (2 + Math.random()).toFixed(6);
            const delay = (Math.random() * 1).toFixed(6);

            return (
              <span
                key={i}
                className="note-navbar"
                style={{
                  left: `${left}%`,
                  animationDuration: `${duration}s`,
                  animationDelay: `${delay}s`,
                }}
              >
                {icon}
              </span>
            );
          })}
        </div>
      )}

      <div className="navbar-right">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Features</NavLink>
          <NavLink to="/mylyrics" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>My Lyrics</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
        </div>

        {user && (
          <button onClick={handleLogout} className="logout-button">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

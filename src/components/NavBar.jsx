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

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  // Hide navbar on Register page
  if (location.pathname === "/register") return null;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-title">🎧 Nova's AI Lyric Generator</h1>
      </div>

      {/* Falling Notes (Only on Home) */}
      {location.pathname === "/" && (
        <div className="navbar-falling-notes">
          {[...Array(12)].map((_, i) => {
            const icons = ["🎵", "🎶", "🎼", "🎤"]; 
            const icon = icons[Math.floor(Math.random() * icons.length)];
            const left = Math.random() * 100;
            const duration = (2 + Math.random()).toFixed(6);
            const delay = (Math.random() * 1).toFixed(2);

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
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            About
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Features
          </NavLink>
          <NavLink to="/mylyrics" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            My Lyrics
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Contact
          </NavLink>
        </div>

        {user && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

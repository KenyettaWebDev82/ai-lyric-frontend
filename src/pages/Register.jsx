import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setMessage("❌ Email already in use. Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        setMessage(`❌ Registration failed: ${error.message}`);
      }
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      setMessage(`❌ Google Sign Up failed: ${error.message}`);
    }
  };

  return (
    <div className="register-page">
      <div className="nova-wallpaper-static">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i}>🎷 Nova’s AI Lyric Generator </span>
        ))}
      </div>

      <div className="cassette-container">
        <form className="cassette-form" onSubmit={handleRegister}>
          <h2 className="form-label brighter-title">REGISTER</h2>
          <h2 className="form-label title">NOVA'S AI LYRIC GENERATOR</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Sign Up</button>

          <button
            type="button"
            onClick={handleGoogleRegister}
            className="google-signup-btn"
          >
            Register with Google
          </button>

          <p className="cassette-message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;

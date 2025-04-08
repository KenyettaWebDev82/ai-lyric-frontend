import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("🧾 Firebase registration logic coming next...");
  };

  return (
    <div className="register-page">
      <div className="nova-wallpaper-static">
        {Array.from({ length: 60 }).map((_, i) => (
          <span key={i}>🎧 Nova’s AI Lyric Generator </span>
        ))}
      </div>

      <div className="cassette-container">
        <form className="cassette-form" onSubmit={handleRegister}>
          <h2 className="form-label">REGISTER</h2>
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
          <p className="cassette-message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Register;

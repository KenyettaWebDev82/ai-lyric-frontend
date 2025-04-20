import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      setMessage(`✅ Logged in as: ${user.email}`);
      navigate("/"); // 👈 this sends the user to your homepage
    } catch (error) {
      setMessage(`❌ Login failed: ${error.message}`);
    }
  };

  // 🟢 Google Sign-In logic
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setMessage(`✅ Logged in with Google: ${user.displayName}`);
      navigate("/"); // 👈 send Google users to homepage too
    } catch (error) {
      setMessage(`❌ Google Sign-in failed: ${error.message}`);
    }
  };

  return (
    <div className="auth-wrapper">
      <h2 className="auth-title">🔐 Login to Nova</h2>

      <form onSubmit={handleLogin} className="auth-form">
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="auth-button">Login</button>
      </form>

      <hr style={{ margin: '1rem 0' }} />

      <button onClick={handleGoogleSignIn} className="auth-button">
        Sign in with Google
      </button>

      <p className="auth-message">{message}</p>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`✅ Logged in as: ${userCredential.user.email}`);
      navigate('/');
    } catch (error) {
      setMessage(`❌ Login failed: ${error.message}`);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setMessage(`✅ Logged in with Google: ${result.user.displayName}`);
      navigate('/');
    } catch (error) {
      setMessage(`❌ Google Sign-in failed: ${error.message}`);
    }
  };

  return (
    <div className="login-page">
      <div className="train-wrapper">
        <img src="/train-nova.png" alt="Moving Train" className="train-img" />
        <img src="/train-nova.png" alt="Moving Train" className="train-img" />
        <img src="/train-nova.png" alt="Moving Train" className="train-img" />
        <img src="/train-nova.png" alt="Moving Train" className="train-img" />
      </div>

      <div className="login-content">
        <form className="graffiti-login-form" onSubmit={handleLogin}>
          <h2 className="graffiti-title">Login to Nova</h2>

          <label>Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit">Login</button>

          <button type="button" onClick={handleGoogleSignIn}>Sign in with Google</button>

          <p className="graffiti-message">{message}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;

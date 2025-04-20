// src/components/PrivateRoute.jsx
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';

const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined = loading
  const [loading, setLoading] = useState(true);
  const hasVisited = localStorage.getItem("hasVisited");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div style={{ padding: "2rem", color: "#fff" }}>🔐 Loading...</div>;
  }

  if (!user) {
    if (!hasVisited) {
      localStorage.setItem("hasVisited", "true");
      return <Navigate to="/register" replace />;
    }
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;

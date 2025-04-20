import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./MyLyrics.css";

const BASE_URL = import.meta.env.VITE_API_URL;

function MyLyrics() {
  const [savedLyrics, setSavedLyrics] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (!firebaseUser) return;

      const uid = firebaseUser.uid;
      console.log("👤 Firebase UID:", uid);

      try {
        const res = await fetch(`${BASE_URL}/api/lyrics/user/${uid}`);
        if (!res.ok) {
          throw new Error("Failed to fetch lyrics");
        }
        const data = await res.json();
        console.log("📄 Data received from backend:", data);
        setSavedLyrics(data);
      } catch (err) {
        console.error("Error fetching lyrics:", err);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this lyric?"
    );
    if (!confirmDelete) return;

    try {
      const res = await fetch(`${BASE_URL}/api/lyrics/${id}`, {
        method: "DELETE",
      });

      const deleted = await res.json();
      console.log("Deleted:", deleted);

      setSavedLyrics((prev) => prev.filter((lyric) => lyric.id !== id));
    } catch (err) {
      console.error("Error deleting lyric:", err);
    }
  };

  return (
    <div className="my-lyrics-page">
      <h2>🎶 My Saved Lyrics</h2>
      {loading ? (
        <p>Loading your lyrics...</p>
      ) : savedLyrics.length === 0 ? (
        <p>No lyrics saved yet.</p>
      ) : (
        savedLyrics.map((lyric) => (
          <div key={lyric.id} className="saved-lyric">
            <h3>{lyric.title}</h3>
            <pre>{lyric.content}</pre>
            <button
              onClick={() => handleDelete(lyric.id)}
              className="delete-button"
            >
              Delete
            </button>
          </div>
        ))
      )}
      <button
        className="back-button"
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
      >
        Back to Lyrics Generator
      </button>
    </div>
  );
}

export default MyLyrics;

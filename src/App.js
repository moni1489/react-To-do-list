import React, { useState } from "react";
import "./App.css";

function MusicPlayer() {
  const [spotifyLink, setSpotifyLink] = useState("");

  const getEmbedLink = (link) => {
    if (!link) return "";
    return link.replace("open.spotify.com/", "open.spotify.com/embed/");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        background: "#222",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 -2px 10px rgba(0,0,0,0.5)",
      }}
    >
      <input
        type="text"
        placeholder="paste your spotify link here"
        value={spotifyLink}
        onChange={(e) => setSpotifyLink(e.target.value)}
        style={{
          padding: "6px 8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "300px",
        }}
      />

      {spotifyLink && (
        <iframe
          src={getEmbedLink(spotifyLink)}
          width="300"
          height="80"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
          style={{ borderRadius: "10px", marginLeft: "10px" }}
          title="Spotify Player"
        ></iframe>
      )}
    </div>
  );
}
function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const trimmed = task.trim();
    if (trimmed) {
      setTasks([...tasks, { text: trimmed, done: false }]);
      setTask("");
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="app-container" style={{ paddingBottom: "150px" }}>
      <h1>to-do list by monya325</h1>

      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="input your task..."
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            width: "200px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            background: "#4caf50",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          add
        </button>
      </div>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.map((t, i) => (
          <li
            key={i}
            style={{
              marginBottom: "10px",
              background: "rgba(255, 255, 255, 0.1)",
              padding: "10px 15px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: t.done ? "line-through" : "none",
              opacity: t.done ? 0.6 : 1,
              transition: "all 0.3s ease",
            }}
          >
            <span
              onClick={() => toggleTask(i)}
              style={{
                cursor: "pointer",
                flex: 1,
                textAlign: "left",
              }}
            >
              {t.text}
            </span>

            <div
              onClick={() => deleteTask(i)}
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                border: "2px solid red",
                cursor: "pointer",
                marginLeft: "10px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgba(255, 0, 0, 0.4)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            ></div>
          </li>
        ))}
      </ul>

      {}
      <MusicPlayer />
    </div>
  );
}

export default App;

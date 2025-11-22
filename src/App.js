import React, { useState } from "react";
import "./App.css";
import maCherie from "./assets/ma_cherie.mp3";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const audioRef = React.useRef(new Audio(maCherie));
  const playmusic = () => {
    audioRef.current.play();
  };
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
    <div className="app-container">
      <h1>to-do list by monya325</h1>

      <div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Введите задачу..."
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
          Добавить
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
              {t.done ? " " : " "} {t.text}
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
      <button
        onClick={playmusic}
        style={{
          position: "fixed",
          bottom: "5px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "12px 25px",
          fontSize: "16px",
          borderRadius: "10px",
          background: "#ff4081",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
       play some malice mizer
      </button>
    </div>
  );
}

export default App;

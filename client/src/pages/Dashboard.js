import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [hoveredDeleteBtn, setHoveredDeleteBtn] = useState(null);

  const fetchTasks = async () => {
    const { data } = await api.get("/tasks");
    setTasks(data);
  };

  const createTask = async (e) => {
    e.preventDefault();
    if (title.trim()) {
      await api.post("/tasks", { title });
      setTitle("");
      fetchTasks();
    }
  };

  const toggleComplete = (taskId) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const deleteTask = async (taskId) => {
    await api.delete(`/tasks/${taskId}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Navbar />
      <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.heading}>My Tasks</h1>
        <p style={styles.subtitle}>{tasks.length} tasks in total</p>
      </div>

      <form onSubmit={createTask} style={styles.form}>
        <input
          style={styles.input}
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button style={styles.button}>Add Task</button>
      </form>

      <div style={styles.list}>
        {tasks.length === 0 ? (
          <div style={styles.empty}>
            <p style={styles.emptyText}>No tasks yet. Add one to get started.</p>
          </div>
        ) : (
          tasks.map((task) => (
            <div key={task._id} style={styles.card}>
              <div style={styles.cardContent}>
                <input
                  type="checkbox"
                  style={styles.checkbox}
                  checked={completedTasks.has(task._id)}
                  onChange={() => toggleComplete(task._id)}
                />
                <span
                  style={{
                    ...styles.taskTitle,
                    textDecoration: completedTasks.has(task._id)
                      ? "line-through"
                      : "none",
                    opacity: completedTasks.has(task._id) ? 0.6 : 1,
                  }}
                >
                  {task.title}
                </span>
              </div>
              <button
                className="delete-btn"
                style={{
                  ...styles.deleteBtn,
                  color: hoveredDeleteBtn === task._id ? "#ef4444" : "#9ca3af",
                }}
                onClick={() => deleteTask(task._id)}
                onMouseEnter={() => setHoveredDeleteBtn(task._id)}
                onMouseLeave={() => setHoveredDeleteBtn(null)}
                title="Delete task"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 6h14M8 6V4a1 1 0 011-1h2a1 1 0 011 1v2M8 9v6M12 9v6M5 6l1 11a2 2 0 002 2h4a2 2 0 002-2l1-11" />
                </svg>
              </button>
            </div>
          ))
        )}
      </div>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2rem 1rem",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    marginBottom: "2.5rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "0.5rem",
    color: "#1f2937",
    textShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  subtitle: {
    fontSize: "1rem",
    opacity: 0.9,
    fontWeight: "500",
  },
  form: {
    display: "flex",
    gap: "1rem",
    marginBottom: "2.5rem",
  },
  input: {
    flex: 1,
    padding: "1rem",
    borderRadius: "12px",
    border: "2px solid white",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  button: {
    padding: "1rem 1.5rem",
    borderRadius: "12px",
    border: "none",
    background: "white",
    color: "#667eea",
    fontWeight: "700",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  empty: {
    padding: "3rem 2rem",
    textAlign: "center",
    background: "rgba(255, 255, 255, 0.9)",
    borderRadius: "16px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  },
  emptyText: {
    fontSize: "1.1rem",
    color: "#6b7280",
    fontWeight: "500",
  },
  card: {
    padding: "1.25rem",
    background: "white",
    borderRadius: "14px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.3s ease",
    border: "2px solid transparent",
  },
  cardContent: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    flex: 1,
  },
  checkbox: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    accentColor: "#667eea",
  },
  taskTitle: {
    fontSize: "1rem",
    color: "#1f2937",
    fontWeight: "500",
    transition: "all 0.3s ease",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    color: "#9ca3af",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

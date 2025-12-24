import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h2 style={styles.title}>Tasky</h2>
        </div>
        <div style={styles.userSection}>
          {user.name && <span style={styles.userName}>Welcome, {user.name}</span>}
          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "rgba(255, 255, 255, 0.95)",
    boxShadow: "0 2px 10px rgba(102, 126, 234, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "1rem 0",
    borderBottom: "1px solid rgba(102, 126, 234, 0.2)",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brand: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  userSection: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  userName: {
    color: "#1f2937",
    fontWeight: "500",
    fontSize: "0.95rem",
  },
  logoutBtn: {
    background: "#f3f4f6",
    color: "#1f2937",
    border: "2px solid #e5e7eb",
    padding: "0.5rem 1.25rem",
    borderRadius: "8px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontSize: "0.9rem",
  },
};

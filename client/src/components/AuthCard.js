export default function AuthCard({ title, children }) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>{title}</h1>
          <p style={styles.subtitle}>Manage your tasks efficiently</p>
        </div>
        {children}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
  },
  card: {
    width: "100%",
    maxWidth: "420px",
    background: "rgba(255, 255, 255, 0.95)",
    padding: "2.5rem",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(102, 126, 234, 0.25)",
    backdropFilter: "blur(10px)",
  },
  header: {
    marginBottom: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "1.875rem",
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: "0.5rem",
  },
  subtitle: {
    fontSize: "0.875rem",
    color: "#6b7280",
    fontWeight: "500",
  },
};

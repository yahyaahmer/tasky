export default function AuthHeader() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.brand}>
          <h2 style={styles.logo}>Tasky</h2>
          <p style={styles.tagline}>Organize your productivity</p>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 2px 10px rgba(102, 126, 234, 0.1)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  brand: {
    textAlign: "center",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
  },
  tagline: {
    fontSize: "0.75rem",
    color: "#6b7280",
    marginTop: "0.25rem",
    fontWeight: "500",
  },
};

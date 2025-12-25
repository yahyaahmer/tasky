import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import AuthCard from "../components/AuthCard";
import AuthHeader from "../components/AuthHeader";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { data } = await api.post("/auth/register", {
      name,
      email,
      password,
    });
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <>
      <AuthHeader />
      <AuthCard title="Create your account">
        <form onSubmit={submitHandler} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Name</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Email</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Password</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter a strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button style={styles.submitBtn}>Create Account</button>

        <p style={styles.text}>
          Already registered?{" "}
          <Link to="/" style={styles.link}>
            Login
          </Link>
        </p>
        </form>
      </AuthCard>
    </>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  label: {
    fontSize: "0.875rem",
    fontWeight: "600",
    color: "#374151",
  },
  input: {
    padding: "0.875rem 1rem",
    borderRadius: "10px",
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    transition: "all 0.3s ease",
  },
  submitBtn: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    padding: "1rem",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
    marginTop: "0.5rem",
  },
  text: {
    textAlign: "center",
    marginTop: "1rem",
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  link: {
    color: "#667eea",
    fontWeight: "600",
    transition: "color 0.2s ease",
  },
};
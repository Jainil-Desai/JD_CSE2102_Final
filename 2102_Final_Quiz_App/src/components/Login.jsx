import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      return;
    }

    // validating password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Invalid password format. It must be at least 8 characters long, contain at least one uppercase letter, and one number."
      );
      return;
    }

    console.log("Login successful");
    navigate("/quiz");
  };

  return (
    <div data-testid="login-1" className={styles.loginContainer}>
      <h1>Login</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <label>Email:</label>
      <input
        className={styles.input}
        type="email"
        data-testid="emailInput"
        value={email}
        placeholder="example@example.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Password:</label>
      <input
        className={styles.input}
        type="password"
        data-testid="passwordInput"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Sign in</button>

      <div className={styles.custom_shape_divider_bottom_1701999453}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles.shapeFill}
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;

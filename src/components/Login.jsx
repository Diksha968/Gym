// src/pages/Login.jsx
import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });

  const validate = () => {
    let valid = true;
    let errors = { username: "", password: "" };

    if (!formData.username.trim()) {
      errors.username = "Username is required.";
      valid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Login Data: ", formData);
      // Add your login logic here
    }
  };

  return (
    <div style={{
      backgroundImage: "url('https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        width: "300px",
        margin: "auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
      }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
            {errors.username && <span style={{ color: "red", fontSize: "0.875em", marginTop: "5px", display: "block" }}>{errors.username}</span>}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            />
            {errors.password && <span style={{ color: "red", fontSize: "0.875em", marginTop: "5px", display: "block" }}>{errors.password}</span>}
          </div>
          <button type="submit" style={{
            backgroundColor: "#007BFF",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

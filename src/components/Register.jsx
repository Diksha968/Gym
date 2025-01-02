// src/pages/Registration.jsx
import React, { useState } from "react";

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validate = () => {
    let valid = true;
    let errors = { name: "", email: "", password: "", confirmPassword: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required.";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid email format.";
      valid = false;
    }

    if (!formData.password.trim()) {
      errors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      valid = false;
    }

    if (formData.confirmPassword !== formData.password) {
      errors.confirmPassword = "Passwords do not match.";
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
      console.log("Registration Data: ", formData);
      // Add your registration logic here
    }
  };

  return (
    <div style={{
      backgroundImage: "url('https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backdropFilter: "blur(8px)",
    }}>
      <div style={{
        width: "400px",
        margin: "auto",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        backgroundColor: "rgba(114, 108, 108, 0.8)",
     
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
      }}>
        <h2>Gym Registration</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
            />
            {errors.name && <span style={{ color: "red", fontSize: "0.875em", marginTop: "5px", display: "block" }}>{errors.name}</span>}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
            />
            {errors.email && <span style={{ color: "red", fontSize: "0.875em", marginTop: "5px", display: "block" }}>{errors.email}</span>}
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
              style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
            />
            {errors.password && <span style={{ color: "red", fontSize: "0.875em", marginTop: "5px", display: "block" }}>{errors.password}</span>}
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="confirmPassword" style={{ display: "block", marginBottom: "5px" }}>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              style={{ width: "100%", padding: "10px", boxSizing: "border-box" }}
            />
            {errors.confirmPassword && <span style={{ color: "red", fontSize: "0.875em", marginTop: "5px", display: "block" }}>{errors.confirmPassword}</span>}
          </div>
          <button type="submit" style={{
            backgroundColor: "#28a745",
            color: "white",
            padding: "10px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;

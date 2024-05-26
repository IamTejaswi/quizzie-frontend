import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../apis/auth";
import Button from "../../components/shared/Button/Button";
import ToggleButton from "../../components/shared/ToggleButton/ToggleButton";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [selectedButton, setSelectedButton] = useState("Sign Up");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Fields can't be empty");
      return;
    }

    await registerUser(formData);
  };

  const handleToggleClick = (label) => {
    setSelectedButton(label);
    if (label === "Sign Up") {
      navigate("/register");
    } else if (label === "Log in") {
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Quizzie</h1>
      <div className={styles.header}>
        <ToggleButton
          label="Sign Up"
          isSelected={selectedButton === "Sign Up"}
          onClick={() => handleToggleClick("Sign Up")}
        />
        <ToggleButton
          label="Log in"
          isSelected={selectedButton === "Log in"}
          onClick={() => handleToggleClick("Log in")}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          name="name"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Email</label>
        <input
          className={styles.input}
          name="email"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          name="password"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Confirm Password</label>
        <input
          className={styles.input}
          name="confirmPassword"
          onChange={handleChange}
          type="text"
        />
      </div>
      <Button onClick={handleSubmit} label="Sign-Up" />
    </div>
  );
}

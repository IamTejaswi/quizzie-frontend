import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../apis/auth";
import Button from "../shared/Button/Button";
import ToggleButton from "../shared/ToggleButton/ToggleButton";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const [selectedButton, setSelectedButton] = useState("Login");

  const handleFormChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await loginUser({ ...data });
    if (response) {
      localStorage.setItem("token", response.token);
      navigate("/DashBoard");
    }
  };

  const handleToggleClick = (label) => {
    setSelectedButton(label);
    if (label === "Sign Up") {
      navigate("/register");
    } else if (label === "Login") {
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.h1}>Quizzie</h1>
        <div className={styles.header}>
          <ToggleButton
            label="Sign Up"
            isSelected={selectedButton === "Sign Up"}
            onClick={() => handleToggleClick("Sign Up")}
          />
          <ToggleButton
            label="Login"
            isSelected={selectedButton === "Login"}
            onClick={() => handleToggleClick("Login")}
          />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.input}
            name="email"
            onChange={handleFormChange}
            type="text"
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.input}
            name="password"
            onChange={handleFormChange}
            type="text"
          />
        </div>
        <Button
          onClick={handleSubmit}
          className={styles.button}
          label="Log in"
        />
      </div>
    </div>
  );
}

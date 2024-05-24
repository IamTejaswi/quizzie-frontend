import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../apis/auth";

export default function Login() {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: "", password: "" });
     const handleFormChange = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
       event.preventDefault();

        const response = await loginUser({...data})
        if (response) {
            localStorage.setItem("token", response.token);
            navigate("/DashBoard");
        }
}
return (
  <div className={styles.container}>
    <h1 className={styles.h1}>Quizzie</h1>
    <div className={styles.header}>
      <button onClick={() => navigate("/register")}>signUp</button>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
    <div>
      Email{" "}
      <input
        className={styles.input}
        name="email"
        onChange={handleFormChange}
        type={"text"}
      ></input>
    </div>
    <div>
      Password{" "}
      <input
        className={styles.input}
        name="password"
        onChange={handleFormChange}
        type={"text"}
      ></input>
    </div>
    <button onClick={handleSubmit} className={styles.button}>
      Log in
    </button>
  </div>
);
}
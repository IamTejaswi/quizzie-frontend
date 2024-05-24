import React, { useState } from "react";
import styles from "./Register.module.css";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../apis/auth";

export default function Register() {
     const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
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
        
    }
    return (
      <div className={styles.container}>
        <h1 className={styles.h1}>Quizzie</h1>
        <div className={styles.header}>
          <button onClick={()=>navigate('/register')} >signUp</button>
          <button onClick={()=>navigate('/login')}>Login</button>
        </div>
        <div>
          Name{" "}
          <input
            className={styles.input}
            name="name"
            onChange={handleChange}
            type={"text"}
          ></input>
        </div>
        <div>
          Email{" "}
          <input
            className={styles.input}
            name="email"
            onChange={handleChange}
            type={"text"}
          ></input>
        </div>
        <div>
          Password{" "}
          <input
            className={styles.input}
            name="password"
            onChange={handleChange}
            type={"text"}
          ></input>
        </div>
        <div>
          confirm Password{" "}
          <input
            className={styles.input}
            name="confirmPassword"
            onChange={handleChange}
            type={"text"}
          ></input>
        </div>
        <button onClick={handleSubmit}  className={styles.button}>
          Sign-Up
        </button>
      </div>
    );
}

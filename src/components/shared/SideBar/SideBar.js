import React from "react";
import styles from "../SideBar/sideBar.module.css";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.topSection}>
        <h1>Quizzie</h1>
      </div>
      <div className={styles.middleSection}>
        <Link className={styles.link} to="/dashboard">
          Dashboard
        </Link>
        <Link className={styles.link} to="/analytics">
          Analytics
        </Link>
        <Link className={styles.link} to="/create-quiz">
          Create a Quiz
        </Link>
      </div>
      <div className={styles.bottomSection}>
        <Link className={styles.link} to="/logout">
          Log Out
        </Link>
      </div>
    </div>
  );
}

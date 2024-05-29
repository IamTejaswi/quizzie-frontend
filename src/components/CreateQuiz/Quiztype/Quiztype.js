import React from "react";
import styles from "../Quiztype/Quiztype.module.css";
import GlowBtn from "../../shared/GlowBtn/GlowBtn";

export default function Quiztype({ q }) {
  return (
    <div className={styles.Container}>
      <input className={styles.Quizname} placeholder="Quiz name" />
      <div className={styles.Quiztype_container}>
        <label className={styles.name}>Quiz Type</label>
        <GlowBtn text="Q & A" className={styles.option1Btn} />
        <GlowBtn text="Poll Type" className={styles.option2Btn} />
      </div>
      <div className={styles.actionbtn}>
        <GlowBtn
          text="Cancel"
          onClick={() => q(false)} 
          className={styles.cancelBtn}
        />
        <GlowBtn text="Continue" className={styles.continuebtn} />
      </div>
    </div>
  );
}


import React from "react";
import "./GlowBtn.css"


const GlowBtn = ({ text, onClick, className }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default GlowBtn;




import React from "react";
import "./ToggleButton.css";

const ToggleButton = ({ label, isSelected, onClick }) => {
  return (
    <button
      className={`toggle-button ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ToggleButton;

import React, { useState } from "react";
import styles from "../Questions/Questions.module.css";
import GlowBtn from "../../shared/GlowBtn/GlowBtn";
import deleteIcon from "../../../assets/delete.png";

const Questions = ({}) => {
  const [optionType, setOptionType] = useState("text");
  const [options, setOptions] = useState([
    { id: 1, value: "", isCorrect: false },
    { id: 2, value: "", isCorrect: false },
    { id: 3, value: "", isCorrect: false },
  ]);

  const handleOptionChange = (event) => {
    setOptionType(event.target.value);
  };

  const handleOptionInputChange = (id, event) => {
    const newOptions = options.map((option) => {
      if (option.id === id) {
        return { ...option, value: event.target.value };
      }
      return option;
    });
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    const newOption = { id: options.length + 1, value: "", isCorrect: false };
    setOptions([...options, newOption]);
  };

  const handleCorrectOptionChange = (id) => {
    const newOptions = options.map((option) => {
      return { ...option, isCorrect: option.id === id };
    });
    setOptions(newOptions);
  };

  const handleDeleteOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  return (
    <div className={styles.content}>
      <div className={styles.questionNo}>1</div>
      <input className={styles.Question} placeholder="Poll Question" />
      <div className={styles.optionType}>
        <label>Option Type</label>
        <label>
          <input
            type="radio"
            value="text"
            checked={optionType === "text"}
            onChange={handleOptionChange}
          />
          Text
        </label>
        <label>
          <input
            type="radio"
            value="imageURL"
            checked={optionType === "imageURL"}
            onChange={handleOptionChange}
          />
          Image URL
        </label>
        <label>
          <input
            type="radio"
            value="textAndImageURL"
            checked={optionType === "textAndImageURL"}
            onChange={handleOptionChange}
          />
          Text and Image URL
        </label>
      </div>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={option.id} className={styles.optionRow}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="correctOption"
                checked={option.isCorrect}
                onChange={() => handleCorrectOptionChange(option.id)}
              />
            </label>
            {optionType === "text" && (
              <input
                className={`${styles.optionInput} ${
                  option.isCorrect ? styles.correctOption : ""
                }`}
                value={option.value}
                onChange={(e) => handleOptionInputChange(option.id, e)}
                placeholder="Text"
              />
            )}
            {optionType === "imageURL" && (
              <input
                className={`${styles.optionInput} ${
                  option.isCorrect ? styles.correctOption : ""
                }`}
                value={option.value}
                onChange={(e) => handleOptionInputChange(option.id, e)}
                placeholder="Image URL"
              />
            )}
            {optionType === "textAndImageURL" && (
              <div className={styles.textandimage}>
                <input
                  className={`${styles.optionInput} ${
                    option.isCorrect ? styles.correctOption : ""
                  }`}
                  value={option.value}
                  onChange={(e) => handleOptionInputChange(option.id, e)}
                  placeholder="Text"
                />
                <input
                  className={`${styles.optionInput} ${
                    option.isCorrect ? styles.correctOption : ""
                  }`}
                  value={option.value}
                  onChange={(e) => handleOptionInputChange(option.id, e)}
                  placeholder="Image URL"
                />
              </div>
            )}
            {index >= 2 && (
              <button
                className={styles.deleteBtn}
                onClick={() => handleDeleteOption(option.id)}
              >
                <img src={deleteIcon} alt="Delete" />
              </button>
            )}
          </div>
        ))}
        {options.length < 4 && (
          
          <GlowBtn text="Add Option" className={styles.addOptionBtn} onClick={handleAddOption}/>
        )}
      </div>
      <div className={styles.actionbtn}>
        <GlowBtn text="Cancel" className={styles.cancelBtn} />
        <GlowBtn text="Create Quiz" className={styles.createbtn} />
      </div>
    </div>
  );
};

export default Questions;

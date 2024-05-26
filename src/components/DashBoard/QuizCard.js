// src/QuizCard.js
import React from 'react';

function QuizCard({ title, date, views }) {
  return (
    <div className="quiz-card">
      <h4>{title}</h4>
      <p>Created on: {date}</p>
      <p>
        {views} <span role="img" aria-label="views">👁️</span>
      </p>
    </div>
  );
}

export default QuizCard;

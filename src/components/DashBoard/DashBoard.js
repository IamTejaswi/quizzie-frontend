// src/Dashboard.js
import React from 'react';
import QuizCard from './QuizCard';
import './sidebar.css'

function Dashboard() {
  const quizzes = new Array(12).fill({
    title: 'Quiz 1',
    date: '04 Sep, 2023',
    views: 667,
  });

  return (
    <div className="some">
    <div className="dashboard">
      <div className="stats">
        <div className="stat">
          <h2>12</h2>
          <p>Quiz Created</p>
        </div>
        <div className="stat">
          <h2>110</h2>
          <p>questions Created</p>
        </div>
        <div className="stat">
          <h2>989</h2>
          <p>Total Impressions</p>
        </div>
      </div>
      <div className="trending-quizzes">
        <h3>Trending Quizzes</h3>
        <div className="quizzes-grid">
          {quizzes.map((quiz, index) => (
            <QuizCard key={index} {...quiz} />
          ))}
        </div>
      </div>
      </div>
      </div>
  );
}

export default Dashboard;

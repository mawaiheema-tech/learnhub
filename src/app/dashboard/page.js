"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const savedResults = JSON.parse(
      localStorage.getItem("learnhub-quiz-results") || "[]"
    );

    setResults(savedResults);
  }, []);

  const totalQuizzes = results.length;

  const bestScore =
    results.length > 0
      ? Math.max(...results.map((item) => item.percentage))
      : 0;

  const averageScore =
    results.length > 0
      ? Math.round(
          results.reduce((total, item) => total + item.percentage, 0) /
            results.length
        )
      : 0;

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <p className="dashboard-label">LEARNHUB / MY LEARNING</p>
        <h1>My Learning Dashboard</h1>
        <p>Track your learning journey and quiz performance.</p>
      </div>

      <section className="dashboard-stats">
        <div className="dashboard-stat-card">
          <h3>Total Quizzes</h3>
          <p>{totalQuizzes}</p>
        </div>

        <div className="dashboard-stat-card">
          <h3>Best Score</h3>
          <p>{bestScore}%</p>
        </div>

        <div className="dashboard-stat-card">
          <h3>Average Score</h3>
          <p>{averageScore}%</p>
        </div>
      </section>

      <section className="dashboard-results">
        <h2>Quiz History</h2>

        {results.length === 0 ? (
          <p>No quiz attempts yet. Complete a quiz to see your results here.</p>
        ) : (
          results.map((result, index) => (
            <div className="dashboard-result-card" key={index}>
              <div>
                <h3>{result.courseTitle}</h3>
                <p>
                  {new Date(result.date).toLocaleDateString()}
                </p>
              </div>

              <div className="dashboard-result-score">
                <strong>
                  {result.score}/{result.total}
                </strong>
                <span>{result.percentage}%</span>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
}
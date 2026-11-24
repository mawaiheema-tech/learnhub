"use client";

import { useEffect, useState } from "react";
import LearningStreak from "./LearningStreak";
import ContinueLearning from "./ContinueLearning";

export default function Dashboard() {
  const [results, setResults] = useState([]);
  
  const [courseProgress, setCourseProgress] = useState([]);

const courses = [
  { id: "1", title: "Full Stack Web Development" },
  { id: "2", title: "Python Programming Masterclass" },
  { id: "3", title: "UI/UX Design Fundamentals" },
  { id: "4", title: "Data Structures and Algorithms" },
  { id: "5", title: "Cybersecurity Essentials" },
  { id: "6", title: "Digital Marketing Strategy" },
  { id: "7", title: "Advanced Java Programming" },
  { id: "8", title: "Product Design and Innovation" },
];

  useEffect(() => {
    const savedResults = JSON.parse(
      localStorage.getItem("learnhub-quiz-results") || "[]"
    );

    setResults(savedResults);
  }, []);

  useEffect(() => {
  const progress = courses.map((course) => {
    const completedLessons = JSON.parse(
      localStorage.getItem(`learnhub-completed-${course.id}`) || "[]"
    );

    const totalLessons = 6;

    return {
      ...course,
      completed: completedLessons.length,
      total: totalLessons,
      percentage: Math.round(
        (completedLessons.length / totalLessons) * 100
      ),
    };
  });

  setCourseProgress(progress);
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
      
      <section className="dashboard-progress">
        <h2>My Course Progress</h2>
        <p className="progress-description">
          Keep learning and track how far you've come.
        </p>

        <div className="progress-grid">
          {courseProgress.map((course) => (
            <div className="progress-card" key={course.id}>
              <div
                className="progress-ring"
                style={{
                  background: `conic-gradient(#23b9c8 ${course.percentage}%, #eaf0f6 ${course.percentage}% 100%)`,
              }}
            >
              <div className="progress-ring-inner">
                <strong>{course.percentage}%</strong>
              </div>
        </div>

        <h3>{course.title}</h3>

        <p>
          {course.completed} of {course.total} lessons completed
        </p>

        <a href={`/courses/${course.id}/learn`}>
          {course.percentage === 100
            ? "Review Course"
            : "Continue Learning"}
        </a>
      </div>
    ))}
  </div>
</section>
<ContinueLearning />
<LearningStreak />

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
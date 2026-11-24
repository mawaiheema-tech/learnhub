"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getRecentCourses } from "../utils/learningActivity";

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

export default function ContinueLearning() {
  const [recentCourses, setRecentCourses] = useState([]);

  useEffect(() => {
    const recent = getRecentCourses();

    const updatedCourses = recent
      .map((item) => {
        const course = courses.find(
          (course) => course.id === item.courseId
        );

        if (!course) return null;

        const completed = JSON.parse(
          localStorage.getItem(
            `learnhub-completed-${course.id}`
          ) || "[]"
        );

        return {
          ...course,
          percentage: Math.round(
            (completed.length / 6) * 100
          ),
        };
      })
      .filter(Boolean);

    setRecentCourses(updatedCourses);
  }, []);

  return (
    <section className="continue-learning">
      <h2>Continue Learning</h2>
      <p>Pick up where you left off.</p>

      {recentCourses.length === 0 ? (
        <div className="continue-empty">
          <p>No recently visited courses yet.</p>
          <Link href="/courses">Explore Courses →</Link>
        </div>
      ) : (
        <div className="continue-grid">
          {recentCourses.map((course) => (
            <div className="continue-card" key={course.id}>
              <h3>{course.title}</h3>

              <div className="continue-progress-track">
                <span
                  style={{ width: `${course.percentage}%` }}
                />
              </div>

              <p>{course.percentage}% completed</p>

              <Link href={`/courses/${course.id}/learn`}>
                Continue Learning →
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
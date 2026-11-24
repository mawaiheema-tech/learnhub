"use client";

import { useEffect, useState } from "react";
import { getLearningActivity } from "../utils/learningActivity";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function LearningStreak() {
 const [activity, setActivity] = useState([]);
const [todayValue, setTodayValue] = useState(null);

useEffect(() => {
  setActivity(getLearningActivity());
  setTodayValue(new Date());
}, []);

if (!todayValue) {
  return <section className="learning-streak">Loading learning streak...</section>;
}

const today = new Date(todayValue);
today.setHours(0, 0, 0, 0);

  const activeDays = new Set(activity);

  let currentStreak = 0;
  const streakDate = new Date(today);

  if (!activeDays.has(formatDate(streakDate))) {
    streakDate.setDate(streakDate.getDate() - 1);
  }

  while (activeDays.has(formatDate(streakDate))) {
    currentStreak++;
    streakDate.setDate(streakDate.getDate() - 1);
  }

  let longestStreak = 0;
  let streak = 0;

  const sortedDates = [...activeDays].sort();

  sortedDates.forEach((date, index) => {
    if (index === 0) {
      streak = 1;
    } else {
      const previous = new Date(sortedDates[index - 1]);
      const current = new Date(date);

      const difference =
        (current - previous) / (1000 * 60 * 60 * 24);

      streak = difference === 1 ? streak + 1 : 1;
    }

    longestStreak = Math.max(longestStreak, streak);
  });

  const calendarDays = Array.from({ length: 84 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() - (83 - index));

    return {
      date: formatDate(date),
      label: date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
      }),
      active: activeDays.has(formatDate(date)),
    };
  });

  return (
    <section className="learning-streak">
      <h2>Your Learning Streak 🔥</h2>
      <p>Consistency is the key to progress.</p>

      <div className="streak-stats">
        <div>
          <strong>{currentStreak}</strong>
          <span>Current Streak</span>
        </div>

        <div>
          <strong>{longestStreak}</strong>
          <span>Longest Streak</span>
        </div>

        <div>
          <strong>{activeDays.size}</strong>
          <span>Active Days</span>
        </div>
      </div>

      <div className="streak-calendar">
        {calendarDays.map((day) => (
          <div
            key={day.date}
            className={day.active ? "streak-day active" : "streak-day"}
            title={`${day.label}${day.active ? " - Studied" : " - No activity"}`}
          />
        ))}
      </div>
    </section>
  );
}
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CourseActionButton({
  courseId,
  className,
}) {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const completed = JSON.parse(
      localStorage.getItem(`learnhub-completed-${courseId}`) || "[]"
    );

    const recent = JSON.parse(
      localStorage.getItem("learnhub-recent-courses") || "[]"
    );

    const hasVisited = recent.some(
      (course) => course.courseId === String(courseId)
    );

    if (completed.length >= 6) {
      setStatus("completed");
    } else if (completed.length > 0 || hasVisited) {
      setStatus("continue");
    } else {
      setStatus("start");
    }
  }, [courseId]);

  const labels = {
    loading: "Loading...",
    start: "Start Learning",
    continue: "Continue Learning",
    completed: "Review Course",
  };

  return (
    <Link
      href={`/courses/${courseId}/learn`}
      className={className}
    >
      {labels[status]} <span>→</span>
    </Link>
  );
}
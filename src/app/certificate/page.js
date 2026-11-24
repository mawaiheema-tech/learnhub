
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function CertificateContent() {
  const searchParams = useSearchParams();

  const course = searchParams.get("course") || "Course Completion";
  const [learnerName, setLearnerName] = useState(
    searchParams.get("name") || ""
  );
  
  const courseId = searchParams.get("courseId");
  
  const [verification, setVerification] = useState("checking");
  const [certificateId, setCertificateId] = useState("");
  const [nameConfirmed, setNameConfirmed] = useState(false);


useEffect(() => {
  if (!courseId) {
    setVerification("locked");
    return;
  }

  try {
    const results = JSON.parse(
      localStorage.getItem("learnhub-quiz-results") || "[]"
    );

    const completedLessons = JSON.parse(
      localStorage.getItem(`learnhub-completed-${courseId}`) || "[]"
    );

    const bestScore = Math.max(
      0,
      ...results
        .filter(
          (result) => String(result.courseId) === String(courseId)
        )
        .map((result) => Number(result.percentage) || 0)
    );

    const eligible =
      bestScore >= 70 && completedLessons.length === 6;

    setVerification(eligible ? "unlocked" : "locked");
  } catch (error) {
    console.error("Certificate verification failed:", error);
    setVerification("locked");
  }
}, [courseId]);

useEffect(() => {
  if (!courseId || verification !== "unlocked") return;

  const storageKey = `learnhub-certificate-${courseId}`;

  let savedId = localStorage.getItem(storageKey);

  if (!savedId) {
    savedId = `LH-${Date.now().toString().slice(-8)}`;
    localStorage.setItem(storageKey, savedId);
  }

  setCertificateId(savedId);
}, [courseId, verification]);

if (verification === "checking") {
  return <p>Verifying your certificate...</p>;
}

if (verification === "locked") {
  return (
    <main className="certificate-page">
      <div className="certificate">
        <h1>Certificate Locked 🔒</h1>
        <p>
          You must complete all 6 lessons and score at least
          70% in the course quiz to unlock this certificate.
        </p>
        <a href="/courses">Explore Courses</a>
      </div>
    </main>
  );
}

if (!nameConfirmed) {
  return (
    <main className="certificate-page">
      <div className="certificate">
        <p className="certificate-brand">LEARNHUB</p>
        <h1>Generate Your Certificate</h1>
        <p>Enter your full name as you want it to appear on your certificate.</p>

        <input
          type="text"
          placeholder="Enter your full name"
          value={learnerName}
          onChange={(e) => setLearnerName(e.target.value)}
        />

        <button
          className="print-certificate"
          disabled={!learnerName.trim()}
          onClick={() => setNameConfirmed(true)}
        >
          Generate Certificate
        </button>
      </div>
    </main>
  );
}

  const completionDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  
  return (
    <main className="certificate-page">
      <div className="certificate">
        <p className="certificate-brand">LEARNHUB</p>

        <h1>Certificate of Completion</h1>

        <p className="certificate-subtitle">
          This certificate is proudly presented to
        </p>

        <h2>{learnerName.trim()}</h2>

        <p className="certificate-description">
          For successfully completing the course
        </p>

        <h3>{course}</h3>

        <div className="certificate-footer">
          <div>
            <strong>{completionDate}</strong>
            <p>Completion Date</p>
          </div>

          <div>
            <strong>{certificateId}</strong>
            <p>Certificate ID</p>
          </div>
        </div>

        <button
          className="print-certificate"
          onClick={() => window.print()}
        >
          Print / Save as PDF
        </button>
      </div>
    </main>
  );
}

export default function CertificatePage() {
  return (
    <Suspense fallback={<p>Loading certificate...</p>}>
      <CertificateContent />
    </Suspense>
  );
}

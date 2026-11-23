
"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CertificateContent() {
  const searchParams = useSearchParams();

  const course = searchParams.get("course") || "Course Completion";
  const name = searchParams.get("name") || "Learner Name";

  const completionDate = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const certificateId = `LH-${Date.now().toString().slice(-8)}`;

  return (
    <main className="certificate-page">
      <div className="certificate">
        <p className="certificate-brand">LEARNHUB</p>

        <h1>Certificate of Completion</h1>

        <p className="certificate-subtitle">
          This certificate is proudly presented to
        </p>

        <h2>{name}</h2>

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

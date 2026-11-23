
"use client";

import { useState ,useRef ,useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Suspense } from "react";
import Quiz from "./Quiz.js";

const lessons = [
  { id: 1, title: "Introduction to the Course", duration: "08:24", module: "Getting Started" },
  { id: 2, title: "Understanding the Fundamentals", duration: "12:40", module: "Getting Started" },
  { id: 3, title: "Setting Up Your Environment", duration: "10:15", module: "Getting Started" },
  { id: 4, title: "Core Concepts Explained", duration: "15:32", module: "Core Concepts" },
  { id: 5, title: "Practical Demonstration", duration: "18:20", module: "Core Concepts" },
  { id: 6, title: "Building Your First Project", duration: "21:10", module: "Practical Learning" },
];
const transcriptLines = [
  {
    time: 0,
    text: "Introduction: Understanding the fundamentals of computers."
  },
  {
    time: 60,
    text: "What is a computer? A computer accepts input, processes data, and produces output."
  },
  {
    time: 120,
    text: "Functional units: Input unit, output unit, memory unit, and processor."
  },
  {
    time: 180,
    text: "The CPU performs processing using the Arithmetic Logic Unit and Control Unit."
  },
  {
    time: 240,
    text: "Computer architecture explains how hardware components communicate."
  },
  {
    time: 300,
    text: "Hardware and software work together to operate a computer system."
  },
  {
    time: 360,
    text: "An operating system manages memory, files, processes, and hardware resources."
  },
];

function LearnPageContent() {
  const { id: courseId } = useParams();
  const [currentLesson, setCurrentLesson] = useState(0);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [completedLoaded, setCompletedLoaded] = useState(false);
  const [speed, setSpeed] = useState("1");
  const [showTranscript, setShowTranscript] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [notes, setNotes] = useState([]);
  const [noteText, setNoteText] = useState("");
  const [notesLoaded, setNotesLoaded] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);
  const [progressLoaded, setProgressLoaded] = useState(false);
  const [activeTranscript, setActiveTranscript] = useState(0);
  const togglePlay = () => {
  if (!videoRef.current) return;

  if (videoRef.current.paused) {
    videoRef.current.play();
  } else {
    videoRef.current.pause();
  }
};

useEffect(() => {
  try {
    const savedNotes = localStorage.getItem(`learnhub-notes-${courseId}`);

    if (savedNotes) {
      const parsedNotes = JSON.parse(savedNotes);

      if (Array.isArray(parsedNotes)) {
        setNotes(parsedNotes);
      }
    }
  } catch (error) {
    console.error("Unable to load saved notes:", error);
  } finally {
    setNotesLoaded(true);
  }
}, []);

useEffect(() => {
  setProgressLoaded(false);

  const savedProgress = localStorage.getItem(
    `learnhub-progress-${courseId}-${currentLesson}`
  );

  setVideoProgress(savedProgress ? Number(savedProgress) : 0);
  setProgressLoaded(true);
}, [courseId, currentLesson]);

useEffect(() => {
  const savedLessons = localStorage.getItem(
    `learnhub-completed-${courseId}`
  );

  if (savedLessons) {
    setCompletedLessons(JSON.parse(savedLessons));
  }

  setCompletedLoaded(true);
}, [courseId]);

useEffect(() => {
  if (completedLoaded) {
    localStorage.setItem(
      `learnhub-completed-${courseId}`,
      JSON.stringify(completedLessons)
    );
  }
}, [completedLessons, completedLoaded, courseId]);

useEffect(() => {
  if (notesLoaded) {
    localStorage.setItem(`learnhub-notes-${courseId}`, JSON.stringify(notes));
  }
}, [notes, notesLoaded]);

  const progress = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  function toggleComplete() {
    setCompletedLessons((previous) =>
      previous.includes(currentLesson)
        ? previous.filter((item) => item !== currentLesson)
        : [...previous, currentLesson]
    );
  }

  function changeLesson(index) {
    setCurrentLesson(index);
  }
  function addNote() {
  if (!noteText.trim()) return;

  const currentTime = videoRef.current?.currentTime || 0;

  setNotes((previous) => [
    ...previous,
    {
      id: Date.now(),
      lesson: currentLesson,
      time: currentTime,
      text: noteText.trim(),
    },
  ]);

  setNoteText("");
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function jumpToNote(time) {
  if (videoRef.current) {
    videoRef.current.currentTime = time;
    videoRef.current.play();
  }
}
function deleteNote(noteId) {
  setNotes((previous) =>
    previous.filter((note) => note.id !== noteId)
  );
}


  return (
    <main className="learn-page">
      <header className="learn-header">
        <Link href="/" className="logo">
          learn<span>hub.</span>
        </Link>

        <Link href="/courses" className="learn-back">
          ← All Courses
        </Link>

        <div className="learn-header-progress">
          <span>Your progress</span>
          <strong>{progress}%</strong>
        </div>
      </header>

      <div className="learn-layout">
        <section className="learning-main">
          <div className="learning-breadcrumb">
            <Link href="/courses">Courses</Link>
            <span>/</span>
            <span>Learning Room</span>
          </div>

          <div className="video-container">
            {progressLoaded && (
             <video
              ref={videoRef}
              key={currentLesson}
              className="course-video"
              controls
              preload="metadata"
              onDurationChange={(event) => {
                setDuration(event.currentTarget.duration);
              }}

              onPlay={() => setIsPlaying(true)}

              onPause={() => setIsPlaying(false)}
              playsInline
              onLoadedMetadata={(event) => {
                const savedTime = Number(
                  localStorage.getItem(
                    `learnhub-progress-${courseId}-${currentLesson}`
                  )
                ) || 0;
                
                event.currentTarget.currentTime = savedTime;
            }}
              onTimeUpdate={(event) => {
                const currentTime = event.currentTarget.currentTime;
                
                setCurrentTime(currentTime);
  localStorage.setItem(
    `learnhub-progress-${courseId}-${currentLesson}`,
    String(currentTime)
  );

  const currentLine = transcriptLines.reduce(
    (active, line, index) =>
      currentTime >= line.time ? index : active,
    0
  );

  setActiveTranscript(currentLine);
}}
              onRateChange={(event) =>
                setSpeed(String(event.currentTarget.playbackRate))
              }
            >
              <source
                src="https://edshare.gcu.ac.uk/3952/1.hasvideo_mp4ThumbnailVersion/FoC-%20Lecture1%281%29.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
            )}
          </div>
          
          <div className="custom-video-controls">
            <button onClick={togglePlay}>
              {isPlaying ? "❚❚ Pause" : "▶ Play"}
            </button>

             <input
             type="range"
             min="0"
             max={duration || 0}
             value={currentTime}
             onChange={(event) => {
              const newTime = Number(event.target.value);
              videoRef.current.currentTime = newTime;
              setCurrentTime(newTime);
             }}
            />
            <span>
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            <select
  value={speed}
  onChange={(event) => {
    const newSpeed = event.target.value;
    videoRef.current.playbackRate = Number(newSpeed);
    setSpeed(newSpeed);
  }}
>
  <option value="0.5">0.5x</option>
  <option value="1">1x</option>
  <option value="1.5">1.5x</option>
  <option value="2">2x</option>
</select>
          </div>

          <div className="lesson-heading">
            <div>
              <p className="learn-eyebrow">
                {lessons[currentLesson].module}
              </p>
              <h1>{lessons[currentLesson].title}</h1>
            </div>

            <button
              className={
                completedLessons.includes(currentLesson)
                  ? "complete-button completed"
                  : "complete-button"
              }
              onClick={toggleComplete}
            >
              {completedLessons.includes(currentLesson)
                ? "✓ Completed"
                : "Mark as complete"}
            </button>
          </div>

          <div className="learning-tabs">
            <button
              className={!showTranscript ? "active" : ""}
              onClick={() => setShowTranscript(false)}
            >
              Overview
            </button>
            <button
              className={showTranscript ? "active" : ""}
              onClick={() => setShowTranscript(true)}
            >
              Transcript
            </button>
          </div>

<div className="lesson-notes">
  <h3>My Lesson Notes</h3>
  <p>Save important points while watching your lesson.</p>

  <textarea
    value={noteText}
    onChange={(event) => setNoteText(event.target.value)}
    placeholder="Write your lesson note here..."
    rows={4}
  />

  <button onClick={addNote} disabled={!noteText.trim()}>
    + Save Note at Current Time
  </button>

  <div className="saved-notes">
    {notes
      .filter((note) => note.lesson === currentLesson)
      .map((note) => (
      
<div className="saved-note" key={note.id}>
  <div className="saved-note-header">
    <button
      className="note-timestamp"
      onClick={() => jumpToNote(note.time)}
    >
      ▶ {formatTime(note.time)}
    </button>

    <button
      className="delete-note"
      onClick={() => deleteNote(note.id)}
    >
      Delete
    </button>
  </div>

  <p>{note.text}</p>
</div>
 
      ))}

    {notes.filter((note) => note.lesson === currentLesson).length === 0 && (
      <p className="empty-notes">
        No notes yet. Save your first learning note!
      </p>
    )}
  </div>
</div>


          {showTranscript && (
            <div className="transcript-panel">
              <h3>Lesson Transcript</h3>
              
              <div className="transcript-lines">
                {transcriptLines.map((line, index) => (
                  <p
                    key={index}
                    className={
                      activeTranscript === index
                      ? "transcript-line active"
                      : "transcript-line"
                    }
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.currentTime = line.time;
                        videoRef.current.play();
                      }
                    }}
                  >
                    <span>{formatTime(line.time)}</span>
                    {line.text}
                    </p>
                  ))}
                  </div>
                  </div>
                )}

          {!showTranscript && (
            <div className="lesson-description">
              <h3>About this lesson</h3>
              <p>
                Take your time to understand each concept. Complete
                the lesson and mark it as finished to track your
                learning journey.
              </p>
            </div>
          )}

          <div className="lesson-navigation">
            <button
              disabled={currentLesson === 0}
              onClick={() => changeLesson(currentLesson - 1)}
            >
              ← Previous lesson
            </button>

            <button
              disabled={currentLesson === lessons.length - 1}
              onClick={() => changeLesson(currentLesson + 1)}
            >
              Next lesson →
            </button>
          </div>
          <Quiz 
            courseId={courseId}
            completedLessons={completedLessons}
            totalLessons={lessons.length}
          />
        </section>

        <aside className="lesson-sidebar">
          <div className="sidebar-heading">
            <div>
              <p>YOUR LEARNING PATH</p>
              <h2>Course content</h2>
            </div>
            <span>{lessons.length} lessons</span>
          </div>

          <div className="sidebar-progress">
            <div className="sidebar-progress-info">
              <span>Course progress</span>
              <strong>{progress}%</strong>
            </div>
            <div className="sidebar-progress-track">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>

          <div className="lesson-list">
            {lessons.map((lesson, index) => (
              <button
                key={lesson.id}
                className={
                  currentLesson === index
                    ? "lesson-item active"
                    : "lesson-item"
                }
                onClick={() => changeLesson(index)}
              >
                <span className="lesson-status">
                  {completedLessons.includes(index) ? "✓" : "▶"}
                </span>

                <span className="lesson-item-content">
                  <strong>{lesson.title}</strong>
                  <small>{lesson.duration}</small>
                </span>
              </button>
            ))}
          </div>

          <div className="learning-tip">
            <span>✦</span>
            <p>
              Keep learning every day. Small steps lead to big progress.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
export default function LearnPage() {
  return (
    <Suspense fallback={<p>Loading learning room...</p>}>
      <LearnPageContent />
    </Suspense>
  );
}
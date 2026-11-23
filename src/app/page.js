
const courses = [
  {
    category: "TECHNOLOGY",
    title: "The Art of Modern Web Development",
    instructor: "LearnHub Academy",
    duration: "8 weeks",
    level: "Beginner",
    color: "#777D67",
    number: "01",
  },
  {
    category: "DESIGN",
    title: "Designing Experiences That Matter",
    instructor: "Creative Studio",
    duration: "6 weeks",
    level: "Intermediate",
    color: "#C58C82",
    number: "02",
  },
  {
    category: "PROGRAMMING",
    title: "Python: From Logic to Creation",
    instructor: "Tech Faculty",
    duration: "10 weeks",
    level: "Beginner",
    color: "#B58B55",
    number: "03",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          learn<span>hub.</span>
        </a>

        <div className="nav-links">
          <a href="/courses">Explore</a>
          <a href="/dashboard">Dashboard</a>
          <a href="#about">About</a>
          <a href="#journey">Your Journey</a>
        </div>

        <a href="/courses" className="nav-button">
          Start Learning <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="eyebrow-line" />
            A NEW WAY TO LEARN
          </p>

          <h1>
            Knowledge is an
            <br />
            investment.
            <br />
            <span>Make it count.</span>
          </h1>

          <p className="hero-description">
            Discover thoughtfully designed courses, master valuable
            skills, and build a future without limits. Your next chapter
            starts here.
          </p>

          <div className="hero-actions">
            <a href="/courses" className="primary-button">
              Explore Courses <span>↗</span>
            </a>
            <a href="#about" className="text-button">
              Discover LearnHub <span>→</span>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>01</strong>
              <span>Learn at your pace</span>
            </div>
            <div>
              <strong>∞</strong>
              <span>Possibilities ahead</span>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-circle">
            <div className="art-inner">
              <span className="art-small">THE PURSUIT OF</span>
              <span className="art-large">Better.</span>
              <span className="art-bottom">KNOWLEDGE · GROWTH · PURPOSE</span>
            </div>
          </div>

          <div className="floating-note note-top">
            <span>✳</span>
            Curiosity looks good on you.
          </div>

          <div className="floating-note note-bottom">
            <span>✦</span>
            Make today meaningful.
          </div>

          <span className="art-decoration">L / H</span>
        </div>

        <div className="hero-footer">
          <span>01 — LEARN WITH PURPOSE</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="intro-section" id="about">
        <div className="intro-label">A LITTLE ABOUT US</div>
        <div className="intro-content">
          <h2>
            Learning should feel like
            <span> opening a door,</span> not climbing a wall.
          </h2>
          <p>
            We bring quality learning experiences, practical knowledge,
            and meaningful progress together in one place. Learn
            something new. Build something remarkable.
          </p>
        </div>
      </section>

      <section className="courses-section" id="courses">
        <div className="section-heading">
          <div>
            <p className="eyebrow">THE LEARNING COLLECTION</p>
            <h2>Find your next <span>passion.</span></h2>
          </div>
          <a href="/courses" className="view-all">
            View all courses ↗
          </a>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <article className="course-card" key={course.number}>
              <div
                className="course-art"
                style={{ backgroundColor: course.color }}
              >
                <span className="course-number">{course.number}</span>
                <span className="course-symbol">
                  {course.number === "01"
                    ? "⌘"
                    : course.number === "02"
                    ? "✳"
                    : "λ"}
                </span>
                <span className="course-category">{course.category}</span>
              </div>

              <div className="course-info">
                <div className="course-meta">
                  <span>{course.level}</span>
                  <span>{course.duration}</span>
                </div>
                <h3>{course.title}</h3>
                <p>{course.instructor}</p>
                <a href="#journey" className="course-link">
                  Explore course <span>↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="journey-section" id="journey">
        <p className="eyebrow">YOUR STORY STARTS HERE</p>
        <h2>
          Don't just collect
          <br />
          knowledge. <span>Use it.</span>
        </h2>
        <p>
          Every skill you learn is another possibility you create.
        </p>
        <a href="#courses" className="light-button">
          Begin your journey ↗
        </a>
      </section>

      <footer className="footer">
        <a href="#" className="logo">
          learn<span>hub.</span>
        </a>
        <p>Learn with purpose. Grow without limits.</p>
        <span>© 2026 LearnHub</span>
      </footer>
    </main>
  );
}

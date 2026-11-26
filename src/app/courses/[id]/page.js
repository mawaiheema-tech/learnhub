import CourseActionButton from "./CourseActionButton";
import Link from "next/link";
import { notFound } from "next/navigation";
export const instant = false;

const courses = [
  {
    id: "1",
    title: "Full Stack Web Development",
    instructor: "LearnHub Academy",
    category: "Technology",
    level: "Beginner",
    duration: 8,
    lessons: 42,
    color: "#167E91",
    symbol: "</>",
    description: "Learn to build modern websites and web applications.",
    overview:
      "Explore the complete journey of web development, from creating beautiful interfaces to building powerful server-side applications. Develop practical skills through structured lessons and projects.",
    objectives: [
      "Understand HTML, CSS and JavaScript fundamentals",
      "Build responsive and interactive websites",
      "Understand frontend and backend development",
      "Work with APIs and databases",
      "Build and deploy a full-stack project",
    ],
    modules: [
      { title: "Introduction to Web Development", lessons: ["How the Web Works", "Frontend vs Backend", "Developer Tools"] },
      { title: "HTML and CSS Fundamentals", lessons: ["HTML Structure", "CSS Styling", "Responsive Layouts"] },
      { title: "JavaScript Essentials", lessons: ["Variables and Functions", "DOM Manipulation", "Events"] },
      { title: "Backend Development", lessons: ["Server Fundamentals", "APIs", "Database Basics"] },
      { title: "Final Project", lessons: ["Build a Full-Stack Website", "Testing and Deployment"] },
    ],
  },
  {
    id: "2",
    title: "Python Programming Masterclass",
    instructor: "Tech Faculty",
    category: "Programming",
    level: "Beginner",
    duration: 6,
    lessons: 35,
    color: "#B58B55",
    symbol: "Py",
    description: "Start programming with Python and build practical projects.",
    overview: "Learn Python step by step, from basic syntax to practical programming concepts. Build confidence through hands-on exercises and projects.",
    objectives: ["Understand Python syntax", "Use variables and data types", "Work with loops and functions", "Understand object-oriented programming", "Build Python projects"],
    modules: [
      { title: "Getting Started with Python", lessons: ["Introduction to Python", "Installing Python", "Your First Program"] },
      { title: "Python Fundamentals", lessons: ["Variables and Data Types", "Operators", "Input and Output"] },
      { title: "Control Flow", lessons: ["Conditional Statements", "Loops", "Nested Loops"] },
      { title: "Functions and Collections", lessons: ["Functions", "Lists and Tuples", "Dictionaries and Sets"] },
      { title: "Practical Python Project", lessons: ["Project Planning", "Building the Application"] },
    ],
  },
  {
    id: "3",
    title: "UI/UX Design Fundamentals",
    instructor: "Creative Studio",
    category: "Design",
    level: "Intermediate",
    duration: 5,
    lessons: 28,
    color: "#777D67",
    symbol: "✳",
    description: "Understand user experience and create beautiful interfaces.",
    overview: "Discover the principles behind effective digital experiences. Learn to understand users, create wireframes and design intuitive interfaces.",
    objectives: ["Understand UI and UX principles", "Conduct basic user research", "Create wireframes", "Build interface prototypes", "Evaluate usability"],
    modules: [
      { title: "Introduction to UI/UX", lessons: ["UI vs UX", "Design Principles", "Understanding Users"] },
      { title: "User Research", lessons: ["Research Methods", "User Personas", "User Journeys"] },
      { title: "Wireframing", lessons: ["Low-Fidelity Wireframes", "Layout Planning", "Information Architecture"] },
      { title: "Visual Design", lessons: ["Typography and Colour", "Design Systems", "Prototyping"] },
      { title: "Usability and Testing", lessons: ["Usability Principles", "Testing a Design"] },
    ],
  },
  {
    id: "4",
    title: "Data Structures and Algorithms",
    instructor: "Code Academy",
    category: "Programming",
    level: "Advanced",
    duration: 10,
    lessons: 55,
    color: "#526B9B",
    symbol: "{ }",
    description: "Strengthen problem-solving skills with DSA concepts.",
    overview: "Build a strong foundation in data structures and algorithms. Learn how to analyze problems, select efficient solutions and improve your coding skills.",
    objectives: ["Understand time and space complexity", "Implement common data structures", "Learn searching and sorting", "Understand trees and graphs", "Solve algorithmic problems"],
    modules: [
      { title: "Algorithm Fundamentals", lessons: ["Introduction to Algorithms", "Time Complexity", "Space Complexity"] },
      { title: "Arrays and Strings", lessons: ["Array Operations", "String Problems", "Two Pointer Technique"] },
      { title: "Linked Lists and Stacks", lessons: ["Linked Lists", "Stacks", "Queues"] },
      { title: "Trees and Graphs", lessons: ["Binary Trees", "Binary Search Trees", "Graph Traversal"] },
      { title: "Advanced Algorithms", lessons: ["Dynamic Programming", "Greedy Algorithms", "Practice Problems"] },
    ],
  },
  {
    id: "5",
    title: "Cybersecurity Essentials",
    instructor: "Security Lab",
    category: "Technology",
    level: "Intermediate",
    duration: 7,
    lessons: 38,
    color: "#8C5C7B",
    symbol: "⌘",
    description: "Explore network security, vulnerabilities and cyber defence.",
    overview: "Explore essential cybersecurity concepts, common digital threats and defensive techniques. Understand how security professionals identify and reduce risks.",
    objectives: ["Understand cybersecurity fundamentals", "Learn network security basics", "Identify common vulnerabilities", "Understand phishing and social engineering", "Explore defensive security practices"],
    modules: [
      { title: "Cybersecurity Foundations", lessons: ["Introduction to Cybersecurity", "Security Principles", "Threat Landscape"] },
      { title: "Network Security", lessons: ["Networking Basics", "Common Network Threats", "Firewalls"] },
      { title: "Vulnerability Assessment", lessons: ["Understanding Vulnerabilities", "Scanning Fundamentals", "Risk Assessment"] },
      { title: "Web and Email Security", lessons: ["Web Security Basics", "Phishing Awareness", "Email Threats"] },
      { title: "Defensive Security", lessons: ["Incident Response", "Security Best Practices", "Final Assessment"] },
    ],
  },
  {
    id: "6",
    title: "Digital Marketing Strategy",
    instructor: "Growth Academy",
    category: "Business",
    level: "Beginner",
    duration: 4,
    lessons: 22,
    color: "#C58C82",
    symbol: "↗",
    description: "Learn branding, digital campaigns and marketing fundamentals.",
    overview: "Understand how businesses connect with audiences online. Explore content, social media, search engines and digital campaign planning.",
    objectives: ["Understand digital marketing channels", "Learn content strategy", "Explore SEO fundamentals", "Understand social media marketing", "Measure campaign performance"],
    modules: [
      { title: "Marketing Foundations", lessons: ["Introduction to Digital Marketing", "Audience Research"] },
      { title: "Content and Social Media", lessons: ["Content Strategy", "Social Media Platforms", "Campaign Planning"] },
      { title: "Search Engine Marketing", lessons: ["SEO Fundamentals", "Keyword Research", "Paid Search Basics"] },
      { title: "Analytics and Reporting", lessons: ["Marketing Metrics", "Campaign Analysis"] },
    ],
  },
  {
    id: "7",
    title: "Advanced Java Programming",
    instructor: "Code Academy",
    category: "Programming",
    level: "Advanced",
    duration: 9,
    lessons: 48,
    color: "#167E91",
    symbol: "J",
    description: "Master object-oriented programming and Java development.",
    overview: "Strengthen your Java development skills through object-oriented programming, collections, exception handling and practical application development.",
    objectives: ["Understand object-oriented programming", "Use Java collections", "Handle exceptions", "Explore multithreading", "Build Java applications"],
    modules: [
      { title: "Java Foundations", lessons: ["Java Overview", "Classes and Objects", "Methods and Constructors"] },
      { title: "Object-Oriented Programming", lessons: ["Inheritance", "Polymorphism", "Abstraction and Interfaces"] },
      { title: "Collections and Exceptions", lessons: ["Java Collections", "Exception Handling", "Generics"] },
      { title: "Advanced Java", lessons: ["Multithreading", "File Handling", "Streams"] },
      { title: "Java Project", lessons: ["Project Structure", "Application Development"] },
    ],
  },
  {
    id: "8",
    title: "Product Design and Innovation",
    instructor: "Creative Studio",
    category: "Design",
    level: "Intermediate",
    duration: 6,
    lessons: 31,
    color: "#777D67",
    symbol: "✦",
    description: "Turn creative ideas into meaningful product experiences.",
    overview: "Learn how to transform ideas into useful products. Explore design thinking, user needs, ideation, prototyping and validation.",
    objectives: ["Understand design thinking", "Identify user problems", "Generate and evaluate ideas", "Create prototypes", "Validate product concepts"],
    modules: [
      { title: "Design Thinking", lessons: ["Introduction to Design Thinking", "Problem Discovery", "Empathy Mapping"] },
      { title: "Research and Ideation", lessons: ["User Research", "Brainstorming", "Idea Evaluation"] },
      { title: "Product Strategy", lessons: ["Defining Product Goals", "Feature Prioritization"] },
      { title: "Prototyping", lessons: ["Prototype Fundamentals", "Creating a Prototype"] },
      { title: "Testing and Innovation", lessons: ["User Testing", "Iteration", "Final Project"] },
    ],
  },
];
export function generateStaticParams() {
  return courses.map((course) => ({
    id: course.id,
  }));
}
export default async function CourseDetailsPage({ params }) {
  const { id } = await params;
  const course = courses.find((item) => item.id === id);

  if (!course) {
    notFound();
  }

  return (
    <main className="course-detail-page">
      <nav className="navbar">
        <Link href="/" className="logo">
          learn<span>hub.</span>
        </Link>

        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/courses">Explore Courses</Link>
        </div>

        <Link href="/courses" className="nav-button">
          All Courses <span>↗</span>
        </Link>
      </nav>

      <section className="detail-hero">
        <div className="detail-hero-content">
          <Link href="/courses" className="back-link">
            ← Back to courses
          </Link>

          <p className="eyebrow">
            <span className="eyebrow-line" />
            {course.category.toUpperCase()} COURSE
          </p>

          <h1>{course.title}</h1>
          <p className="detail-description">{course.overview}</p>

          <div className="detail-instructor">
            <div className="instructor-avatar">
              {course.instructor.charAt(0)}
            </div>
            <div>
              <span>Course instructor</span>
              <strong>{course.instructor}</strong>
            </div>
          </div>

          <CourseActionButton
            courseId={course.id}
            className="detail-cta"
          />
        </div>

        <div className="detail-art" style={{ backgroundColor: course.color }}>
          <span className="detail-course-number">
            COURSE {String(course.id).padStart(2, "0")}
          </span>
          <span className="detail-symbol">{course.symbol}</span>
          <span className="detail-art-label">LEARNHUB ACADEMY</span>
        </div>
      </section>

      <section className="detail-main">
        <div className="detail-content">
          <div className="detail-section">
            <p className="detail-label">WHAT YOU WILL LEARN</p>
            <h2>Build skills that move you forward.</h2>

            <div className="objectives-grid">
              {course.objectives.map((objective, index) => (
                <div className="objective-item" key={index}>
                  <span>✓</span>
                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section syllabus-section">
            <p className="detail-label">COURSE CONTENT</p>
            <h2>Explore the syllabus.</h2>
            <p className="syllabus-intro">
              {course.modules.length} modules · {course.lessons} lessons
            </p>

            <div className="syllabus-list">
              {course.modules.map((module, index) => (
                <details className="syllabus-module" key={index}>
                  <summary>
                    <span className="module-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="module-title">{module.title}</span>
                    <span className="module-count">
                      {module.lessons.length} lessons
                    </span>
                    <span className="module-arrow">⌄</span>
                  </summary>

                  <div className="module-lessons">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div className="module-lesson" key={lessonIndex}>
                        <span>▷</span>
                        {lesson}
                        <span className="lesson-duration">Video lesson</span>
                      </div>
                    ))}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>

        <aside className="detail-sidebar">
          <div className="detail-info-card">
            <p className="detail-label">COURSE INFORMATION</p>

            <div className="info-row">
              <span>◷ Duration</span>
              <strong>{course.duration} weeks</strong>
            </div>
            <div className="info-row">
              <span>▤ Lessons</span>
              <strong>{course.lessons}</strong>
            </div>
            <div className="info-row">
              <span>◎ Difficulty</span>
              <strong>{course.level}</strong>
            </div>
            <div className="info-row">
              <span>⌘ Category</span>
              <strong>{course.category}</strong>
            </div>

            <div className="sidebar-note">
              Learn at your own pace and track your progress as you go.
            </div>

            <CourseActionButton
              courseId={course.id}
              className="sidebar-cta"
            />
          </div>
        </aside>
      </section>

      <footer className="footer">
        <Link href="/" className="logo">
          learn<span>hub.</span>
        </Link>
        <p>Learn with purpose. Grow without limits.</p>
        <span>© 2026 LearnHub</span>
      </footer>
    </main>
  );
}

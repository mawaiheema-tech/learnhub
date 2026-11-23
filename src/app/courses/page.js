
"use client";

import { useMemo, useState } from "react";

const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "LearnHub Academy",
    category: "Technology",
    level: "Beginner",
    duration: 8,
    lessons: 42,
    color: "#167E91",
    symbol: "</>",
    description: "Learn to build modern websites and web applications.",
  },
  {
    id: 2,
    title: "Python Programming Masterclass",
    instructor: "Tech Faculty",
    category: "Programming",
    level: "Beginner",
    duration: 6,
    lessons: 35,
    color: "#B58B55",
    symbol: "Py",
    description: "Start programming with Python and build practical projects.",
  },
  {
    id: 3,
    title: "UI/UX Design Fundamentals",
    instructor: "Creative Studio",
    category: "Design",
    level: "Intermediate",
    duration: 5,
    lessons: 28,
    color: "#777D67",
    symbol: "✳",
    description: "Understand user experience and create beautiful interfaces.",
  },
  {
    id: 4,
    title: "Data Structures and Algorithms",
    instructor: "Code Academy",
    category: "Programming",
    level: "Advanced",
    duration: 10,
    lessons: 55,
    color: "#526B9B",
    symbol: "{ }",
    description: "Strengthen problem-solving skills with DSA concepts.",
  },
  {
    id: 5,
    title: "Cybersecurity Essentials",
    instructor: "Security Lab",
    category: "Technology",
    level: "Intermediate",
    duration: 7,
    lessons: 38,
    color: "#8C5C7B",
    symbol: "⌘",
    description: "Explore network security, vulnerabilities and cyber defence.",
  },
  {
    id: 6,
    title: "Digital Marketing Strategy",
    instructor: "Growth Academy",
    category: "Business",
    level: "Beginner",
    duration: 4,
    lessons: 22,
    color: "#C58C82",
    symbol: "↗",
    description: "Learn branding, digital campaigns and marketing fundamentals.",
  },
  {
    id: 7,
    title: "Advanced Java Programming",
    instructor: "Code Academy",
    category: "Programming",
    level: "Advanced",
    duration: 9,
    lessons: 48,
    color: "#167E91",
    symbol: "J",
    description: "Master object-oriented programming and Java development.",
  },
  {
    id: 8,
    title: "Product Design and Innovation",
    instructor: "Creative Studio",
    category: "Design",
    level: "Intermediate",
    duration: 6,
    lessons: 31,
    color: "#777D67",
    symbol: "✦",
    description: "Turn creative ideas into meaningful product experiences.",
  },
];

const categories = [
  "All",
  "Technology",
  "Programming",
  "Design",
  "Business",
];

const levels = [
  "All Levels",
  "Beginner",
  "Intermediate",
  "Advanced",
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [level, setLevel] = useState("All Levels");
  const [sort, setSort] = useState("featured");

  const filteredCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.instructor.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || course.category === category;

      const matchesLevel =
        level === "All Levels" || course.level === level;

      return matchesSearch && matchesCategory && matchesLevel;
    });

    if (sort === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "duration") {
      result.sort((a, b) => a.duration - b.duration);
    }

    if (sort === "longest") {
      result.sort((a, b) => b.duration - a.duration);
    }

    return result;
  }, [search, category, level, sort]);

  function resetFilters() {
    setSearch("");
    setCategory("All");
    setLevel("All Levels");
    setSort("featured");
  }

  return (
    <main className="catalog-page">
      <nav className="navbar">
        <a href="/" className="logo">
          learn<span>hub.</span>
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/courses">Explore Courses</a>
          <a href="/#about">About</a>
        </div>

        <a href="/" className="nav-button">
          Home <span>↗</span>
        </a>
      </nav>

      <section className="catalog-hero">
        <p className="eyebrow">
          <span className="eyebrow-line" />
          YOUR LEARNING STARTS HERE
        </p>

        <h1>
          Explore. Learn.
          <br />
          <span>Become more.</span>
        </h1>

        <p>
          Discover courses designed to help you develop valuable skills
          and turn your curiosity into capability.
        </p>

        <div className="catalog-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search courses or instructors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search courses or instructors"
          />
          {search && (
            <button onClick={() => setSearch("")} aria-label="Clear search">
              ×
            </button>
          )}
        </div>

        <div className="catalog-total">
          <strong>{filteredCourses.length}</strong> courses available
        </div>
      </section>

      <section className="catalog-content">
        <div className="catalog-toolbar">
          <div className="filter-section">
            <label>Category</label>
            <div className="filter-options">
              {categories.map((item) => (
                <button
                  key={item}
                  className={category === item ? "filter-chip active" : "filter-chip"}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section level-filter">
            <label>Difficulty</label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              {levels.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-section sort-filter">
            <label>Sort by</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="name">Name: A–Z</option>
              <option value="duration">Shortest duration</option>
              <option value="longest">Longest duration</option>
            </select>
          </div>
        </div>

        <div className="results-heading">
          <h2>All Courses</h2>
          <span>{filteredCourses.length} results</span>
        </div>

        {filteredCourses.length > 0 ? (
          <div className="course-grid">
            {filteredCourses.map((course) => (
              <article className="course-card" key={course.id}>
                <div
                  className="course-art"
                  style={{ backgroundColor: course.color }}
                >
                  <span className="course-number">
                    COURSE {String(course.id).padStart(2, "0")}
                  </span>

                  <span className="course-symbol">{course.symbol}</span>

                  <span className="course-category">
                    {course.category.toUpperCase()}
                  </span>
                </div>

                <div className="course-info">
                  <div className="course-meta">
                    <span>{course.level}</span>
                    <span>{course.duration} weeks</span>
                  </div>

                  <h3>{course.title}</h3>

                  <p>{course.description}</p>

                  <div className="course-details">
                    <span>◷ {course.duration} weeks</span>
                    <span>▤ {course.lessons} lessons</span>
                  </div>

                  <div className="course-bottom">
                    <span>{course.instructor}</span>
                    <a href={`/courses/${course.id}`}>
                      View course <span>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>No courses found</h3>
            <p>Try changing your search or filters.</p>
            <button onClick={resetFilters}>Clear all filters</button>
          </div>
        )}
      </section>

      <footer className="footer">
        <a href="/" className="logo">
          learn<span>hub.</span>
        </a>
        <p>Learn with purpose. Grow without limits.</p>
        <span>© 2026 LearnHub</span>
      </footer>
    </main>
  );
}

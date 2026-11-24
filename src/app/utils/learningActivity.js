const ACTIVITY_KEY = "learnhub-learning-activity";

export function recordLearningActivity() {
  try {
    const savedActivity = JSON.parse(
      localStorage.getItem(ACTIVITY_KEY) || "[]"
    );

    const today = new Date().toLocaleDateString("en-CA");

    if (!savedActivity.includes(today)) {
      savedActivity.push(today);
    }

    localStorage.setItem(
      ACTIVITY_KEY,
      JSON.stringify(savedActivity)
    );
  } catch (error) {
    console.error("Unable to save learning activity:", error);
  }
}

export function getLearningActivity() {
  try {
    return JSON.parse(
      localStorage.getItem(ACTIVITY_KEY) || "[]"
    );
  } catch (error) {
    console.error("Unable to load learning activity:", error);
    return [];
  }
}
const RECENT_COURSES_KEY = "learnhub-recent-courses";

export function recordCourseVisit(courseId) {
  try {
    const saved = JSON.parse(
      localStorage.getItem(RECENT_COURSES_KEY) || "[]"
    );

    const updated = [
      { courseId: String(courseId), visitedAt: Date.now() },
      ...saved.filter(
        (course) => course.courseId !== String(courseId)
      ),
    ].slice(0, 8);

    localStorage.setItem(
      RECENT_COURSES_KEY,
      JSON.stringify(updated)
    );
  } catch (error) {
    console.error("Unable to save recent courses:", error);
  }
}

export function getRecentCourses() {
  try {
    return JSON.parse(
      localStorage.getItem(RECENT_COURSES_KEY) || "[]"
    );
  } catch (error) {
    console.error("Unable to load recent courses:", error);
    return [];
  }
}
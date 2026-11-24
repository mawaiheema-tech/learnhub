"use client";

import { useState , useEffect } from "react";

const quizQuestions = {
  "4": [
    {
      question: "Which data structure follows the LIFO principle?",
      options: ["Queue", "Stack", "Array", "Linked List"],
      answer: "Stack",
      explanation: "Stack follows Last In, First Out (LIFO)."
    },
    {
      question: "What is the time complexity of accessing an array element by index?",
      options: ["O(n)", "O(log n)", "O(1)", "O(n²)"],
      answer: "O(1)",
      explanation: "Arrays provide direct access using an index."
    },
    {
      question: "Which of these are linear data structures?",
      options: ["Array", "Stack", "Tree", "Queue"],
      answer: ["Array", "Stack", "Queue"],
      explanation: "Arrays, stacks and queues arrange elements sequentially."
    },
    {
      question: "In a Binary Search Tree, values smaller than the root are generally stored where?",
      options: ["Right subtree", "Left subtree", "At the root", "Nowhere"],
      answer: "Left subtree",
      explanation: "Smaller values are stored in the left subtree."
    },
    {
  question: "Arrange these steps of Binary Search in the correct order.",
  type: "order",
  options: [
    "Update the search range",
    "Find the middle element",
    "Compare the target with the middle element",
    "Return the result if the target is found"
  ],
  answer: [
    "Find the middle element",
    "Compare the target with the middle element",
    "Return the result if the target is found",
    "Update the search range"
  ],
  explanation: "Binary Search finds the middle element, compares it with the target, returns if found, or updates the search range and repeats."
}
  ],

  "2": [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "define", "def", "function"],
      answer: "def",
      explanation: "Python uses the def keyword to define functions."
    },
    {
      question: "Which data type stores True or False values?",
      options: ["String", "Boolean", "Integer", "List"],
      answer: "Boolean",
      explanation: "Boolean values represent True or False."
    },
    {
      question: "Which of these are mutable data types in Python?",
      options: ["Tuple", "String", "List", "Dictionary"],
      answer: ["List", "Dictionary"],
      explanation: "Lists and dictionaries can be modified after creation."
    },
    {
      question: "Which loop is commonly used to iterate over a sequence?",
      options: ["if", "for", "def", "class"],
      answer: "for",
      explanation: "A for loop iterates over items in a sequence."
    },
    {
      question: "Which keyword is used to create a class in Python?",
      options: ["object", "method", "class", "self"],
      answer: "class",
      explanation: "The class keyword defines a new class."
    }
  ],


  "1": [
    {
      question: "Which HTML element is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: "<a>",
      explanation: "The anchor element creates hyperlinks."
    },
    {
      question: "Which CSS property changes text color?",
      options: ["font-style", "text-color", "color", "background"],
      answer: "color",
      explanation: "The color property sets text color."
    },
    {
      question: "Which JavaScript keyword declares a block-scoped variable?",
      options: ["var", "let", "define", "int"],
      answer: "let",
      explanation: "let declares a block-scoped variable."
    },
    {
      question: "Which method converts JSON text into a JavaScript object?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
      answer: "JSON.parse()",
      explanation: "JSON.parse() converts JSON text into a JavaScript value."
    },
    {
      question: "Which of these are commonly used in Next.js?",
      options: ["App Router", "File-based routing", "Server Components", "All of these"],
      answer: "All of these",
      explanation: "Next.js supports all three features."
    }
  ],

  "3": [
    {
      question: "What does UX stand for?",
      options: ["User Experience", "User Extension", "Universal Experience", "User Example"],
      answer: "User Experience",
      explanation: "UX means User Experience."
    },
    {
      question: "What is a wireframe?",
      options: ["A final coded website", "A basic layout of a design", "A database", "An animation"],
      answer: "A basic layout of a design",
      explanation: "Wireframes show the structure and layout of an interface."
    },
    {
      question: "Which principle helps maintain consistency in design?",
      options: ["Random colors", "Consistent typography", "Unrelated layouts", "Too many fonts"],
      answer: "Consistent typography",
      explanation: "Consistent typography creates a unified visual experience."
    },
    {
      question: "Which of these are common prototyping tools?",
      options: ["Figma", "Adobe XD", "Sketch", "All of these"],
      answer: "All of these",
      explanation: "All three tools can be used for interface prototyping."
    },
    {
      question: "What is the main purpose of user research?",
      options: ["Increase code size", "Understand user needs", "Choose random colors", "Remove navigation"],
      answer: "Understand user needs",
      explanation: "User research helps designers understand users and their problems."
    }
  ],

  "5": [
    {
      question: "What does HTTPS help provide?",
      options: ["Encrypted communication", "Faster typing", "Free hosting", "File compression"],
      answer: "Encrypted communication",
      explanation: "HTTPS protects communication using encryption through TLS."
    },
    {
      question: "What is phishing?",
      options: ["A backup method", "A fraudulent attempt to steal information", "A programming language", "A firewall"],
      answer: "A fraudulent attempt to steal information",
      explanation: "Phishing tricks users into revealing sensitive information."
    },
    {
      question: "Which tool is commonly used for network packet analysis?",
      options: ["Wireshark", "Photoshop", "Figma", "Excel"],
      answer: "Wireshark",
      explanation: "Wireshark captures and analyzes network packets."
    },
    {
      question: "What is a vulnerability?",
      options: ["A security weakness", "A secure password", "A backup file", "An operating system"],
      answer: "A security weakness",
      explanation: "A vulnerability is a weakness that may be exploited."
    },
    {
      question: "Which of these are good security practices?",
      options: ["Using strong passwords", "Enabling multi-factor authentication", "Installing security updates", "All of these"],
      answer: "All of these",
      explanation: "These practices help protect accounts and systems."
    }
  ],

  "6": [
    {
      question: "What does SEO stand for?",
      options: ["Search Engine Optimization", "Social Engagement Option", "Search Email Operation", "Site Entry Optimization"],
      answer: "Search Engine Optimization",
      explanation: "SEO improves a website's visibility in search results."
    },
    {
      question: "What is a target audience?",
      options: ["All websites", "The intended group of customers", "A marketing tool", "A search engine"],
      answer: "The intended group of customers",
      explanation: "A target audience is the group a campaign aims to reach."
    },
    {
      question: "Which metric measures the percentage of people who click an ad?",
      options: ["CTR", "CPU", "RAM", "URL"],
      answer: "CTR",
      explanation: "Click-through rate measures clicks relative to impressions."
    },
    {
      question: "Which platforms are commonly used for social media marketing?",
      options: ["Instagram", "LinkedIn", "Facebook", "All of these"],
      answer: "All of these",
      explanation: "All three platforms support marketing activities."
    },
    {
      question: "What is the purpose of a call to action (CTA)?",
      options: ["Confuse visitors", "Encourage a specific action", "Delete content", "Slow down a website"],
      answer: "Encourage a specific action",
      explanation: "A CTA encourages users to take an action such as signing up or buying."
    }
  ],

  "7": [
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["implements", "extends", "inherits", "superclass"],
      answer: "extends",
      explanation: "The extends keyword establishes class inheritance."
    },
    {
      question: "Which method is the entry point of a standard Java application?",
      options: ["start()", "run()", "main()", "init()"],
      answer: "main()",
      explanation: "Execution begins from the main method."
    },
    {
      question: "Which of these are Java collection types?",
      options: ["ArrayList", "HashSet", "HashMap", "All of these"],
      answer: "All of these",
      explanation: "ArrayList, HashSet and HashMap are part of the Java Collections Framework."
    },
    {
      question: "Which block is commonly used to handle exceptions?",
      options: ["try-catch", "if-else", "for-while", "switch-case"],
      answer: "try-catch",
      explanation: "try-catch handles exceptions that occur during execution."
    },
    {
      question: "Which concept allows the same method name to behave differently?",
      options: ["Encapsulation", "Polymorphism", "Compilation", "Iteration"],
      answer: "Polymorphism",
      explanation: "Polymorphism allows different implementations through a common interface or method."
    }
  ],

  "8": [
    {
      question: "What is product design primarily concerned with?",
      options: ["Only appearance", "Solving user problems", "Only marketing", "Writing documentation"],
      answer: "Solving user problems",
      explanation: "Product design combines user needs, functionality and usability."
    },
    {
      question: "What is an MVP?",
      options: ["Most Valuable Product", "Minimum Viable Product", "Maximum Visual Plan", "Market Value Process"],
      answer: "Minimum Viable Product",
      explanation: "An MVP is an early product version with enough features to test an idea."
    },
    {
      question: "What is a user persona?",
      options: ["A fictional profile representing a user type", "A coding language", "A product logo", "A database table"],
      answer: "A fictional profile representing a user type",
      explanation: "Personas represent research-based user characteristics and needs."
    },
    {
      question: "Which process helps improve a product through repeated testing?",
      options: ["Iteration", "Deletion", "Compression", "Archiving"],
      answer: "Iteration",
      explanation: "Iteration involves testing, learning and refining a product."
    },
    {
      question: "Which of these are important in product development?",
      options: ["User feedback", "Prototyping", "Testing", "All of these"],
      answer: "All of these",
      explanation: "Feedback, prototyping and testing help improve product quality."
    }
  ]

};
function CertificateCard({ eligible, courseTitle ,courseId }) {
  return (
    <div className="certificate-status-card">
      <div className="certificate-icon">
        {eligible ? "🏆" : "🔒"}
      </div>

      <div>
        <h3>Certificate of Achievement</h3>

        <p>
          {eligible
            ? "Congratulations! Your certificate is unlocked."
            : "Complete all lessons and score at least 70% in the quiz to unlock your certificate."}
        </p>

        {eligible && (
          <a
            href={`/certificate?course=${encodeURIComponent(courseTitle)}&courseId=${courseId}`}
            className="print-certificate"
          >
            Get Your Certificate
          </a>
        )}
      </div>
    </div>
  );
}
export default function Quiz({
  courseId,
  completedLessons = [],
  totalLessons = 0,
}) {
  const questions = quizQuestions[courseId];
  const quizTitles = {
  "1": "Full Stack Development Quiz",
  "2": "Python Programming Quiz",
  "3": "UI/UX Design Quiz",
  "4": "DSA Fundamentals Quiz",
  "5": "Cybersecurity Essentials Quiz",
  "6": "Digital Marketing Quiz",
  "7": "Advanced Java Programming Quiz",
  "8": "Product Design Quiz"
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState([]);
  const [savedAnswers, setSavedAnswers] = useState({});
  const [scoredQuestions, setScoredQuestions] = useState({});
  const [wrongQuestions, setWrongQuestions] = useState({});
  const [reviewAnswers, setReviewAnswers] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [resultSaved, setResultSaved] = useState(false);
  const [savedBestPercentage, setSavedBestPercentage] = useState(0);
  const [timeLeft, setTimeLeft] = useState(200);
  const [orderedOptions, setOrderedOptions] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  

useEffect(() => {
  if (!questions) return;

  const current = questions[currentQuestion];

  if (current.type === "order") {
    setOrderedOptions(
      [...current.options].sort(() => Math.random() - 0.5)
    );
  } else {
    setOrderedOptions([]);
  }
}, [currentQuestion, courseId]);

useEffect(() => {
  const existingResults = JSON.parse(
    localStorage.getItem("learnhub-quiz-results") || "[]"
  );

  const courseResults = existingResults.filter(
    (result) => String(result.courseId) === String(courseId)
  );

  if (courseResults.length > 0) {
    const bestPercentage = Math.max(
      ...courseResults.map((result) => result.percentage)
    );

    setSavedBestPercentage(bestPercentage);
  }
}, [courseId]);

useEffect(() => {
  if (!started || finished) return;

  if (timeLeft <= 0) {
    setFinished(true);
    return;
  }

  const timer = setInterval(() => {
    setTimeLeft((previous) => previous - 1);
  }, 1000);

  return () => clearInterval(timer);
}, [started, finished, timeLeft]);

useEffect(() => {
  if (!finished || resultSaved) return;

  const existingResults = JSON.parse(
    localStorage.getItem("learnhub-quiz-results") || "[]"
  );

  const newResult = {
    courseId,
    courseTitle: quizTitles[courseId],
    score,
    total: questions.length,
    percentage: Math.round((score / questions.length) * 100),
    date: new Date().toISOString()
  };

  localStorage.setItem(
    "learnhub-quiz-results",
    JSON.stringify([...existingResults, newResult])
  );

  setResultSaved(true);
}, [finished, resultSaved, courseId, score, questions.length]);

  if (!questions) {
    return <p>No quiz available for this course yet.</p>;
  }


const question = questions[currentQuestion];

const isMulti =
  Array.isArray(question.answer) && question.type !== "order";

const handleDragStart = (index) => {
  setDraggedIndex(index);
};

const handleDrop = (event, targetIndex) => {
  event.preventDefault();

  if (draggedIndex === null || draggedIndex === targetIndex) {
    setDraggedIndex(null);
    return;
  }

  setOrderedOptions((previous) => {
    const updated = [...previous];
    const [movedItem] = updated.splice(draggedIndex, 1);
    updated.splice(targetIndex, 0, movedItem);
    return updated;
  });

  setDraggedIndex(null);
};

const handleSelect = (option) => {
  if (showAnswer) return;

  let updatedAnswers;

  if (isMulti) {
    updatedAnswers = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];
  } else {
    updatedAnswers = [option];
  }

  setSelected(updatedAnswers);

  setSavedAnswers((previous) => ({
    ...previous,
    [currentQuestion]: updatedAnswers
  }));
};


  const checkAnswer = () => {
    if (question.type === "order" && orderedOptions.length === 0) return;
    if (question.type !== "order" && selected.length === 0) return;

    const correct = question.type === "order"
      ? orderedOptions.every(
      (option, index) => option === question.answer[index]
    )
  : isMulti
  ? selected.length === question.answer.length &&
    selected.every((item) => question.answer.includes(item))
  : selected[0] === question.answer;
    if (correct && !scoredQuestions[currentQuestion]) {
      setScore((previous) => previous + 1);

      setScoredQuestions((previous) => ({
        ...previous,
        [currentQuestion]: true
      }));
    }
    
    if (!correct) {
      setWrongQuestions((previous) => ({
        ...previous,
        [currentQuestion]: true
      }));
    }

    setShowAnswer(true);
    setReviewAnswers((previous) => ({
      ...previous,
      [currentQuestion]:
        question.type === "order"
         ? [...orderedOptions]
         :[...selected]
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((previous) => previous + 1);
      setSelected(savedAnswers[currentQuestion + 1] || []);
      setShowAnswer(false);
    } else {
      setFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelected([]);
    setOrderedOptions([]);
    setSavedAnswers({});
    setScoredQuestions({});
    setReviewAnswers({});
    setWrongQuestions({});
    setShowAnswer(false);
    setScore(0);
    setFinished(false);
    setResultSaved(false);
    setStarted(false);
    setTimeLeft(200);
  };

const percentage = Math.max(
  Math.round((score / questions.length) * 100),
  savedBestPercentage
);

const courseCompleted = completedLessons.length === totalLessons;

const certificateEligible = percentage >= 70 && courseCompleted;  

if (finished) {
  return (
    <div className="quiz-container">
      <h2>Quiz Completed!</h2>
      <CertificateCard
        eligible={certificateEligible}
        courseTitle={quizTitles[courseId]}
        courseId={courseId}
      />
      <h3>Your Score: {score} / {questions.length}</h3>

      <p>Correct Answers: {score}</p>

      <p>
        Incorrect Answers: {Object.keys(wrongQuestions).length}
      </p>

      <p>
        Unanswered: {
          questions.length -
          score -
          Object.keys(wrongQuestions).length
        }
      </p>

      <p>
        Percentage: {Math.round((score / questions.length) * 100)}%
      </p>

      <hr />

      <h2>Review Your Answers</h2>

      {questions.map((item, index) => {
        const userAnswer = reviewAnswers[index];

        const correctAnswer = Array.isArray(item.answer)
          ? item.answer
          : [item.answer];

        const displayedAnswer = userAnswer
          ? userAnswer.join(
              item.type === "order" ? " → " : ", "
            )
          : "Not answered";

        const displayedCorrectAnswer = correctAnswer.join(
          item.type === "order" ? " → " : ", "
        );

        const isCorrect =
          userAnswer &&
          userAnswer.length === correctAnswer.length &&
          userAnswer.every(
            (answer, i) =>
              item.type === "order"
                ? answer === correctAnswer[i]
                : correctAnswer.includes(answer)
          );

        return (
          <div className="review-card" key={index}>
            <h3>Question {index + 1}</h3>

            <p>{item.question}</p>

            <p>
              <strong>Your Answer:</strong> {displayedAnswer}
            </p>

            <p>
              <strong>Correct Answer:</strong>{" "}
              {displayedCorrectAnswer}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {isCorrect ? "Correct" : userAnswer ? "Incorrect" : "Unanswered"}
            </p>

            <p>
              <strong>Explanation:</strong> {item.explanation}
            </p>
          </div>
        );
      })}

      {certificateEligible && (
        <a
          href={`/certificate?course=${encodeURIComponent(quizTitles[courseId])}&courseId=${courseId}`}
          className="print-certificate"
        >
          Get Your Certificate
        </a>
      )}
      <button onClick={restartQuiz}>Try Again</button>
    
    </div>
  );
}


if (!started) {
  return (
    <div className="quiz-container">
      <CertificateCard
      eligible={certificateEligible}
      courseTitle={quizTitles[courseId]}
      courseId={courseId}
      />
      <h2>{quizTitles[courseId] || "Course Quiz"}</h2>

      <p>Test your understanding with this quiz.</p>

      <p><strong>Total Questions:</strong> {questions.length}</p>

      <p><strong>Time Limit:</strong> 3 minutes 20 seconds</p>

      <p>You can navigate between questions before submitting your answers.</p>

      <button
        type="button"
        onClick={() => setStarted(true)}
      >
        Start Quiz
      </button>
    </div>
  );
}

  return (
    <div className="quiz-container">
      <h2>{quizTitles[courseId] || "Course Quiz"}</h2>

      <p>
        Question {currentQuestion + 1} of {questions.length}
      </p>
    
      <p className="quiz-timer">
        Time Left: {Math.floor(timeLeft / 60)}:
        {String(timeLeft % 60).padStart(2, "0")}
      </p>

      <h3>{question.question}</h3>
      
      <div className="quiz-navigation">
  {questions.map((item, index) => (
    <button
      key={index}
      type="button"
      className={
        currentQuestion === index
          ? "question-number active"
          : savedAnswers[index]
          ? "question-number answered"
          : "question-number"
      }
      onClick={() => {
        setCurrentQuestion(index);
        setSelected(savedAnswers[index] || []);
        setShowAnswer(false);
      }}
    >
      {index + 1}
    </button>
  ))}
</div>

      <p>
        {isMulti ? "Select all correct answers." : "Select one answer."}
      </p>

      {question.type === "order" ? (
  <div className="quiz-options">
    <p>Drag the options to arrange them in the correct order:</p>

    {orderedOptions.map((option, index) => (
      <div
        key={option}
        className={
          draggedIndex==index
           ?"quiz-option dragging"
           : "quiz-option"
        }
        draggable={!showAnswer}
        onDragStart={() => handleDragStart(index)}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => handleDrop(event, index)}
        onDragEnd={() => setDraggedIndex(null)}
      >
        ☰ {index + 1}. {option}
      </div>
    ))}
  </div>
) : (
  <div className="quiz-options">
    {question.options.map((option) => (
      <button
        type="button"
        key={option}
        className={
          selected.includes(option) ? "quiz-option selected" : "quiz-option"
        }
        onClick={() => handleSelect(option)}
        disabled={showAnswer}
      >
        {option}
      </button>
    ))}
  </div>
)}

      {showAnswer && (
        <div className="quiz-feedback">
          <h4>
            {(question.type === "order"
              ? orderedOptions.every(
                (option, index) => option === question.answer[index]
              )
              : isMulti
              ? selected.length === question.answer.length &&
                selected.every((item) => question.answer.includes(item))
              : selected[0] === question.answer)
              ? "Correct answer!"
              : "Incorrect answer"}
          </h4>

          <p>{question.explanation}</p>
        </div>
      )}

      {!showAnswer ? (
        <button
        onClick={checkAnswer}
        disabled={
          question.type === "order"
          ? orderedOptions.length === 0
          : selected.length === 0
        }
      >
        Check Answer
      </button>
      ) : (
        <button onClick={nextQuestion}>
          {currentQuestion + 1 === questions.length
            ? "See Results"
            : "Next Question"}
        </button>
      )}
    </div>
  );
};
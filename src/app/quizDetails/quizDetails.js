"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/quizDetatils.module.css";

const QuizDetails = ({ settings }) => {
  const { numQuestions, category, difficulty } = settings;
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [numQuestions, category, difficulty]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore((prev) => prev + 1);
    }
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  const decodeHtmlEntities = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (
    !questions ||
    questions.length === 0 ||
    currentQuestionIndex >= questions.length
  ) {
    return (
      <div className={styles.finishContainer}>
        <h2>Quiz Finished!</h2>

        <Link
          href={{
            pathname: "/results",
            query: { score, numQuestions },
          }}
        >
          Go to Results
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className={styles.detailsContainer}>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{decodeHtmlEntities(currentQuestion.question)}</p>

      <div className={styles.buttonContainer}>
        {" "}
        {currentQuestion.incorrect_answers
          .concat(currentQuestion.correct_answer)
          .map((answer, index) => (
            <div className={styles.buttonContainer} key={index}>
              <button key={index} onClick={() => handleAnswer(answer)}>
                {decodeHtmlEntities(answer)}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default QuizDetails;

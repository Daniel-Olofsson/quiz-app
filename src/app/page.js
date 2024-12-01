"use client";

import { useState } from "react";
import StartQuiz from "./startQuiz/startQuiz";
import Settings from "./settings/settings";
import QuizDetails from "./quizDetails/quizDetails";
import style from "./page.module.css";

const Home = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [settings, setSettings] = useState({
    numQuestions: 10,
    category: "9", // General Knowledge
    difficulty: "easy", // Default difficulty
  });
  const [settingsVisible, setSettingsVisible] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const toggleSettings = () => {
    setSettingsVisible((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <h1>Welcome to the Quiz App!</h1>

      {!quizStarted && (
        <div className={style.settignsContainer}>
          <button className={style.buttonSettings} onClick={toggleSettings}>
            Settings ⚙️
          </button>
        </div>
      )}

      {settingsVisible && !quizStarted && (
        <Settings settings={settings} setSettings={setSettings} />
      )}

      {!quizStarted && (
        <div>
          <StartQuiz onStart={startQuiz} />
        </div>
      )}

      {quizStarted && <QuizDetails settings={settings} />}
    </div>
  );
};

export default Home;

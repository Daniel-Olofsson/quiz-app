import styles from "../styles/quizStart.module.css";

const StartQuiz = ({ onStart }) => (
  <div className="">
    <button className={styles.button} onClick={onStart}>
      Start Quiz
    </button>
  </div>
);
export default StartQuiz;

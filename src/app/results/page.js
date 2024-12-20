"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import styles from "../styles/results.module.css";
import React, { Suspense } from "react";

const Results = () => {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  const numQuestions = searchParams.get("numQuestions");

  return (
    <div className={styles.resultsContainer}>
      <h1>Quiz Results</h1>
      <p>
        Your score: {score}/{numQuestions}
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/">Go to Home</Link>
      </div>
    </div>
  );
};

const SuspendedResults = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Results />
  </Suspense>
);

export default SuspendedResults;

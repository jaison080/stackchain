import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./Questions.module.css";

function Questions() {
  return (
    <>
      <div className={styles.questions}>
        <div className={styles.questions__title}>Questions Asked</div>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </>
  );
}

export default Questions;

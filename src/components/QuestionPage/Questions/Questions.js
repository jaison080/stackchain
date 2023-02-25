import React, { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./Questions.module.css";
import { RiQuestionAnswerLine } from "react-icons/ri";
import AskQuestionDialog from "../AskQuestionDialog/AskQuestionDialog";

function Questions() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <div className={styles.questions}>
        <div className={styles.ask_btn} onClick={handleOpen} data-aos="zoom-in">
          <RiQuestionAnswerLine />
          Ask a Question
        </div>
        <div className={styles.questions__title}>Questions Asked</div>
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
      <AskQuestionDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default Questions;

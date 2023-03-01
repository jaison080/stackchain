import React, { useState, useEffect } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./Questions.module.css";
import { RiQuestionAnswerLine } from "react-icons/ri";
import AskQuestionDialog from "../AskQuestionDialog/AskQuestionDialog";
import { UserContext } from "@/contexts/UserContext";

function Questions() {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState([]);
  const {dwitter} =  React.useContext(UserContext);
  const [loading,setLoading]=useState(true)
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
useEffect(() => {
    if(!dwitter) return;
    dwitter.getAllQuestions().then((res) => {
      setQuestions(res);
      setLoading(false)
    });
  }, [dwitter]);
  if(loading)
  return <div>
    loading...
  </div>
  return (
    <>
      <div className={styles.questions}>
        <div className={styles.ask_btn} onClick={handleOpen} data-aos="zoom-in">
          <RiQuestionAnswerLine />
          Ask a Question
        </div>
        <div className={styles.questions__title}>Questions Asked</div>
        {questions.map((question) => (
          <QuestionCard
            id={question[0]}
            title={question[1]}  
            description={question[2]}
            

          />))}
      </div>
      <AskQuestionDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default Questions;

import React, { useEffect, useState } from "react";
import styles from "./QuestionDetail.module.css";
import { BsFillTriangleFill } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";
import AddAnswerDialog from "../AddAnswerDialog/AddAnswerDialog";
import AnswerCard from "../AnswerCard/AnswerCard";
import { useRouter } from 'next/router'
import { UserContext } from "@/contexts/UserContext";


function QuestionDetail() {
  const router = useRouter()
  const {id} = router.query
  const {dwitter} =  React.useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if(!dwitter) return;
    dwitter.questions(id).then((res) => {
      setTitle(res[0]);
      setDescription(res[1]);
    }
    );
  }, [dwitter, id]);

  return (
    <>
      <div className={styles.questionDetail}>
        <div className={styles.questionDetail__main} data-aos="zoom-in">
          <div className={styles.questionDetail__title}>{title}</div>
          <div className={styles.questionDetail__details}>
            <div className={styles.questionDetail__details__views}>
              Asked today
            </div>
            <div className={styles.questionDetail__details__views}>
              Modified today
            </div>
            <div className={styles.questionDetail__details__views}>
              Viewed 0 times
            </div>
          </div>
          <div className={styles.questionDetail__content}>
            <div className={styles.questionDetail__content__left}>
              <div className={styles.questionDetail__content__vote_icon}>
                <BsFillTriangleFill />
              </div>
              <div className={styles.questionDetail__content__vote_count}>
                0
              </div>
              <div
                className={styles.questionDetail__content__vote_icon}
                style={{
                  transform: "rotate(180deg)",
                }}
              >
                <BsFillTriangleFill />
              </div>
            </div>
            <div className={styles.questionDetail__content__right}>
              <div className={styles.questionDetail__content__description}>
               {description}
              </div>
              <div className={styles.questionDetail__content__tags}>
                <div className={styles.questionDetail__content__tag}>
                  finance
                </div>
                <div className={styles.questionDetail__content__tag}>stata</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.questionDetail__answers}>
          <div className={styles.questionDetail__answers__title}>Answers</div>
          <div
            className={styles.answer_btn}
            onClick={handleOpen}
            data-aos="zoom-in"
          >
            <RiQuestionAnswerLine />
            Add Answer
          </div>
          <AnswerCard />
          <AnswerCard />
          <AnswerCard />
        </div>
      </div>
      <AddAnswerDialog open={open} handleClose={handleClose} />
    </>
  );
}

export default QuestionDetail;

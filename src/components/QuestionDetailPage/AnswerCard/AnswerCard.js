import React from "react";
import styles from "./AnswerCard.module.css";
import { BsFillTriangleFill } from "react-icons/bs";

function AnswerCard({title}) {
  return (
    <>
      <div className={styles.questionDetail__answers__content} data-aos="fade-up">
        <div className={styles.questionDetail__answers__content__left}>
          <div className={styles.questionDetail__answers__content__vote_icon}>
            <BsFillTriangleFill />
          </div>
          <div className={styles.questionDetail__answers__content__vote_count}>
            0
          </div>
          <div
            className={styles.questionDetail__answers__content__vote_icon}
            style={{
              transform: "rotate(180deg)",
            }}
          >
            <BsFillTriangleFill />
          </div>
        </div>
        <div className={styles.questionDetail__answers__content__right}>
          <div className={styles.questionDetail__answers__content__description}>
            {title}
          </div>
          <div className={styles.questionDetail__answers__content__tags}>
            <div className={styles.questionDetail__answers__content__tag}>
              finance
            </div>
            <div className={styles.questionDetail__answers__content__tag}>
              stata
            </div>
          </div>
          <div className={styles.questionDetail__answers__content__asked}>
            <div
              className={styles.questionDetail__answers__content__asked__name}
            >
              Jonh Doe
            </div>
            <div
              className={styles.questionDetail__answers__content__asked__time}
            >
              Answered 1 day ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnswerCard;

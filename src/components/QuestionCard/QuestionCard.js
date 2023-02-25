import React from "react";
import styles from "./QuestionCard.module.css";

function QuestionCard() {
  return (
    <>
      <div className={styles.question_card}>
        <div className={styles.question_card__details}>
          <div className={styles.question_card__details__votes}>0 Votes</div>
          <div className={styles.question_card__details__answers}>
            0 Answers
          </div>
          <div className={styles.question_card__details__views}>3 Views</div>
        </div>
        <div className={styles.question_card__content}>
          <div className={styles.question_card__content__title}>
            hey i was wondering if anyone here knew how to solve this one
          </div>
          <div className={styles.question_card__content__description}>
            public Point2D[] getEndpoints() This method creates and returns an
            array containing copies of the two endpoints of this Line2D object.
            Note that the length of this array must be 2 and the order of the
            Point2D objects in the array is insignificant.
          </div>
          <div className={styles.question_card__content__tags}>
            <div className={styles.question_card__content__tag}>finance</div>
            <div className={styles.question_card__content__tag}>stata</div>
          </div>
          <div className={styles.question_card__content__asked}>
            <div className={styles.question_card__content__asked__name}>
              Jonh Doe
            </div>
            <div className={styles.question_card__content__asked__time}>
              Asked 1 day ago
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionCard;

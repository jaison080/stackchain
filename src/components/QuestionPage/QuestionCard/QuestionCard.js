import { useRouter } from "next/router";
import React from "react";
import styles from "./QuestionCard.module.css";

function QuestionCard({title, description, id}) {
  const router = useRouter();
  return(
    <>
      <div
        className={styles.question_card}
        data-aos="fade-up"
        onClick={() => {
          router.push(`/questions/${id}`);
        }}
        style={{ cursor: "pointer" }}
      >
        <div className={styles.question_card__details}>
          <div className={styles.question_card__details__votes}>0 Votes</div>
          <div className={styles.question_card__details__answers}>
            0 Answers
          </div>
          <div className={styles.question_card__details__views}>3 Views</div>
        </div>
        <div className={styles.question_card__content}>
          <div className={styles.question_card__content__title}>
            {title}
          </div>
          <div className={styles.question_card__content__description}>
            {description}
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

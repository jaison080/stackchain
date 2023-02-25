import Image from "next/image";
import React from "react";
import { details } from "@/assets";
import styles from "./MoreDetails.module.css";

function MoreDetails() {
  return (
    <>
      <div className={styles.more_details}>
        <div className={styles.more_details__left__title} data-aos="fade-up">
          Revolutionizing Knowledge-Sharing with StackChain
        </div>
        <div className={styles.main__content}>
          <div className={styles.more_details__right} data-aos="fade-left">
            <div className={styles.more_details__right__image}>
              <Image src={details} alt="logo" />
            </div>
          </div>
          <div className={styles.more_details__left} data-aos="fade-right">
            <div className={styles.more_details__left__subtitle}>
              {" "}
              StackChain is a modern platform that connects individuals and
              experts in a decentralized ecosystem for collaborative learning.
              Our secure and transparent network empowers users to share
              knowledge freely and promotes diversity, inclusivity, and
              innovation. Join us to transform the way you learn and
              collaborate!
            </div>
            <div className={styles.more_details__left__buttons}>
              <div className={styles.more_details__left__button}>
                Get Started
              </div>
              <div className={styles.more_details__left__button}>
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreDetails;

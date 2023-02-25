import Image from "next/image";
import React from "react";
import styles from "./About.module.css";
import { logo } from "../../../assets";

function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.about__left} data-aos="fade-right">
          <div className={styles.about__left__title}>
            Join the Future of Knowledge-Sharing with StackChain
          </div>
          <div className={styles.about__left__subtitle}>
            StackChain is a modern platform that connects individuals and
            experts in a decentralized ecosystem for collaborative learning. Our
            secure and transparent network promotes diversity, inclusivity, and
            innovation by allowing users to share and access knowledge openly.
            Join us to experience the future of knowledge-sharing!
          </div>
          <div className={styles.about__left__buttons}>
            <div className={styles.about__left__button}>Get Started</div>
            <div className={styles.about__left__button}>Learn More</div>
          </div>
        </div>
        <div className={styles.about__right} data-aos="fade-left">
          <div className={styles.about__right__image}>
            <Image src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;

import Image from "next/image";
import React from "react";
import hero from '../../../assets/Landing/hero.svg'
import styles from "./Hero.module.css";

function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.hero__left}  data-aos="fade-left">
          <div className={styles.hero__left__title} >StackChain</div>
          <div className={styles.hero__left__subtitle}>
            Decentralize knowledge, empower communities.
          </div>
          <div className={styles.hero__left__buttons} >
            <div className={styles.hero__left__button}>Get Started</div>
            <div className={styles.hero__left__button}>Learn More</div>
          </div>
        </div>
        <div className={styles.hero__right} data-aos="fade-right">
          <div className={styles.hero__right__image}>
            <Image src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

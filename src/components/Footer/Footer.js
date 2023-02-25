import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footer__left}>
          <div className={styles.footer__left__logo}>StackChain</div>
          <div className={styles.footer__left__links}>
            <div className={styles.footer__left__link}>About</div>
            <div className={styles.footer__left__link}>Products</div>
            <div className={styles.footer__left__link}>For Teams</div>
          </div>
        </div>
        <div className={styles.footer__right__social}>
          <div className={styles.footer__right__social__link}>
            <FaFacebook />
          </div>
          <div className={styles.footer__right__social__link}>
            <FaTwitter />
          </div>
          <div className={styles.footer__right__social__link}>
            <FaInstagram />
          </div>
        </div>
        <div className={styles.footer__right}>
          <div className={styles.footer__right__links}>
            <div className={styles.footer__right__link}>Terms of Service</div>
            <div className={styles.footer__right__link}>Privacy Policy</div>
            <div className={styles.footer__right__link}>Contact Us</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

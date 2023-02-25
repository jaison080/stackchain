import React from "react";
import styles from "./Navbar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__left}>
          <div className={styles.navbar__menu_container}>
            <HiMenuAlt2 className={styles.navbar__menu} />
          </div>
          <div
            className={styles.navbar__logo}
            onClick={() => {
              router.push("/");
            }}
            style={{ cursor: "pointer" }}
          >
            StackChain
          </div>
        </div>
        <div className={styles.navbar__links}>
          <div className={styles.navbar__link}>About</div>
          <div className={styles.navbar__link}>Products</div>
          <div className={styles.navbar__link}>For Teams</div>
        </div>
        <div className={styles.navbar__search}>
          <input type="text" placeholder="Search" />
        </div>

        <div className={styles.navbar__links}>
          <div className={styles.login_btn}>Log In</div>
          <div className={styles.signup_btn}>Sign Up</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { useRouter } from "next/router";
import { Drawer } from "@mui/material";
import { Login } from "@/components";

function Navbar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbar__left}>
          <div
            className={styles.navbar__menu_container}
            onClick={() => {
              setOpen(true);
            }}
          >
            <HiMenuAlt2
              className={styles.navbar__menu}
              onClick={() => {
                setOpen(true);
              }}
            />
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
          <Login className={styles.login_btn}/>
          <div className={styles.signup_btn}>Sign Up</div>
        </div>
      </div>
      <Drawer
        open={open}
        onClick={handleDrawerClose}
        onClose={(event, reason) => {
          if (reason !== "backdropClick") {
            handleDrawerClose();
          } else if (reason !== "escapeKeyDown") {
            handleDrawerClose();
          }
        }}
        anchor="left"
      >
        <div className={styles.nav__drawer}>
          <div className={styles.navbar__drawer_header}>
            <div
              className={styles.navbar__logo}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              StackChain
            </div>
            <div
              className={styles.navbar__items_mob}
              data-aos="fade-right"
              data-aos-duration="600"
            >
              <div className={styles.navbar__link} onClick={handleDrawerClose}>
                About
              </div>
              <div className={styles.navbar__link} onClick={handleDrawerClose}>
                Products
              </div>
              <div className={styles.navbar__link} onClick={handleDrawerClose}>
                For Teams
              </div>
              <div className={styles.navbar__search_1}>
                <input type="text" placeholder="Search" />
              </div>

              <div className={styles.navbar__links_1}>
                <Login className={styles.login_btn_1}/>
                <div className={styles.signup_btn_1}>Sign Up</div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default Navbar;

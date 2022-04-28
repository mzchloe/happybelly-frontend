import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../happybelly.svg";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className={styles.nav}>
      {/*   <Link className={styles.link} to="/signup">
        Signup
      </Link>
      <Link className={styles.link} to="/login">
        Login
      </Link> */}
      <Link className={styles.link} to="/home">
        <div className={styles.image}>
          <img
            width={150}
            height={90}
            className="logo__img"
            src={logo}
            alt="logo_image"
          />
        </div>
      </Link>
    </div>
  );
}

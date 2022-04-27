import styles from "./Copyright.module.css";
import { Link } from "react-router-dom";

export function Copyright() {
  return (
    <div className={styles.copyright}>
      <Link className={styles.link} to="/about">
        ABOUT
      </Link>
      © 2022 JEANET LIN
    </div>
  );
}

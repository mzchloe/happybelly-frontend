import styles from "./About.module.css";
import logo from "../../img/happybelly.svg";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";

export function About() {
  const { user } = useContext(AuthContext);
  return (
    <div className={styles.about}>
      {/* Welcome to happybelly! */}
      {!user && (
        <div className={styles.image}>
          <Link className={styles.link} to="/">
            {" "}
            <img
              width={150}
              height={90}
              className="logo__img"
              src={logo}
              alt="logo_image"
            />{" "}
          </Link>
        </div>
      )}
      <p>Hi there! I'm Jeanet and this is my first React App with a mobile-first design
      that I have developed as a final project for Ironhack's full-stack web development bootcamp.</p>
      <p>
        <i>happybelly</i> is designed for foodies, like me, living with
        Irritable Bowel Syndrome. This is the first and only community for sharing and 
        discovering restaurants around the world that are IBS-friendly.
      </p>
      <p></p>
    
    </div>
  );
}

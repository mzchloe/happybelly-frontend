import styles from "./LandingPage.module.css";
//import { Signup, Login } from "../../components";
import { Link } from "react-router-dom";
import photo from "../../img/hero.jpg";
import logo from "../../img/happybelly.svg";

export function LandingPage() {
  return (
    <div className={styles.landingPageContainer}>
      <div className={styles.hero}>
     <img
          width={250}
          height={150}
          className={styles.logo__img}
          src={logo}
          alt="logo_image"
        />
        <div className={styles.heroText}>
        The online community for reviews of restaurants that are suitable for foodies living with special dietary requirements.
{/* <p>Discover and share your experiences today</p> */}
        </div>
        </div>
        {/* <div className={styles.signupBox}> */}
          <Link to="/signup">
            <button className={styles.joinBtn}>JOIN FOR FREE</button>
          </Link>
       {/*  </div> */}
      
      <div className={styles.loginBox}>
        <Link to="/login" className={styles.text}>
          <p>
            Already member? </p>
            <button className={styles.loginBtn}>Log In</button> 
        </Link>
      </div>
    </div>
  );
}

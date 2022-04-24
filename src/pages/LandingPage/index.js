import styles from "./LandingPage.module.css";
//import { Signup, Login } from "../../components";
import { Link } from "react-router-dom";
import photo from "../../img/hero.jpg";


export function LandingPage() {

  return (
    <div className={styles.landingPageContainer}>
    <div className={styles.hero}>
    <div className={styles.heroText}>  Discover the places that will make sure you 
can  eat with a 
happy belly</div>
<div className={styles.signupBox}>
        <Link to="/signup">
        <button className={styles.joinBtn}>JOIN FOR FREE</button></Link>

      </div>

</div>
      {/*   <Login />
         <Signup /> */}
      
      <div className={styles.loginBox}>
        <Link to="/login" className={styles.text}><p>Already member?
        <button className={styles.loginBtn}>Log In</button></p></Link>
      </div>
    </div>
  );
}

import styles from "./LandingPage.module.css";
//import { Signup, Login } from "../../components";
import { Link } from "react-router-dom";


export function LandingPage() {

  return (
    <div className={styles.landingPageContainer}>
      {/*   <Login />
         <Signup /> */}
      <div className={styles.signupBox}>
        <Link to="/signup">New Member</Link>
      </div>
      <div className={styles.loginBox}>
        <Link to="/login">Already Member</Link>
      </div>
    </div>
  );
}

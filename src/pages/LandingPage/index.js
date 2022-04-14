import styles from "./LandingPage.module.css";
//import { Signup, Login } from "../../components"; 
import { Link } from "react-router-dom";

export function LandingPage() {
    return (
        <div className={styles.landingPage}>
          Welcome to Happybelly
        <p> 
        <button className={styles.landingPageBtn}>
        <Link to="/login">Signup</Link>
        </button>
        <button className={styles.landingPageBtn}>
        <Link to="/login">Login</Link></button>
        </p>
       
        </div>
    )
}
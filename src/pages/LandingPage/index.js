import styles from "./LandingPage.module.css";
//import { Signup, Login } from "../../components"; 
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context";

export function LandingPage() {
  //get the user 
  const {user} = useContext(AuthContext);
    return (
        <div className={styles.landingPageContainer}>
         <code>{JSON.stringify(user)}</code>
       {/*   <Login />
         <Signup /> */}
        <p> 
        <button className={styles.landingPageBtn}>
        <Link to="/signup">Signup</Link>
        </button>
        <button className={styles.landingPageBtn}>
        <Link to="/login">Login</Link></button>
        </p>
       
        </div>
    )
}
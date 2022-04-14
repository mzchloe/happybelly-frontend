import styles from "./Signup.module.css";

export function Signup() {
    return (
        <form className={styles.signup}>
        <h2>Create Account</h2>
            <input
            id="firstName" placeholder="Your first name"/>
             <input
            id="lastName" placeholder="Your last name"/>
             <input
            id="username" placeholder="Choose a username"/>
             <input
            id="email" placeholder="Your email"/>
             <input
            id="password" placeholder="Choose a strong password"/>
            <button className="signupBtn">Let's go!</button>
        </form>
    )
}
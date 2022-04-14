import styles from "./Login.module.css";

export function Login() {
    return (
        <form className={styles.login}>
        <h2>Login</h2>
             <input
            id="email" placeholder="Your email"/>
             <input
            id="password" placeholder="Your password"/>
            <button className="loginBtn">Login</button>
        </form>
    )
}
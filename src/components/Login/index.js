import styles from "./Login.module.css";
import { AuthContext } from "../../context";
import { useContext, useState } from "react";

export function Login() {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.login}>
        <h2>Login</h2>
             <input
            id="email" type="email" value={email} onChange={(e) => {
                setEmail(e.target.value);
            }} placeholder="Your email"/>
             <input
            id="password" type="password" value={password} onChange={(e) => {
                setPassword(e.target.value);
            }} placeholder="Your password"/>
            <button className="loginBtn">Login</button>
        </form>
    )
}
import styles from "./Login.module.css";
import { AuthContext } from "../../context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../img/happybelly.svg";

export function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.login}>
        {/* <h2>Login</h2> */}
        <Link to="/">
          <img
            width={250}
            height={150}
            className={styles.logo__img}
            src={logo}
            alt="logo_image"
          />
        </Link>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Your email"
        />
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Your password"
        />
        <button className={styles.loginBtn}>Login</button>
      </form>
    </div>
  );
}

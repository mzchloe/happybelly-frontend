import styles from "./Signup.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(firstName, lastName, email, username, password);
     // signup(firstName, lastName, email, username, password);

  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
        <h2>Create Account</h2>
        <input
          id="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Your first name"
        />
        <input id="lastName" value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Your last name" />
        <input id="email" value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }} type="email" placeholder="Your email" />
        <input id="username" value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }} placeholder="Choose a username" />
        <input id="password" type="password" value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }} placeholder="Choose a strong password" />
        <button className={styles.signupBtn}>Let's go!</button>
      </form>
    </div>
  );
}

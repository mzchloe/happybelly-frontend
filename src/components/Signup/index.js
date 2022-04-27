import styles from "./Signup.module.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../context";
import logo from "../../img/happybelly.svg";
import { Link } from "react-router-dom";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
      e.preventDefault();
      //console.log(firstName, lastName, email, username, password);
      //signup function from src/context
      signup(firstName, lastName, email, username, password);
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.signupForm}>
      <Link to="/"><img
          width={250}
          height={150}
          className={styles.logo__img}
          src={logo}
          alt="logo_image"
        /></Link>
        <p>Join our community of foodies who are living with Irritable Bowel Syndrome.</p>
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
        <button className={styles.signupBtn}>Sign up</button>
      </form>
    </div>
  );
}

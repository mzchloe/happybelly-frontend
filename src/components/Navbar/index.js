import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
        {/* Show when visitor comes to page */}
        <Link className={styles.link} to="/signup">Signup</Link> 
        <Link className={styles.link} to="/login">Login</Link> 
        {/* display when user is logged in */}
            <Link className={styles.link} to="/home">Home</Link> 
            <Link className={styles.link} to="/places">Places</Link> 
            <Link className={styles.link} to="/account">My Account</Link> 
            <Link className={styles.link} to="/">Logout</Link> 
        </nav>
    )
}
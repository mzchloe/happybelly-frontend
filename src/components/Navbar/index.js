import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdOutlineLogout, MdFavorite, MdPinDrop, MdHome } from "react-icons/md";

export function Navbar() {
    return (
        <nav>
        {/* Show when visitor comes to page */}
        <Link className={styles.link} to="/signup">Signup</Link> 
        <Link className={styles.link} to="/login">Login</Link> 
        {/* display when user is logged in */}
            <Link className={styles.link} to="/home"><MdHome /></Link> 
            <Link className={styles.link} to="/places"><MdPinDrop /></Link> 
            <Link className={styles.link} to="/favorites"><MdFavorite /></Link> 
            <Link className={styles.link} to="/account"> <MdAccountCircle /></Link> 
            <Link className={styles.link} to="/"><MdOutlineLogout /></Link> 
        </nav>
    )
}
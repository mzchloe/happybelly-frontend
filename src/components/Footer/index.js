import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import {
  MdAccountCircle,
  MdOutlineLogout,
  MdFavorite,
  MdPinDrop,
  MdHome,
} from "react-icons/md";
import { AuthContext } from "../../context";
import { useContext } from "react";
import home from "../../img/home.png";
import search from "../../img/search.png";
import favorites from "../../img/favorite.png";
import account from "../../img/user.png";
import add from "../../img/add.png";

export function Footer() {
  const { user } = useContext(AuthContext);
  //const { logout } = useContext(AuthContext);
  return (
    <div className={styles.footer}>
      {user ? (
        <div className={styles.menu}>
        <NavLink className={styles.navLink} to="/home">
            <img
              width={30}
              height={30}
              className={styles.home__img}
              src={home}
              alt="home_image"
            />
          </NavLink>
          <NavLink className={styles.navLink} to="/places">
            <img
              width={30}
              height={30}
              className={styles.search__img}
              src={search}
              alt="search_image"
            />
          </NavLink>
          <NavLink className={styles.navLink} to="/add">
            <img
              width={30}
              height={30}
              className={styles.add__img}
              src={add}
              alt="add_image"
            />
          </NavLink>
          <NavLink className={styles.navLink} to="/favorites">
            <img
              width={30}
              height={30}
              className={styles.favorites__img}
              src={favorites}
              alt="favorites_image"
            />
          </NavLink>
        
          <NavLink className={styles.navLink} to="/account">
            <img
              width={30}
              height={30}
              className={styles.account__img}
              src={account}
              alt="account__image"
            />
          </NavLink>
          <NavLink className={styles.navLink} to="/"></NavLink>
        </div>
      ) : (
        <p> </p>
      )}
    </div>
  );
}

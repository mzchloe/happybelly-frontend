import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
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
        <Link className={styles.link} to="/home">
            <img
              width={30}
              height={30}
              className={styles.home__img}
              src={home}
              alt="home_image"
            />
          </Link>
          <Link className={styles.link} to="/places">
            <img
              width={30}
              height={30}
              className={styles.search__img}
              src={search}
              alt="search_image"
            />
          </Link>
          <Link className={styles.link} to="/add">
            <img
              width={30}
              height={30}
              className={styles.add__img}
              src={add}
              alt="add_image"
            />
          </Link>
          <Link className={styles.link} to="/favorites">
            <img
              width={30}
              height={30}
              className={styles.favorites__img}
              src={favorites}
              alt="favorites_image"
            />
          </Link>
        
          <Link className={styles.link} to="/account">
            <img
              width={30}
              height={30}
              className={styles.account__img}
              src={account}
              alt="account__image"
            />
          </Link>
          <Link className={styles.link} to="/"></Link>
        </div>
      ) : (
        <p> </p>
      )}
    </div>
  );
}

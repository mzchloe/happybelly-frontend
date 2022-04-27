import styles from "./Account.module.css";
import { MyPlaces } from "../MyPlaces";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";

export function Account() {
  const { user } = useContext(AuthContext);
  const { logout } = useContext(AuthContext);

  const [myReviews, setMyReviews] = useState(false);

  const toggleReviews = () => {
    setMyReviews((previousValue) => {
      return !previousValue; //return true
    });
  };

  return (

    <div className={styles.container}>
    <Link className={styles.link} onClick={logout} to="/" >
          <MdOutlineLogout />
      </Link>
    
{/*       <div className={styles.discover}>
      <h3>Discover Places</h3></div> */}
      <div className={styles.favorites}>
      <h3>My Favorites</h3></div>
      <div className={styles.myPlaces}>
      <button className={styles.reviews} onClick={toggleReviews}><h3>My Reviews</h3></button>
       {myReviews && <MyPlaces />}
      </div>
    </div>
  );
}

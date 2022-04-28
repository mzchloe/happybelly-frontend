import styles from "./Account.module.css";
import { MyPlaces } from "../MyPlaces";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";
import { MdOutlineLogout } from "react-icons/md";
import profile from "../../img/woman.png";

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
      <div className={styles.favorites}>
        <h3>My Profile</h3>
        <div className={styles.profile}>
          <img
            width={60}
            height={60}
            className={styles.profile__img}
            src={profile}
            alt="profile_image"
          />
          <span>
            <b>
              {user.firstName} {user.lastName}
            </b>
          </span>
          <span>Username {user.username}</span>
          <span>Email: {user.email}</span>
          <span>Change Password </span>
        </div>
        <h3>My Favorites</h3>
      </div>

      {/* My Reviews  */}
      <button className={styles.reviews} onClick={toggleReviews}>
        <h3>My Reviews</h3>
      </button>
      {myReviews && <MyPlaces />}

      {/* Logout  */}
      <button className={styles.logout}>
        <Link className={styles.link} onClick={logout} to="/">
          <MdOutlineLogout /> Logout
        </Link>
      </button>
    </div>
  );
}

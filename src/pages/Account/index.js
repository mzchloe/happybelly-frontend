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
  const [showProfile, setShowProfile] = useState(false);

  const toggleReviews = () => {
    setMyReviews((previousValue) => {
      return !previousValue; //return true
    });
  };

  const toggleProfile = () => {
    setShowProfile((previousValue) => {
      return !previousValue;
    });
  };

  return (
    <div className={styles.container}>
      {/* <h3>My Profile</h3> */}
      {user && (
        <div className={styles.profile}>
          <div className={styles.image}> <img
            width={60}
            height={60}
            className={styles.profile__img}
            src={profile}
            alt="profile_image"
          />
          <b>
            {user.firstName} {user.lastName}
          </b>
</div>
          <button className={styles.reviews} onClick={toggleProfile}>
            <h3>My Profile</h3>
          </button>
          {showProfile && (
            <div className={styles.profileinfo}>
              <span>{user.username}</span>
              <span>{user.email}</span>
            </div>
          )}
        </div>
      )}
      {/* <hr className={styles.lineComments}></hr> */}
      <h3>
        {" "}
        <Link className={styles.link} to="/favorites">
          My Favorites
        </Link>
      </h3>
      <div className={styles.favorites}></div>

      {/* <hr className={styles.lineComments}></hr> */}
      {/* My Reviews  */}
      <button className={styles.reviews} onClick={toggleReviews}>
        <h3>My Reviews</h3>
      </button>
      {myReviews && <MyPlaces />}
      <hr className={styles.lineComments}></hr>
      {/* Logout  */}
      <button className={styles.logout}>
        <Link className={styles.link} onClick={logout} to="/">
          <MdOutlineLogout /> Logout
        </Link>
      </button>
    </div>
  );
}

import styles from "./Account.module.css";
import { MyPlaces } from "../MyPlaces";

export function Account() {
  return (
    <div className={styles.container}>
      <div className={styles.discover}>Discover Places</div>
      <div className={styles.favorites}>My Favorites</div>
      <div className={styles.myPlaces}>
        <MyPlaces />
      </div>
    </div>
  );
}

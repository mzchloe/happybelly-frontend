import styles from "./Home.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { PlaceForm } from "../../components/PlaceForm";
import learn from "../../img/learn.png";
import restaurant from "../../img/restaurant.png";
import tips from "../../img/tips.png";
import city from "../../img/city.png";
import community from "../../img/community.png";
import { Link } from "react-router-dom";

export function Home() {
  //get the user
  const { user } = useContext(AuthContext);

  /* Attempt for displaying "Coming Soon" when clicked on 
  const [comingSoon, setComingSoon] = useState(true);

  const toggleCategory = () => {
    setComingSoon((previousValue) => {
      return <span> coming soon</span>; //return true
    });
  };
 */
  return (
    <div className={styles.container}>
      {user ? <h2>Welcome {user.firstName}</h2> : null}
      <Link className={styles.link} to="/places">
        <div className={styles.categoryDiscoverCard}>
          <div className={styles.image}>
            <img
              width={60}
              height={60}
              className={styles.restaurant__img}
              src={restaurant}
              alt="restaurant_image"
            />
          </div>
          <div className={styles.category}>
            <h3>DISCOVER</h3>
            <p>restaurants</p>
          </div>
        </div>
      </Link>

      <div className={styles.categoryTipsCard}>
        <div className={styles.image}>
          <img
            width={60}
            height={60}
            className={styles.tips__img}
            src={tips}
            alt="tips_image"
          />
        </div>
        <div className={styles.category}>
          <h3>TIPS</h3>
          <p>for dining out</p>
        </div>
      </div>

      <div className={styles.categoryLearnCard}>
        <div className={styles.image}>
          <img
            width={60}
            height={60}
            className={styles.learn__img}
            src={learn}
            alt="learn_image"
          />
        </div>
        <div className={styles.category}>
          <h3>LEARN</h3>
          <p>about FODMAPs</p>
        </div>
      </div>
      <div className={styles.categoryCityCard}>
        <div className={styles.image}>
          <img
            width={60}
            height={60}
            className={styles.city__img}
            src={city}
            alt="city_image"
          />
        </div>
        <div className={styles.category}>
          <h3>EXPLORE</h3>
          <p>by city</p>
        </div>
      </div>
      <div className={styles.categoryCommunityCard}>
        <div className={styles.image}>
          <img
            width={60}
            height={60}
            className={styles.community__img}
            src={community}
            alt="community_image"
          />
        </div>
        <div className={styles.category}>
          <h3>MEET</h3>
          <p>your community</p>
        </div>
      </div>
    </div>
  );
}

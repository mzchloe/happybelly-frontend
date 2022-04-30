import styles from "./ListOfPlaces.module.css";
import { Place } from "../Place";

export function ListOfPlaces({ places, handleDelete, favoritePlace=false }) {

  return (
    <ul className={styles.listContainer}>
      {places
        .sort((oldestReview, newestReview) => {
          let oldestReviewDate = new Date(oldestReview.createdAt.toString())

          let newestReviewDate = new Date(newestReview.createdAt.toString())
       
          if (oldestReviewDate.getTime() < newestReviewDate.getTime()) {
            return 1
          } if (oldestReviewDate.getTime() > newestReviewDate.getTime()) {
            return -1 
          } return 0
  
        })
        .map((place) => {
          return (
            <div key={place._id}>
              <Place place={place} handleDelete={handleDelete} favoritePlace={favoritePlace}/>
            </div>
          );
        })}
    </ul>
  );
}

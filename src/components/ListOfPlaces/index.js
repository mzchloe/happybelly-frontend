import styles from "./ListOfPlaces.module.css";
import { Place } from "../Place";
import { useContext } from "react";
import { AuthContext } from "../../context";

export function ListOfPlaces({ places, handleDelete, favoritePlace=false }) {

  const { user } = useContext(AuthContext)

  return (
    <>
    {user && <ul className={styles.listContainer}>
      {places
        .sort((oldestReview, newestReview) => {
          let oldestReviewDate = new Date(oldestReview.createdAt.toString())

          let newestReviewDate = new Date(newestReview.createdAt.toString())
       
          //console.log(places) 
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
    </ul>}
    </>
  );
}

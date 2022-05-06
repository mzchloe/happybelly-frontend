import styles from "./ListOfPlaces.module.css";
import { Place } from "../Place";
import { useContext } from "react";
import { AuthContext } from "../../context";

export function ListOfPlaces({
  places,
  handleDelete,
  favoritePlace = false,
  showOptions,
}) {
  //access to the user using AuthContext
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && places && (
        <ul className={styles.listContainer}>
          {places
            .sort((oldestReview, newestReview) => {
              let oldestReviewDate = new Date(oldestReview.createdAt);
              let newestReviewDate = new Date(newestReview.createdAt);

              //console.log(places)
              if (oldestReviewDate < newestReviewDate) {
                return 1;
              } else {
                return -1;
              }
            })
            .map((place) => {
              return (
                <li key={place._id} className={styles.listOfItems}>
                  {/* props here places/ handleDelete and favoritePlace are passed from the parent ListOfPlaces above */}
                  <Place
                    key={place._id}
                    place={place}
                    handleDelete={handleDelete}
                    favoritePlace={favoritePlace}
                    showOptions={showOptions}
                  />
                </li>
              );
            })}
        </ul>
      )}
    </>
  );
}

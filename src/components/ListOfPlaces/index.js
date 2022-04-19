import styles from "./ListOfPlaces.module.css";
import { Place } from "../Place";
import { client } from "../../client";

export function ListOfPlaces({ places }) {
  return (
    <ul className={styles.listContainer}>
      List of places
      {places.map((place) => {
        return (
          <div key={place._id}>
            <Place place={place}
            />
          </div>
        );
      })}
    </ul>
  );
}

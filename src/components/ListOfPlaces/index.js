import styles from "./ListOfPlaces.module.css";
import { Place } from "../Place";
import { client } from "../../client";

export function ListOfPlaces({ places, handleDelete }) {
  return (
    <ul className={styles.listContainer}>
      {places.map((place) => {
        return (
          <div key={place._id}>
            <Place place={place} handleDelete={handleDelete}
            />
            
          </div>
        );
      })}
    </ul>
  );
}

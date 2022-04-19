import styles from "./Places.module.css";

export function Place({ place }) {
  return (
    <div className={styles.placeCard}>
    
    <h3 className={styles.name}>{place.name}</h3>
    <span className={styles.city}>{place.city}</span>
     <span className={styles.author}>Author: {place.author.firstName} {place.author.lastName}</span>
      <span className={styles.published}>Published: {place.createdAt}</span>
      <span className={styles.diet}>Dietary Type:{place.dietaryType}</span> 
      <p className={styles.description}>{place.description}</p>
    </div>
  );
}

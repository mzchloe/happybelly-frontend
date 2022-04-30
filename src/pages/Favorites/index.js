import styles from "./Favorites.module.css";
import { AuthContext } from "../../context";
import { useContext } from "react";
import { ListOfPlaces } from "../../components";

export function Favorites(favorites) {
    const { user } = useContext(AuthContext);
    //console.log(user)
    if (!user) {
        return 'Loading'
    }
    return (
      <ul className={styles.listOfFavorites}>
        <div className={styles.container}>My Favorite Places
        <ListOfPlaces places={user.favorite}/>
        </div>
        </ul>
        
    )
}
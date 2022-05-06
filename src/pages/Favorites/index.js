import styles from "./Favorites.module.css";
import { AuthContext } from "../../context";
import { useContext } from "react";
import { ListOfPlaces } from "../../components";
import { client } from "../../client";

export function Favorites(favorites) {
  const { user, setUser } = useContext(AuthContext);
  //console.log(user)
  const handleDeleteList = async () => {
    const response = await client.delete(`/user/favorites`);

    setUser(response.data);
  };

  if (!user) {
    return "Loading";
  }
  return (
    <ul className={styles.listOfFavorites}>
      {user && (
        <div className={styles.container}>
          My Favorite Places
          {user.favorite?.length > 0 && (
            <button onClick={handleDeleteList}>Remove List</button>
          )}
          <ListOfPlaces places={user.favorite} />
        </div>
      )}
    </ul>
  );
}

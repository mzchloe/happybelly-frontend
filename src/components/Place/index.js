import styles from "./Places.module.css";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineAddComment,
  MdOutlineModeComment,
} from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";

export function Place({ place }) {
  //getting the user
  const { user } = useContext(AuthContext);
  //const [place, setPlace] = useState("");

  const handleDelete = () => {
    client.delete(`/place/${place._id}`);
  };

  //console.log(user._id, place.author._id, place._id)

/*   const handleEdit = () => {
    client.put(`/place/${place._id}`);
  }; */

  return (
    <div className={styles.placeCard}>
        {user._id === place.author._id && (
        <button onClick={handleDelete}>Delete</button>
      )}
      {user._id === place.author._id && (
        <button onClick={handleEdit}>Edit</button>
      )}
      <h3 className={styles.name}>{place.name}</h3>
      <span className={styles.city}>{place.city}</span>
      <span className={styles.author}>
        Author: {place.author.firstName} {place.author.lastName}
      </span>
      <span className={styles.published}>Published: {place.createdAt}</span>
      <span className={styles.diet}>Dietary Type:{place.dietaryType}</span>
      <p className={styles.description}>{place.description}</p>
      
      {user._id && <button>Add a comment</button>}
      <button>Show Comments</button>
      {/* <div className={styles.comments}> */}
      {/* <MdOutlineAddComment />
          <MdOutlineModeComment /> */}
    </div>
    /* </div> */
  );
}

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
import { useNavigate } from "react-router-dom";
import { AddComment } from "../AddComment";
import { Comment } from "../Comment";

export function Place({ place, handleDelete }) {
  //getting the user
  const { user } = useContext(AuthContext);
  //const [place, setPlace] = useState("");

  
  //console.log(user._id, place.author._id, place._id)
let navigate = useNavigate()

  const handleEdit = () => {
    navigate(`/editPlace/${place._id}`)
   // client.put(`/place/${place._id}`);

  };

  return (
    <div className={styles.placeCard}>
        {user._id === place.author._id && (
        <button onClick={() => {handleDelete(place._id)}}>Delete</button>
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
      
      {user._id && <button>Comment</button>}
      <button>Show Comments</button>
      {/* <div className={styles.comments}> */}
      {/* <MdOutlineAddComment />
          <MdOutlineModeComment /> */}
          <AddComment place={place} />
          <ul>
            {place.comments.map((comment) => <Comment key={comment._id} comment={comment}/>)}
          </ul>
          
    </div>
    /* </div> */
  );
}

import styles from "./Places.module.css";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineAddComment,
  MdOutlineModeComment,
} from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";
import { AddComment } from "../AddComment";
import { Comment } from "../Comment";

export function Place({ place, handleDelete }) {
  //getting the user
  const { user } = useContext(AuthContext);
  //const [place, setPlace] = useState("");

  const [addComment, setAddComment] = useState(false);

  const [showComment, setShowComment] = useState(false);

  //console.log(user._id, place.author._id, place._id)
  let navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editPlace/${place._id}`);
    // client.put(`/place/${place._id}`);
  };

  const toggleComment = () => {
    setAddComment((previousValue) => {
      return !previousValue; //return true
    });
  };

  const toggleShowComment = () => {
    setShowComment((previousValue) => {
      return !previousValue;
    });
  };

  return (
    <div className={styles.placeCard}>
 <div className={styles.privateBtns}> 
      {user._id === place.author._id && (
        <button
          className={styles.delete}
          onClick={() => {
            handleDelete(place._id);
          }}>
          <MdDelete />
        </button>
      )}
      {user._id === place.author._id && (
        <button className={styles.edit} onClick={handleEdit}>
          <MdModeEdit />
        </button>
        )}
        </div>
      
      <h3 className={styles.name}>{place.name}</h3>
      <span className={styles.city}>{place.city}</span>
      <span className={styles.author}>
        Author: {place.author.firstName} {place.author.lastName}
      </span>
      <span className={styles.published}>
        Published: {place.createdAt.split("T")[0]}
      </span>
      {/* <span className={styles.published}>Published: {place.createdAt.split(".")[0].split("T").join(" at ")} </span> */}
      <span className={styles.diet}>Dietary Type:{place.dietaryType}</span>
      <p className={styles.description}>{place.description}</p>

      {user._id && <button onClick={toggleComment}> Comment</button>}
      <button onClick={toggleShowComment}>Show Comments</button>
      {/* <div className={styles.comments}> */}
      {/* <MdOutlineAddComment />
          <MdOutlineModeComment /> */}
      {addComment && <AddComment place={place} />}
      {showComment && (
        <ul>
          {place.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
    /* </div> */
  );
}

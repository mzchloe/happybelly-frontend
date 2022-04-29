import styles from "./Places.module.css";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineModeComment,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";
import { AddComment } from "../AddComment";
import { Comment } from "../Comment";
import restaurant from "../../img/restaurant.png";

export function Place({ place, handleDelete }) {
  //getting the user
  const { user, setUser } = useContext(AuthContext);
  //const [place, setPlace] = useState("");

  const [addComment, setAddComment] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAll, setShowAll] = useState(false);

  //console.log(user._id, place.author._id, place._id)
  let navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/editPlace/${place._id}`);
    // client.put(`/place/${place._id}`);
  };

  const handleSave = async () => {
    //request to backend by sending the userId and placeId from frontend
    const newUser = await client.put("/user/favorites", {
      userId: user._id,
      placeId: place._id,
    });
    console.log(newUser);
    setUser(newUser.data);
    //navigate('/favorites');
  };

  /*   const handleUnSave = () => {
    //request to backend by sending the userId and placeId from frontend
    const removePlace = client.put("/user/favorites", {
      userId: user._id,
      placeId: place._id,
    });
    setUser(removePlace);
    //navigate('/favorites');
  }; */

  /*  const toggleComment = () => {
    setAddComment((previousValue) => {
      return !previousValue; //return true
    });
  }; */

  const toggleShowComment = () => {
    setShowComment((previousValue) => {
      return !previousValue;
    });
  };

  return (
    <div className={styles.placeCard}>
      {/* {console.log(user, 'this is our user')} */}
      <div className={styles.header}>
        <div className={styles.image}>
          <img
            width={60}
            height={60}
            className={styles.restaurant__img}
            src={restaurant}
            alt="restaurant_image"
          />
        </div>
        <div className={styles.place}>
          <h3>{place.name}</h3>
          <span>{place.city}</span>
        </div>
        <div className={styles.privateBtns}>
          {user._id === place.author._id && (
            <button
              className={styles.delete}
              onClick={() => {
                handleDelete(place._id);
              }}
            >
              <MdDelete />
            </button>
          )}
          {user._id === place.author._id && (
            <button className={styles.edit} onClick={handleEdit}>
              <MdModeEdit />
            </button>
          )}
          {/* {user._id && console.log(place._id, user.favorite.forEach(savedPlace))} */}
        </div>
      </div>

      {/* <span className={styles.published}>Published: {place.createdAt.split(".")[0].split("T").join(" at ")} </span> */}
      <span className={styles.diet}>{place.dietaryType}</span>
      <div className={styles.details}>
        {place.author.firstName} {place.author.lastName} on{" "}
        {place.createdAt.split("T")[0]}
      </div>
      <div className={styles.description}>
        <p>{place.description}</p>
      </div>

      <div className={styles.bottom}>
        <div className={styles.favoriteBtn}>
          {user._id &&
            user.favorite.forEach((savedPlace) => {
              if (savedPlace === place._id) {
                if (isFavorite === false) {
                  setIsFavorite(true);
                }
              }
            })}

          {user._id && isFavorite ? (
            <button className={styles.save}>
              <MdOutlineFavorite /> Added to Favourite
            </button>
          ) : (
            <button
              className={styles.save}
              onClick={() => {
                handleSave();
              }}
            >
              <MdOutlineFavoriteBorder /> Add to Favourite
            </button>
          )}
        </div>
        <div className={styles.comment} onClick={toggleShowComment}>
          <MdOutlineModeComment />
          <button className={styles.commentBtn}>Comments</button>
        </div>
      </div>

      {showComment && <AddComment place={place} />}
      {showComment && (
        <ul>
          {place.comments.map((comment) => (
            <Comment key={comment._id} comment={comment} />
          ))}
        </ul>
      )}
    </div>
  );
}

import styles from "./Places.module.css";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineAddComment,
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

export function Place({ place, handleDelete }) {
  //getting the user
  const { user, setUser } = useContext(AuthContext);
  //const [place, setPlace] = useState("");

  const [addComment, setAddComment] = useState(false);

  const [showComment, setShowComment] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);


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
    console.log(newUser)
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
    {console.log(user, 'this is our user')}
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
        {user._id && user.favorite.forEach((savedPlace) => {
          console.log(savedPlace, place._id)
          if (savedPlace === place._id) {
            if (isFavorite === false ) {
              setIsFavorite(true);
            } 
           
          }
        })}
        
        {user._id && 
        isFavorite ? 
          <button
                className={styles.save}
              >
                <MdOutlineFavorite />
              </button>
            :
              <button
                className={styles.save}
                onClick={() => {
                  handleSave();
                }}
              >
                <MdOutlineFavoriteBorder />
              </button>  
        }
      </div>

      <h3 className={styles.name}>{place.name}</h3>
      <span className={styles.city}>{place.city}</span>
      <span className={styles.author}>
        Added by: {place.author.firstName} {place.author.lastName}
      </span>
      <span className={styles.published}>
        Created on: {place.createdAt.split("T")[0]}
      </span>
      {/* <span className={styles.published}>Published: {place.createdAt.split(".")[0].split("T").join(" at ")} </span> */}
      <span className={styles.diet}>Special diet: {place.dietaryType}</span>
      <p className={styles.description}>{place.description}</p>

     {/*  {user._id && <button onClick={toggleComment}> Add Comment</button>} */}
      <button onClick={toggleShowComment}> Comments</button>
      {/* <div className={styles.comments}> */}
      {/* <MdOutlineAddComment />
          <MdOutlineModeComment /> */}
      {showComment && <AddComment place={place} />}
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

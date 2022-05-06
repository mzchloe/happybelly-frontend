import styles from "./Places.module.css";
import {
  MdDelete,
  MdModeEdit,
  MdOutlineModeComment,
  MdOutlineFavorite,
  MdOutlineFavoriteBorder,
} from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";
import { useNavigate } from "react-router-dom";
import { AddComment } from "../AddComment";
import { Comment } from "../Comment";
import restaurant from "../../img/restaurant.png";

export function Place({ place, favoritePlace, showOptions}) {
  //getting the user
  const { user, setUser, getPlaces } = useContext(AuthContext);
  //const [place, setPlace] = useState("");

  const [addComment, setAddComment] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAll, setShowAll] = useState(false);

  //console.log(user._id, place.author._id, place._id)
  let navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    navigate(`/editPlace/${place._id}`);
  };

  const handleDelete = async (id) => {
    await client.delete(`/place/${id}`);
    getPlaces();
  };

  const calculateIsFavorite = () => {
    const aPlace = user?.favorite.find((fav) => {
      return fav._id === place._id;
    });
    // console.log(aPlace)
    setIsFavorite(!!aPlace);
  };

  useEffect(() => {
    calculateIsFavorite();
  }, [user]);

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

  const handleShowAll = () => {
    setShowAll((previousValue) => {
      return !previousValue;
    });
  };

  const toggleShowComment = () => {
    setShowComment((previousValue) => {
      return !previousValue;
    });
  };

  if (user && user._id && place && place._id) {
    user.favorite.forEach((savedPlace) => {
      if (savedPlace === place._id) {
        if (isFavorite === false) {
          setIsFavorite(true);
        }
      }
    });
  }

  return (
    <>
         {user && place && (
           <div className={styles.placeCard}>
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
               {showOptions && <div className={styles.privateBtns}>
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
                   <button
                     className={styles.edit}
                     onClick={(e) => {
                       handleEdit(e);
                     }}
                   >
                     <MdModeEdit />
                   </button>
                 )}
               </div>}
             </div>
   
             {/* <span className={styles.published}>Published: {place.createdAt.split(".")[0].split("T").join(" at ")} </span> */}
             <span className={styles.diet}>{place.dietaryType}</span>
             <div className={styles.details}>
               {place.author.firstName} {place.author.lastName} on{" "}
               {place.createdAt.split("T")[0]}
             </div>
             <div className={styles.description}>
               {/* <p>{place.description}</p> */}
               {showAll ? (
                 <p style={{ "white-space": "pre-line" }}>{place.description}</p>
               ) : (
                 <p> {`${place.description.substring(0, 100)}`}</p>
               )}
               <div className={styles.showAll}>
                 {place.description.length > 100 && (
                   <button className={styles.readBtn} onClick={handleShowAll}>
                     {showAll ? "Read less" : "Read more"}
                   </button>
                 )}
               </div>
             </div>
   
             <div className={styles.bottom}>
               <div className={styles.favoriteBtn}>
                 {user._id && isFavorite ? (
                   <button className={styles.save}>
                     <MdOutlineFavorite /> Favourite
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
                 <button className={styles.commentBtn}>
                   {" "}
                   <MdOutlineModeComment /> Comments
                 </button>
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
         )}
       </>
   
  );
}

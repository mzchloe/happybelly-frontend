import styles from "./Comment.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";
import { MdDelete } from "react-icons/md";
import userImg from "../../img/user2.png";

export function Comment({ comment }) {
  const { user, getPlaces } = useContext(AuthContext);

  const handleDelete = async (id) => {
    await client.delete(`/comment/${id}`);
    getPlaces();
  };

  return (
    <div className={styles.commentCard}>
      <hr className={styles.lineComments}></hr>
      
      <div className={styles.commentBody}>
      <div className={styles.image}>
          <img
            width={20}
            height={20}
            className={styles.userImg__img}
            src={userImg}
            alt="userImg_image"
          />
        </div>
      <p className={styles.comment}>{comment.comment}</p>
     
      </div>
      <div className={styles.bottom}> 
        <span className={styles.postedBy}>
          Commented on {comment.createdAt.split("T")[0]} by{" "}
          {comment.author.firstName} {comment.author.lastName}
        </span><div className={styles.btns}>
      
      {user._id === comment.author._id && (
        <div className={styles.deleteIcon}>
        <button
          className={styles.delete}
          onClick={() => handleDelete(comment._id)}
        ><MdDelete />
        </button>
        </div>
      )}
    </div>
        </div>
      
       
     
      
    </div>
  );
}

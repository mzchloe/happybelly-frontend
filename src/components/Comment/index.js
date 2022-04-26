import styles from "./Comment.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";

export function Comment({ comment }) {
  const { user, getPlaces } = useContext(AuthContext);

  const handleDelete = async (id) => {
  
      await client.delete(`/comment/${id}`);
      getPlaces();
    };

  return (
      
    <div className={styles.commentCard}>
      <div className={styles.commentBody}>
        <span className={styles.postedBy}>Commented on {comment.createdAt.split("T")[0]} by {comment.author.firstName} {comment.author.lastName}</span>
        <p className={styles.comment}>{comment.comment}</p>
      </div>
      <div className={styles.btns}>
        {user._id === comment.author._id &&  
        <button onClick={() => handleDelete(comment._id)}>Delete</button>}

      </div>
    </div>
    
  );
}

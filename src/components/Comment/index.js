import styles from "./Comment.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";
import { MdDelete } from "react-icons/md";

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
      
      <p className={styles.comment}>{comment.comment}</p>
      
      <div className={styles.bottom}> 
        <span className={styles.postedBy}>
          Commented on {comment.createdAt.split("T")[0]} by{" "}
          {comment.author.firstName} {comment.author.lastName}
        </span>
        </div>
      
        <div className={styles.btns}>
      
      {user._id === comment.author._id && (
        <div className={styles.deleteIcon}>
        <MdDelete /><button
          className={styles.delete}
          onClick={() => handleDelete(comment._id)}
        >
        </button>
        </div>
      )}
    </div>
      </div>
      
    </div>
  );
}

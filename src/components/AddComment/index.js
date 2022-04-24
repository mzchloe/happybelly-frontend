import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { client } from "../../client";
import { AuthContext } from "../../context";
import styles from "./AddComment.module.css";

export function AddComment({ place }) {
  const [comment, setComment] = useState("");
  const { getPlaces } = useContext(AuthContext);

  const addComment = async () => {
    try {
      const data = await client.post(`/comment/${place._id}`, {
        comment,
      });
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addComment();
    getPlaces();
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.submit}>
      <textarea
        id="comment"
        value={comment}
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder="Please share your comment or review of this place"
      />
      <button className={styles.addBtn}>Add Comment</button>
    </form>
  );
}

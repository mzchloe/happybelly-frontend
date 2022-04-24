import styles from "./Comment.module.css";

export function Comment({comment}) {
    return (
        <div className={styles.commentCard}>
            <p>{comment.comment}</p>
        </div>
    )
}
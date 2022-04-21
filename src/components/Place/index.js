import styles from "./Places.module.css";
import {MdDelete, MdModeEdit, MdOutlineAddComment, MdOutlineModeComment} from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../context";

export function Place({ place }) {
    //getting the user 
    const { user } = useContext(AuthContext)
    //const [place, setPlace] = useState("");

  

  return (
    <div className={styles.placeCard}>
    
    <h3 className={styles.name}>{place.name}</h3>
    <span className={styles.city}>{place.city}</span>
     <span className={styles.author}>Author: {place.author.firstName} {place.author.lastName}</span>
      <span className={styles.published}>Published: {place.createdAt}</span>
      <span className={styles.diet}>Dietary Type:{place.dietaryType}</span> 
      <p className={styles.description}>{place.description}</p>
      {/* Show delete/edit for the owner of this review */}
      <div className={styles.btnContainer}>
    {/*   <div className={styles.buttons}>
      {user._id == place.author && button onClick={handleDelete}><MdDelete />
      </button>
      <MdModeEdit /> 
      </div>
      }
       */}
     
      <div className={styles.comments}>
          <MdOutlineAddComment />
          <MdOutlineModeComment />
      </div>
      </div>
      
    </div>
  );
}

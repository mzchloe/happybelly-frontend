import styles from "./Home.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context";
import { PlaceForm } from "../../components/PlaceForm";

export function Home() {
      //get the user
  const { user } = useContext(AuthContext);

    return (
        <div className={styles.container}>
       {user ? <p>Welcome {user.firstName}</p> : null}
        <PlaceForm />
        </div>
    )
}
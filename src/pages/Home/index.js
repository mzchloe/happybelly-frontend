import styles from "./Home.module.css";
import { useContext } from "react";
import { AuthContext } from "../../context";

export function Home() {
      //get the user
  const { user } = useContext(AuthContext);

    return (
        <div className={styles.container}>
        Welcome <code>{JSON.stringify(`${user.firstName}`)}</code> 
        </div>
    )
}
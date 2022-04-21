import styles from "./MyPlaces.module.css";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context";
import { client } from "../../client";
import { Place } from "../../components/Place";

export function MyPlaces() {
    const [places, setPlaces] = useState([])
   // const { user } = useContext(AuthContext)

    const getPlaces = async () => {
        const result = await client.get('/place/myplaces');
        //the data
        setPlaces(result.data);
    };

//making request backend to run only once 
    useEffect(() => {
        getPlaces();
      }, []);

    //get the logged in user (get the user from useContext?)
    //get all the places id by this user (findById)
   

    return (
        
        <ul className={styles.listContainer}>
      My Places
      {places.map((place) => {
        return (
          <div key={place._id}>
          <Place place={place}/>
          </div>
        );
      })}
    </ul>
         //display them 
    )
}
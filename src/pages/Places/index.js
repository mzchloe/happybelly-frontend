import styles from "./Places.module.css";
import { useContext, useEffect, useState } from "react";
import { client } from "../../client";
import { ListOfPlaces } from "../../components";
import { AuthContext } from "../../context";
import searchIcon from "../../img/magnifier.png";

export function Places() {
    const { places, getPlaces } = useContext(AuthContext);
    
    
    //const [places, setPlaces] = useState([])

   /*  const getPlaces = async () => {
        const result = await client.get('/place');

        setPlaces(result.data);
    }; replaced by useContext above */

//this function is moved from Place component
    const handleDelete = async (id) => {
      /*   const filterPlaces = places.filter((place) => {
            return place._id !== id
        })  */
      
        await client.delete(`/place/${id}`);
        getPlaces()
      };
    
//console.log(places)
    useEffect(() => {
        getPlaces();
      }, []);

    return (
        <div className={styles.container}>
        <div className={styles.search}>
            <input className={styles.input} type="search" placeholder="Search by restaurant name or city">
          
            </input>
        </div>
        {/* <div className={styles.places}> */}
            <ListOfPlaces places={places} handleDelete={handleDelete}/>
        </div>
        /* </div> */
        
    )
}
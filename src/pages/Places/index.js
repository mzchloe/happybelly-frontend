import styles from "./Places.module.css";
import { useEffect, useState } from "react";
import { client } from "../../client";
import { ListOfPlaces } from "../../components";

export function Places() {
    const [places, setPlaces] = useState([])

    const getPlaces = async () => {
        const result = await client.get('/place');

        setPlaces(result.data);
    };
//console.log(places)
    useEffect(() => {
        getPlaces();
      }, []);

    return (
        <div>
            <ListOfPlaces places={places}/>
        </div>
        
    )
}
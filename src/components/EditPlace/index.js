import styles from "./EditPlace.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../client";

export function EditPlace() {
  const [placeEdit, setPlaceEdit] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [dietaryType, setDietaryType] = useState("");
  const [description, setDescription] = useState("");
  

  /* let navigate = useNavigate(); */

  //to get the data you want to edit from that place you chose to edit
  useEffect(() => {
    async function asyncCall() {
      const editPlaceData = await client.get(
        `place/${window.location.pathname.split("/").at(-1)}`
      );
      setPlaceEdit(editPlaceData.data);
     /*  setName(editPlaceData.name)
      setAddress(editPlaceData.address)
      setCity(editPlaceData.city)
      setDietaryType(editPlaceData.dietaryType)
      setDescription(editPlaceData.description)
      //console.log(editPlaceData) */
    }
    asyncCall();
  }, []);

  //edit place with existing input
  useEffect(() => {
    setName(placeEdit.name);
    setAddress(placeEdit.address);
    setCity(placeEdit.city);
    setDietaryType(placeEdit.dietaryType);
    setDescription(placeEdit.description);
  }, [placeEdit]);

  let navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatePlace = async () => {
      try {
        const data = await client.put(
          `place/${window.location.pathname.split("/").at(-1)}`,
          {
            name,
            address,
            city,
            dietaryType,
            description,
          }
        );
        navigate("/places");
      } catch (error) {}
    };
    updatePlace();
  };

  return (
    <>
    { placeEdit && <div className={styles.editContainer}>
      <form onSubmit={handleUpdate} className={styles.updatePlace}>
        {/*  <h2>Edit Your Review</h2> */}
        <label htmlFor="name" className={styles.required}>
          Name of place
        </label>
        <input
          id="name"
          value={name || ""}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name of the restaurant*"
        />
        <label htmlFor="address">Address</label>
        <input
          id="address"
          value={address || ""}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address of the restaurant"
        />
        <label htmlFor="city" className={styles.required}>
          City location
        </label>
        <input
          id="city"
          value={city || ""}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Which city is it located at?*"
        />
        {/* Change to a dropdown menu */}
        <label htmlFor="dietaryType" className={styles.required}>
          Special Dietary Needs
        </label>
        <input
          id="dietaryType"
          value={dietaryType || ""}
          onChange={(e) => {
            setDietaryType(e.target.value);
          }}
          placeholder="Is it gluten-free/coeliac, lactose- or diary-free, FODMAP-friendly?*"
        />
        <label htmlFor="description" className={styles.required}>
          Share your experience
        </label>
        <textarea
          id="description"
          value={description || ""}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Please share the experience you had with other members, it can be a dish you had, or special request you made.*"
        />
        <span className={styles.smallText}>(*) required fields</span>
        <button className={styles.saveBtn}>SAVE CHANGES</button>
      </form>
    </div>}
    </>
  );
}

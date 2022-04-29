import styles from "./PlaceForm.module.css";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../../client";
import { AuthContext } from "../../context";

export function PlaceForm() {
  const [createdAt, setCreatedAt] = useState("");
  //const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [dietaryType, setDietaryType] = useState("");
  const [description, setDescription] = useState("");
  const [comments, setComments] = useState("");

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(createdAt, author, name, address, city, dietaryType, description, comments);
    //create Place function
    const addPlace = async (
      createdAt,
      name,
      address,
      city,
      dietaryType,
      description,
      comments
    ) => {
      try {
        // console.log(createdAt, author, name, address, city, dietaryType, description, comments);
        const data = await client.post("/place", {
          createdAt,
          //author,
          name,
          address,
          city,
          dietaryType,
          description,
          comments,
        });
        navigate('/places')
      } catch (error) {
        console.log(error);
      }
    };
    addPlace(
      createdAt,
      //author,
      name,
      address,
      city,
      dietaryType,
      description,
      comments
    );
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.addPlace}>
        <h2>Add A Review</h2>
        <span className={styles.form}>* are required fields</span>
        <input
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name of the restaurant*"
        />
        <input
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          placeholder="Address of the restaurant"
        />
        <input
          id="city"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          placeholder="Which city is it located at?*"
        />
        {/* Change to a dropdown menu */}
        <input
          id="dietaryType"
          value={dietaryType}
          onChange={(e) => {
            setDietaryType(e.target.value);
          }}
          placeholder="Choose the type of diet from the list*"
        />
        <textarea
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }} className={styles.content}
          placeholder="Share your experiences of this place with other community members"
        />
        <button className={styles.addBtn}>Submit review</button>
        <button className={styles.clearBtn}>Clear form</button>
      </form>
    </div>
  );
}


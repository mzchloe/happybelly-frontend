import { createContext, useEffect, useState } from "react";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //navigating programatically
  const navigate = useNavigate();
  //setting the user
  const [user, setUser] = useState(null);

  //make place available other places
  const [places, setPlaces] = useState([]);

  const getPlaces = async () => {
    const result = await client.get('/place');

    setPlaces(result.data);
};


//make favorites available other places 
const [favorites, setFavorites] = useState([]);

const getFavorites = async () => {
  const result = await client.get('/user');

  setFavorites(result.data);
}

  //saving the token
  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  //delete token when logging out
  const deleteToken = () => {
    localStorage.removeItem('token');
  }

  //signup function 
  const signup = async (firstName, lastName, email, username, password) => {
   try {
// console.log(firstName, lastName, email, username, password);
const response = await client.post("/auth/signup", {
  firstName,
  lastName,
  email,
  username,
  password,
});
navigate('/login')
   } catch (error) {
     console.log(error)
   }
  };

  //login function 
  const login = async (email, password) => {
    try {
      const response = await client.post("/auth/login", {
        email,
        password,
      });
      saveToken(response.data.token);
      //try to get the user from /user route
      const user = await client.get('/user')
      //console.log(user.data)
      //set the user
      setUser(user.data);
      //once user is logged in, we redirect the user
      navigate('/home')
    } catch (error) {
      console.log(error);
    }
  };

  //verify function 
  const verify = async () => {
    try { 
      const response = await client.post('auth/verify')
      const user = await client.get('/user')
     // console.log(user)
      setUser (user.data)
      //if user is correct, we redirect the user to
      /* navigate('/home') */
    } catch (error) {
      navigate('/')
    }
  }

  //logout function 
  const logout = () => {
    deleteToken()
    setUser()
    navigate('/')
  }

  //to execute our verify function just once when the app starts
  useEffect(() => {
    verify();
  }, []);

  //values accessible everywhere in the app
  const value = {
    user,
    signup,
    login,
    logout,
    places, 
    getPlaces,
    favorites,
    getFavorites,
    setUser,
    //getComments,
  };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

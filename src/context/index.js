import { createContext, useEffect, useState } from "react";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  //navigating programatically
  const navigate = useNavigate();
  //setting the user
  const [user, setUser] = useState(null);

  //saving the token
  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

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
      //set the user
      setUser(response.data.user);
      //once user is logged in, we redirect the user
      navigate('/home')
    } catch (error) {
      console.log(error);
    }
  };

  //verify function 
  const verify = async () => {
    try { 
      const response = await client.get('auth/verify')
      setUser (response.data.user)
      //if user is correct, we redirect the user to
      navigate('/home')
    } catch (error) {
      navigate('/')
    }
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
  };


  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

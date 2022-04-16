import { createContext, useState } from "react";
import { client } from "../client";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  //saving the token
  const saveToken = (token) => {
    localStorage.setItem("token", `Bearer ${token}`);
  };

  //signup function 
  const signup = async (firstName, lastName, email, username, password) => {
    // console.log(firstName, lastName, email, username, password);
    const response = await client.post("/auth/signup", {
      firstName,
      lastName,
      email,
      username,
      password,
    });
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
    } catch (error) {
      console.log(error);
    }
  };

  //values accessible everywhere in the app
  const value = {
    user,
    signup,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

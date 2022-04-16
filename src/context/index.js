import { createContext } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const signup = (firstName, lastName, email, username, password) => {
       // console(firstName, lastName, email, username, password);
    }
    const value = {
        user: {
            email: "abc@test.com",
        },
        signup,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



import { createContext } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const value = {
        user: {
            email: "abc@test.com",
        },
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}



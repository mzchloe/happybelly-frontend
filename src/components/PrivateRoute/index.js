import { AuthContext } from "../../context";
import { useContext } from "react";
import { Navigate } from "react-router-dom";


export function PrivateRoute({children}) {
    const { user } = useContext(AuthContext)

    if (user){
        return children;
    } else {
        return <Navigate to="/Landing" />;
    }    
}
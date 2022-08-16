import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";



/// create Authenticate
const AuthRedirectUser = ({ children }) => {

    const { isUserloggedIn } = useContext(AuthContext)


    return isUserloggedIn ? <Navigate to="/" /> : children ; 

}


/// export middleware
export default AuthRedirectUser;
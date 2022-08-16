import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";



/// create Authenticate
const AuthenticateUser = ({ children }) => {

    const { isUserloggedIn } = useContext(AuthContext)


    return isUserloggedIn ? children : <Navigate to="login" />

}


/// export middleware
export default AuthenticateUser;
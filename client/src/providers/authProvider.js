import AuthContext from "../context/authContext";
import Cookie from "js-cookie";
import { useReducer } from "react";
import AuthReducer from "../reducers/AuthReducer";

// initial state
export const INITIAL_STATE = {
   isUserloggedIn : false,
   user : { }
}

//create Provider
const AuthContextProvider = ({ children }) => {
 

    const [ state, dispatch ] = useReducer( AuthReducer, INITIAL_STATE)


    return(
        <AuthContext.Provider
        value = {{
            isUserloggedIn : state.isUserloggedIn,
            user : state.user,
            dispatch 
        }}
        >
            { children }
        </AuthContext.Provider>
    )

}


// export Default
export default AuthContextProvider;
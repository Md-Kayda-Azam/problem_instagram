import { useReducer } from "react";
import LoaderContext from "../context/LoaderContext";
import LoaderReducer from "../reducers/LoaderReducer";

// initial state
export const INITIAL_STATE = 0;

//create Provider
const LoaderContextProvider = ({ children }) => {
 

    const [ LoaderState, LoaderDispatch ] = useReducer( LoaderReducer, INITIAL_STATE)


    return(
        <LoaderContext.Provider
        value = {{
            LoaderState,
            LoaderDispatch 
        }}
        >
            { children }
        </LoaderContext.Provider>
    )

}


// export Default
export default LoaderContextProvider;
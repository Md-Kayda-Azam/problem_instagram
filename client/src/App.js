import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from './pages/Login/Login';
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import AuthenticateUser from "./middleware/AuthenticateUser";
import AuthRedirectUser from "./middleware/AuthRedirectUser";
import cookies from 'js-cookie';
import { useContext, useEffect } from "react";
import axios from "axios";
import { BsEraser } from "react-icons/bs";
import AuthContext from "./context/authContext";
import LoadingBar from 'react-top-loading-bar';
import './App.scss';
import LoaderContext from "./context/LoaderContext";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createToast } from "./utility/toast";
import Verify from "./components/Verify/Verify";




const App = () => {

  // get auth context
  const { dispatch } = useContext(AuthContext);


  // get loader context
  const {LoaderState, LoaderDispatch} = useContext(LoaderContext);
  // get token
  const token = cookies.get('token');

  // check login user
  useEffect(() => {

    try {
      axios.get('http://localhost:5050/api/user/me', {
        headers : {
          "Authorization" : `Bearer ${ token}` 
        }
      })
      .then(res => {
         
        if( res.data.isVerified && token ){
          dispatch({ type : 'LOGIN_USER_success', payload : res.data})
        }else{
          createToast('please verify your account');
          cookies.remove('token')
        }
       
      })
      .catch(error => {

        dispatch({ type : 'USER_LOGOUT'})
      })
    } catch (error) {
      
    }

  }, [token])






  return (

    <>
   <LoadingBar
        color='#f11946'
        progress={LoaderState}
        onLoaderFinished={() => LoaderDispatch({ type : "LOADER_END"})}
    />

    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />

{/* Same as */}
<ToastContainer />
      <Routes>
          <Route path="/login" element={<AuthRedirectUser><Login/></AuthRedirectUser>}/>
          <Route path="/register" element={ <AuthRedirectUser><Register/></AuthRedirectUser> }/>
          <Route path="/:id" element={ <AuthenticateUser><Profile/></AuthenticateUser> }/>
          <Route path="/" element={ <AuthenticateUser><Home/></AuthenticateUser>}/>
          <Route path="/user/:id/verify/:token" element={ <Verify/>}/>
      </Routes>
    </>
  )
}

export default App;
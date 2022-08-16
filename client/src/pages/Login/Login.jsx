import React from 'react';
import { useState } from 'react';
import { GrFacebook } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import axios from 'axios';
import swal from 'sweetalert';
import cookie from 'js-cookie';
import { useContext } from 'react';
import AuthContext from '../../context/authContext'
import LoaderContext from "../../context/LoaderContext";
import './Login.scss'
import { createToast } from '../../utility/toast';





const Login = () => {

  // use auth context
  const { dispatch } = useContext(AuthContext)

   // get loader context
   const { LoaderDispatch } = useContext(LoaderContext);

  // use navigate
  const navigate = useNavigate()


    
  // from field request
  const [ input, setInput] = useState({
    auth : '',
    password : ''
  })


/// handle input
const handleInput = (e) => {
  
  setInput((prev) => ({...prev, [e.target.name] : e.target.value}))

}

// handle user login
const handleUserLogin = async (e) => {
  e.preventDefault();

  try {
    if(!input.auth || !input.password){
      createToast('All fields are required');
    }else{

      axios.post('http://localhost:5050/api/user/login', { email :  input.auth, password : input.password}).then(
        res => {
          
          if( res.data.user.isVerified){

            cookie.set('token', res.data.token);
            dispatch({ type : 'LOGIN_USER_success', payload : res.data.user})
            navigate('/');
            LoaderDispatch({ type : "LOADER_START"})

          }else{

           createToast('Verify your account')

          }
        }
      )
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <div className="login-container">
      
      <div className="login-wraper">
        <a href="#" className="login-logo-link"> <img 
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
        alt="" className="login-logo" /></a>

        <form onSubmit={ handleUserLogin } className="login-form">
          <input name='auth' type="text" value={ input.auth} className="login-input" onChange={ handleInput} placeholder='phone number, username or email'/>
          <input name='password' type="text" value={ input.password} className="login-input" onChange={ handleInput} placeholder='password'/>
          <button className='login-submit'>Log IN</button>
        </form>

       <div className="divider">
        OR
       </div>

      <a className='login-with-fb' href="#"> <GrFacebook /> Login with Facebook</a>
      <a className='forgot-password' href="#">Forgot Password?</a>


      </div>
      <div className="singup-wraper">
        <span className="singup-text">Don't have an account?<Link to="/register" className="singup-link"> Sign up</Link>
        </span>
      </div>
      <div className="get-app">
        <span className="app-text">Get the app.
           <div className="app-logo">
           <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="" />
           <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="" />
           </div>
        </span>
      </div>
     <AuthFooter/>
    </div>
  )
}

export default Login;
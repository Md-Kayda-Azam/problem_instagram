import React from 'react'
import { useState } from 'react';
import { GrFacebook } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import AuthFooter from '../../components/AuthFooter/AuthFooter';
import  axios from 'axios'
import '../Login/Login.scss';
import './Register.scss';
import swal from 'sweetalert';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {


  // state for from valid
  const [input, setInput ] = useState({
    name : '',
    email : '',
    username : '',
    password : '',
  })
// create a toast 
const createToast = (msg) => {
 return toast( (msg), {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

  // handle input
 const handleInput = (e) => {

 setInput((prev) => ({ ...prev, [e.target.name] : e.target.value }))

 }

 // handle user registration
 const handleUserSubmit = async (e) => {
  e.preventDefault();

  try {
    if(!input.name || !input.email || !input.username || !input.password){
      swal("Danger", "All fields are required!", "error");
      // createToast('All fields are required');
    }else{
      await axios.post('http://localhost:5050/api/user/register', input).then(res => {
        
      setInput((prev) => ({
        name : '',
        email : '',
        username : '',
        password : '',
      }));

      swal("success", "Your account created successfully!", "success");

      })
    }
  } catch (error) {
    console.log(error);
  }



 }
  return (
    <div className="login-container">
      <ToastContainer/>
    <div className="login-wraper">
      <a href="#" className="login-logo-link"> <img 
      src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
      alt="" className="login-logo" /></a>
      <span className="res-text">Sing up to see photos and video from your friends.</span>
      <a className='login-with-fb-register' href="#"> <GrFacebook /> Login with Facebook</a>

      <div className="divider">
      OR
     </div>

      <form onSubmit={ handleUserSubmit } className="login-form">
        <input name='email' type="text" onChange={ handleInput} className="login-input" value={ input.email} placeholder='Mobile number or email'/>
        <input name='name' type="text" onChange={ handleInput} className="login-input" value={ input.name} placeholder='Full Name'/>
        <input name='username' type="text" onChange={ handleInput} className="login-input" value={ input.username} placeholder='User Name'/>
        <input name='password' type="password" onChange={ handleInput} className="login-input" value={ input.password} placeholder='password'/>

      
       <div className="res-info">
        <div className="res-from-text">
            People who use our service may have upload your contact information to Instagram.
            <a href="#">Lear More</a>
          </div>
          <div className="res-from-text">
            By singing up, you agree to our <a href="#">Terms</a>, <a href="#">Privacy Policy</a> and
            <a href="#"> Cookies Policy</a>
            <a href="#"> Lear More</a>
          </div>
       </div>

        <button type='submit' className='login-submit'>Log IN</button>
      </form>

    </div>
    <div className="singup-wraper">
      <span className="singup-text">Have an account?<Link to="/login" className="singup-link"> Login In</Link>
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

export default Register
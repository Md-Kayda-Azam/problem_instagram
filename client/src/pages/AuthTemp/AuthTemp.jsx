import React from 'react'
import { GrFacebook } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import mobile from './mobile.png';
import './AuthTemp.scss'
import AuthFooter from '../../components/AuthFooter/AuthFooter';

const AuthTemp = () => {
  return (
    <div className="login-container">
         <div className="auth-container">
            <div className="auth-left">
            <img src={ mobile } alt="" />
            </div>
            <div className="auth-right">
            <div className="login-wraper">
        <a href="#" className="login-logo-link"> <img 
        src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" 
        alt="" className="login-logo" /></a>

        <form action="" className="login-form">
            <input type="text" className="login-input" placeholder='phone number, username or email'/>
            <input type="text" className="login-input" placeholder='password'/>
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
            </div>
         </div>
      <AuthFooter/>
  </div>
  )
}

export default AuthTemp
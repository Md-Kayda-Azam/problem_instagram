import React, { useContext } from 'react';
import { FiSearch }   from "react-icons/fi";
import { FiCompass }   from "react-icons/fi";
import { FiPlusSquare }   from "react-icons/fi";
import { HiHome } from "react-icons/hi";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import './TopBer.scss'

import './TopBer.scss'
import AuthContext from '../../context/authContext';

const TopBer = () => {


  // get auth context
  const { user } = useContext(AuthContext);

  return (
    <div className="top-bar-container">
      <div className="top-bar-wraper">
        <div className="logo">
          <img src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png" alt="" />
        </div>
        <div className="search-box">
               <button> < FiSearch /> </button>
               <input type="text" placeholder='Search' />
        </div>
        <div className="top-bar-menu">
          <ul>
            <li><a href="#"><HiHome /></a></li>
            <li><a href="#">< RiMessengerLine /></a></li>
            <li><a href="#">< FiPlusSquare /></a></li>
            <li><a href="#">< FiCompass /></a></li>
            <li><a href="#">< FiHeart /></a></li>
            <li><a href="#">  <img src={`${ user.photo ? user.photo : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}`} alt="" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TopBer;
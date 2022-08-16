import React, { useContext } from 'react';
import TopBer from '../../components/TopBar/TopBer';
import { BsHeart } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsEmojiNeutral } from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import AuthContext from '../../context/authContext';
import cookie from 'js-cookie';
import { useNavigate} from 'react-router-dom';
import './Home.scss';
import LoaderContext from '../../context/LoaderContext';



const Home = () => {

  //use Context
  const { user, dispatch  } = useContext(AuthContext);
  const { LoaderDispatch } = useContext(LoaderContext);
  console.log(user);
  
  // user navigate
  const navigate = useNavigate();

  // handle user log out
  const handleUserLOgout = (e) => {
    e.preventDefault();

    cookie.remove('token')
    cookie.remove('user')
    dispatch({ type : 'USER_LOGOUT'})
    navigate('/login')
    LoaderDispatch({ type : "LOADER_START"})

  }


  return (
    <>
    <TopBer/>
    <div className="home-container">
     <div className="home-wraper">
     <div className="time-line">
        <div className="post-card">
          <div className="post-card-header">
            <div className="post-user-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSyvMJyTqRAUd-SkntIJnezdFeoIceDqIDEA&usqp=CAU" alt="" />
              <div className="user-details">
                <a className="user-name" href='#'>Md Kayda Azam</a>
                <span className="location">Dhaka</span>
              </div>
            </div>
            <div className="post-opt-btn">
              <button><svg fill="currentColor" viewBox="0 0 20 20" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg></button>
            </div>
          </div>
          <div className="post-img">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&w=1000&q=80" alt="" />
          </div>
          <div className="timeline-icons">
              <div className="icons-left">
             <a href="#"> <BsHeart/></a>
             <a href="#"> <FaRegComment/></a>
             <a href="#"> <FiSend/></a>
              </div>
              <div className="icon-right">
                <a href="#"><BsBookmark/></a>
              </div>
          </div>
          <div className="post-details">
             <div className="likes">
             <span>102 likes</span>
             </div>
            <div className="post-content">
             <a href="#">Md Kayda Azam</a> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus provident nisi eum ipsum fuga, iste laboriosam distinctio sed unde voluptas!
            </div>
            <div className="post-comment">
              <span>view all 23 comment</span>
            </div>
            <div className="post-time">
              <span>1 day ago</span>
            </div>
          </div>
          <div className="post-comments-area">
            <a href="#">
              <BsEmojiNeutral/>
            </a>
            <input type="text" placeholder='Add a comment...'/>
            <button>post</button>
          </div>
        </div>
      </div>
      <div className="user-info">
         
          <div className="user-details">
            <img src={`${ user.photo ? user.photo : 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'}`} alt="" />
            <div className="user-name">
              <span className='username'>{ user.username  }</span>
              <span className='name'>{ user.name }</span>
              <a href="#" onClick={ handleUserLOgout }>Logout</a>
            </div>
          </div>

      </div>
     </div>
    </div>
    </>
 
  )
}

export default Home;
import React, { useState } from "react";
import "./Header.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // const setShowmodal=()=>{
  //   setModalShow(true)
  // }
  const navigate=useNavigate()
const signOutMethod=()=>{
  window.location.reload();
}


  return (
    <>
      <div className="site-header">
        <div className="site-identity">
          <h1 className="nav">GovExamQuiz</h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav ">
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
            {
props.isLogin?<li onClick={signOutMethod}>Sign out</li>:<li onClick={() => setModalShow(true)}>Sign in</li>
            }
            
          </ul>
        </nav>

        <Login showHideLandingpage={props.setLogedin} modalShow={modalShow} setModalShow={setModalShow}  />
      </div>
    </>
  );
};
export default Header;

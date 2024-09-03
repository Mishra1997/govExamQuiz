import React, { useState } from "react";
import "./Header.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { BiBookOpen } from "react-icons/bi";
import Contact from './Contact'
const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // const setShowmodal=()=>{
  //   setModalShow(true)
  // }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const signOutMethod = () => {
    navigate("/");
    sessionStorage.setItem("isLogin", false);
    // window.location.reload();

    sessionStorage.clear("useName");
  };

  const gotoLoginPage = () => {
    navigate("/login");
  };

  const GohomePage = () => {
    navigate("/");
    sessionStorage.setItem("isLogin", false);
    sessionStorage.clear("useName");
  };

const gotocontactPage =()=>{
  navigate("/contact")
}
const gotoaboutPage =()=>{
  navigate("/about")
}

const GoToHireMePage =()=>{
  navigate("/hireme")
}
  return (
  
    <>
      <div className="site-header">
        <div className="site-identity">
          <h1 className="nav" onClick={GohomePage}>
            <BiBookOpen style={{ marginLeft: "5px", marginRight: "5px" }} />
            GovExamQuiz
          </h1>
        </div>
        <div className="hamburger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>&#9776;</div>
        <nav className= {`site-navigation ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav ">
          <li onClick={ GoToHireMePage}>Hire Me</li>
            <li onClick={ gotoaboutPage} >About</li>
           
            <li onClick={ gotocontactPage}>Contact</li>
            {/* <li onClick={gotoLoginPage}>Sign in</li>  */}
            {sessionStorage.getItem("isLogin") === "true" ? (
              <li onClick={signOutMethod}>Sign Out</li>
            ) : (
              <li onClick={gotoLoginPage}>Sign In</li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;

import React, { useState } from "react";
import "./Header.css";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import { BiBookOpen } from "react-icons/bi";
const Header = (props) => {
  const [modalShow, setModalShow] = useState(false);
  // const setShowmodal=()=>{
  //   setModalShow(true)
  // }
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

  return (
    <>
      <div className="site-header">
        <div className="site-identity">
          <h1 className="nav" onClick={GohomePage}>
            <BiBookOpen style={{ marginLeft: "5px", marginRight: "5px" }} />
            GovExamQuiz
          </h1>
        </div>
        <nav className="site-navigation">
          <ul className="nav ">
            <li>About</li>
            <li>News</li>
            <li>Contact</li>
            {/* <li onClick={gotoLoginPage}>Sign in</li>  */}
            {sessionStorage.getItem("isLogin") === "true" ? (
              <li onClick={signOutMethod}>Sign out</li>
            ) : (
              <li onClick={gotoLoginPage}>Sign in</li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default Header;

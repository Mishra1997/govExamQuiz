import React, { useState } from "react";
import "./Header.css";
import Login from "./Login";
const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  // const setShowmodal=()=>{
  //   setModalShow(true)
  // }

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
            <li onClick={() => setModalShow(true)}>Login</li>
          </ul>
        </nav>
        <Login modalShow={modalShow} setModalShow={setModalShow} />
      </div>
    </>
  );
};
export default Header;

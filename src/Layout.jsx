import "./App.css";
import React, { useState } from "react";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import "./Layout.css";
import { Card, Button } from "react-bootstrap";
import { useNavigate, Outlet } from "react-router-dom";
import Man_working from "./utility/Loginpage/Man_working.mp4";
import woman_working from "./utility/Loginpage/woman_working.mp4";
import Woman_Working_at from "./utility/Loginpage/Woman_Working_at.mp4";
import Deadline from "./utility/Loginpage/Deadline.mp4";
import Deadline_2 from "./utility/Loginpage/Deadline_2.mp4";
import Business_success from "./utility/Loginpage/Business_success.mp4";
// import Login from './Login'

function Layout() {
  const [isLogin, setLogedin] = useState(false);

  const navigate = useNavigate();

  const signot = () => {
    setLogedin(false);
  };

  const gotoLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="mainBox">
      <div className="item_box">
        {/* <Card> */}
          <Header />
        {/* </Card> */}

        <div className="homepage_content">
          <Card className="homepage_content_left">
            <Card className="video_section">
              <video muted autoPlay loop playsInline>
                <source src={woman_working} type="video/mp4" />
              </video>
            </Card>
            <Card className="video_section">
              <video muted autoPlay loop playsInline>
                <source src={Woman_Working_at} type="video/mp4" />
              </video>
            </Card>
          </Card>
          <div className="homepage_content_center">
            {" "}
            <div>
              <div>
                <h1 style={{ fontWeight: "bolder" }}>Welcome to GovExamQuiz</h1>
                <p>
                  Your ultimate destination for mastering government exams.
                  Start your journey towards success with our comprehensive
                  quizzes and study resources tailored for aspiring candidates.
                </p>

                <button id="start_button" onClick={gotoLoginPage}>
                  Sign In to join the quiz fun!
                </button>
              </div>
            </div>{" "}
          </div>
          {/* <div className="homepage_content_right"> */}
            <Card className="homepage_content_right">
              <Card className="video_section2">
                <video muted autoPlay loop playsInline>
                  <source src={Deadline_2} type="video/mp4" />
                </video>
              </Card>
              <Card className="video_section2">
                <video muted autoPlay loop playsInline>
                  <source src={Deadline} type="video/mp4" />
                </video>
              </Card>
              <Card className="video_section2">
                <video muted autoPlay loop playsInline>
                  <source src={Business_success} type="video/mp4" />
                </video>
              </Card>
            </Card>{" "}
          {/* </div> */}
        </div>

        {/* <Card>
  <Card.Title>
hi
  </Card.Title>
</Card> */}
      </div>
    </div>
  );
}

export default Layout;

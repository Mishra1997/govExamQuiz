import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Man_working from "./utility/Loginpage/Man_working.mp4";
import woman_working from "./utility/Loginpage/woman_working.mp4";
import Woman_Working_at from "./utility/Loginpage/Woman_Working_at.mp4";
import Deadline from "./utility/Loginpage/Deadline.mp4";
import Deadline_2 from "./utility/Loginpage/Deadline_2.mp4";
import Business_success from "./utility/Loginpage/Business_success.mp4";
function Login(props) {
  const [useName, setUserName] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLogin", true);
    sessionStorage.setItem("useName", useName);
    navigate("/home");
  };

  return (
    <>
      <div className="mainContainer">
        <div className="item_box">
          {" "}
          <Header />
          <div className="homepage_content">
            <Card className="homepage_content_left" >
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
            <div className="homepage_content_center_login">
              <Card className="loginCard">
                <Card.Title>
                  <h2 style={{marginBottom:"4%",color:"white"}} >
                  Sign In
                  </h2>
                 
                </Card.Title>
                <Form onSubmit={(e) => submit(e)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"white"}}>User Name</Form.Label>
                    <Form.Control
                      onChange={(e) => setUserName(e.target.value)}
                      required={true}
                      type="text"
                      placeholder="Enter User Name"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{color:"white"}}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{color:"white"}}>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Button style={{color:"white"}}
                    variant="primary"
                    type="submit"
                    className="submitbutton"
                  >
                    Submit
                  </Button>
                </Form>
                <marquee id="textmove" scrollamount="2" direction="right" behavior="alternate" 
        >
          Simply type your name and press the submit button.
    </marquee>
              
              </Card>
             
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
          {/* <div className="leftBox">
  <Card>

  </Card>
  </div>  
  <div className="centerBoxLogin">

 
  </div> 
  <div className="leftBox">
  <Card>
    
    </Card>
  </div>  */}
        </div>
      </div>
    </>
  );
}

export default Login;

import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import LandingPage from "./LandingPage";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import { RiH3 } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import launchss  from "./utility/Loginpage/launchss.png"
import glob  from "./utility/Loginpage/glob.png"
import knowledge  from "./utility/Loginpage/knowledge.png"
import content  from "./utility/Loginpage/content.png"
import politics  from "./utility/Loginpage/politics.png"
import history  from "./utility/Loginpage/history.png"
import model  from "./utility/Loginpage/model.png"
const Home = () => {
  return (
    <>
      <Header />
      <div className="mainSec">
        <div className="leftSec">
          {/*   
  <Card.Body>
        <Card.Title>WelCome</Card.Title>
        <Card.Text>
         
        </Card.Text>
  manish
      </Card.Body> */}

          <Card className="leftCardsec">
            <Card.Title>Welcome!</Card.Title>
            <Card.Body style={{ color: "#ffbf00" }}>
            <img src={model} />     <br />
              <h3>{sessionStorage.getItem("useName").toUpperCase()}</h3>
         
              
            </Card.Body>
          </Card>
          <Card className="leftCardsec">
            <Card.Title>Coming soon..</Card.Title>
          </Card>
        </div>
        <div className="centerSec">
          <h4 id="cattitle" >Choose Categories</h4>

{/* <div className="choosecategories "> */}

{/* </div> */}
<Container className="choosecategories ">
      <Row>
        <Col><Card className="smallCard">
            <Card.Title>Science & Nature</Card.Title>
            <Card.Body >
           <img src={launchss} />
            </Card.Body>
          </Card></Col>
        <Col><Card className="smallCard">
            <Card.Title>General Knowledge</Card.Title>
            <Card.Body>
            <img src={knowledge} />
            </Card.Body>
          </Card></Col>
        <Col>
       
        <Card className="smallCard">
            <Card.Title>Entertainment</Card.Title>
            <Card.Body>
            <img src={content} />
            </Card.Body>
          </Card>
          </Col>
      </Row>
      <Row>
      <Col><Card className="smallCard">
            <Card.Title>History</Card.Title>
            <Card.Body>
            <img src={history} />
            </Card.Body>
          </Card></Col>
        <Col>
       
           <Card className="smallCard">
            <Card.Title>Geography</Card.Title>
            <Card.Body>
            <img src={glob} />
            </Card.Body>
          </Card>
          </Col>
      
        <Col><Card className="smallCard">
            <Card.Title>Politics</Card.Title>
            <Card.Body>
            <img src={politics} />
            </Card.Body>
          </Card></Col>
      </Row>
    </Container>
          
        </div>
        <div className="leftSec">
          <Card className="rCardsec"></Card>
          <Card className="rCardsec"></Card>
        </div>
      </div>
    </>
  );
};
export default Home;

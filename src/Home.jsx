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
import RingLoader from "react-spinners/RingLoader";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';
import { RiH3 } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import launchss  from "./utility/Loginpage/launchss.png"
import glob  from "./utility/Loginpage/glob.png"
import knowledge  from "./utility/Loginpage/knowledge.png"
import content  from "./utility/Loginpage/content.png"
import politics  from "./utility/Loginpage/politics.png"
import history  from "./utility/Loginpage/history.png"
import model  from "./utility/Loginpage/model.png"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
const Home = () => {

const [res,setResp]=useState([])
const [isModalOpen,setIsModalOpen]=useState(false)
const [isLoading,setisLoading]=useState(false)

const startQz=async(endpoint)=>{
  setisLoading(true)
let url="https://opentdb.com/api.php?amount=10&category="+endpoint
let val= (await fetch(url)).json();
let data=await val

setResp(data?.results)
console.log(data?.results)
setisLoading(false)
setIsModalOpen(true)


}


const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


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

     

 <Modal show={isLoading} centered style={{width:"10%",marginLeft:"45%" }}>
      
        <Modal.Body>
        <RingLoader    color="blue"
        loading={isLoading}
        cssOverride={override}
        
        aria-label="Loading Spinner"
        data-testid="loader"/>

        </Modal.Body>
       
      </Modal> 



<Container className="choosecategories ">
  
      <Row>
        <Col><Card className="smallCard" onClick={()=>startQz(17)}>
            <Card.Title>Science & Nature</Card.Title>
            <Card.Body >
           <img src={launchss} />
            </Card.Body>
          </Card></Col>
        <Col><Card className="smallCard" onClick={()=>startQz(9)}>
            <Card.Title>General Knowledge</Card.Title>
            <Card.Body>
            <img src={knowledge} />
            </Card.Body>
          </Card></Col>
        <Col>
       
        <Card className="smallCard" onClick={()=>startQz(13)}>
            <Card.Title>Entertainment</Card.Title>
            <Card.Body>
            <img src={content} />
            </Card.Body>
          </Card>
          </Col>
      </Row>
      <Row>
      <Col><Card className="smallCard" onClick={()=>startQz(23)}>
            <Card.Title>History</Card.Title>
            <Card.Body>
            <img src={history} />
            </Card.Body>
          </Card></Col>
        <Col>
       
           <Card className="smallCard" onClick={()=>startQz(22)}>
            <Card.Title>Geography</Card.Title>
            <Card.Body>
            <img src={glob} />
            </Card.Body>
          </Card>
          </Col>
      
        <Col><Card className="smallCard" onClick={()=>startQz(24)}>
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
    
      <Modal
     show={isModalOpen}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
        Science & Nature
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
      <Form>
    
      <Form.Check type="radio" name="m" label={`m`}/>
      <Form.Check type="radio" name="m" label={`m1`}/>
      <Form.Check type="radio"  name="m" label={`m2`}/>
      <Form.Check type="radio" name="m" label={`m3`}/>
      {/* {.map((type) => (
        <div key={`default-${type}`} className="mb-3">
        

          <Form.Check
            
            type={type}
            label={`disabled ${type}`}
            id={`default-${type}`}
          />
        </div>
      ))} */}
    </Form>
      
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>setIsModalOpen(false)}>Close</Button>
      </Modal.Footer>
    </Modal>


    </>
  );
};
export default Home;

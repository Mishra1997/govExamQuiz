import React,{useState} from "react";
import Header from './Header'
import Footer from './Footer'
import Login from "./Login";
import LandingPage from "./LandingPage";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"
const Home =()=>{
  

  return( <>

<div className="mainSec">
<div className="leftSec"> <Card.Body>
        <Card.Title>WelCome</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
         
        </Card.Text>
  manish
      </Card.Body></div>
<div className="centerSec"> <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.

        </Card.Text>
  
      </Card.Body> </div>
<div className="leftSec"> <Card.Body>
        <Card.Title>Graphical representation  Comming Soon..</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
      
        </Card.Text>
  
      </Card.Body></div>
</div>

    </>
  )

}
export default Home
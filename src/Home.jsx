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
import { RiH3 } from "react-icons/ri";
const Home =()=>{
  

  return( <>
<Header/>
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
 <Card.Title>
  Welcome   
 </Card.Title>
 <Card.Body style={{color:"#ffc107"}}>
      <h3>
      {sessionStorage.getItem("useName").toUpperCase()}
      </h3>
 
 </Card.Body>
</Card>
<Card className="leftCardsec">
<Card.Title>
      Coming soon..
</Card.Title>
</Card>

      </div>
<div className="centerSec">
   {/* <Card.Body> */}
        {/* <Card.Title>Choose Categories </Card.Title> */}
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}



  
      {/* </Card.Body>  */}
      </div>
<div className="leftSec"> 
<Card className="rCardsec">
</Card>
<Card className="rCardsec">
</Card>
      </div>
</div>

    </>
  )

}
export default Home
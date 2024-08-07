import React,{useState} from "react";
import Header from './Header'
import Footer from './Footer'
import Login from "./Login";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const LandingPage =()=>{


  return( <>

<Container>
      <Row>
        <Col xs lg="3"> <Card >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
  
      </Card.Body>
    </Card></Col>
        <Col xs lg="6"><Card >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card></Col>
        <Col xs lg="3"><Card >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>

      </Card.Body>
    </Card></Col>
      </Row>
    </Container>


    </>
  )

}
export default LandingPage
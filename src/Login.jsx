import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const [useName, setUserName] = useState("");
 const navigate=useNavigate()

  const submit = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLogin",true)
    navigate('/home')
  };

  return (
    <>
    <Header/>
      {/* <Modal
        show={props.modalShow}
        size="s"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body> */}
<div className="mainContainer">    
<div className="leftBox">
  <Card>

  </Card>
  </div>  
  <div className="centerBoxLogin">

  <Card className="loginCard">
        <Form onSubmit={(e) => submit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                onChange={(e) => setUserName(e.target.value)}
                required={true}
                type="text"
                placeholder="Enter User Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="submitbutton">
              Submit
            </Button>
          </Form>
        </Card>
  </div> 
  <div className="leftBox">
  <Card>
    
    </Card>
  </div> 
   


        </div>

        {/* </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Login;

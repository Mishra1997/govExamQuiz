import React, { useState } from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function Login(props) {
  const [useName, setUserName] = useState("");
  const [isLogin, setLogedin] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    props.setModalShow(false);
    setLogedin(true);
  };

  return (
    <>
      <Modal
        show={props.modalShow}
        size="s"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Login;

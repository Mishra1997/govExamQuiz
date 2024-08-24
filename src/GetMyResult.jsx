import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Accordion } from "react-bootstrap";
function GetMyResult(props) {
  return (
    <Modal
      show={props?.showTotalResult}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
          {props?.res[0]?.category}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ height: "65vh", overflowY: "scroll" }}>
     
{
  props?.res?.map((data,index)=> <Accordion
  alwaysOpen
  defaultActiveKey={[
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ]}
>
<Accordion.Item eventKey={index.toString()}>
<Accordion.Header>
{ data?.question}
</Accordion.Header>
<Accordion.Body>
Answer: 
<p style={{color:"green"}}>
{data?.correct_answer}
</p>

</Accordion.Body>
</Accordion.Item>





</Accordion>)
}
   


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.setShowTotalResult}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default GetMyResult;

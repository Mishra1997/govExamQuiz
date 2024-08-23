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
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { RiH3 } from "react-icons/ri";
import { MdOutlineScience } from "react-icons/md";
import launchss from "./utility/Loginpage/launchss.png";
import glob from "./utility/Loginpage/glob.png";
import knowledge from "./utility/Loginpage/knowledge.png";
import content from "./utility/Loginpage/content.png";
import politics from "./utility/Loginpage/politics.png";
import history from "./utility/Loginpage/history.png";
import model from "./utility/Loginpage/model.png";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { useForm, SubmitHandler } from "react-hook-form"

const Home = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const [res, setResp] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const startQz = async (endpoint) => {
    setisLoading(true);
    let url = "https://opentdb.com/api.php?amount=10&category=" + endpoint;
    let val = (await fetch(url)).json();
    let data = await val;

    setResp(data?.results);
    console.log(data?.results);
    setisLoading(false);
    setIsModalOpen(true);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };


const onSubmit=(data)=>{
console.log(data)
}


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
              <img src={model} /> <br />
              <h3>{sessionStorage.getItem("useName").toUpperCase()}</h3>
            </Card.Body>
          </Card>
          <Card className="leftCardsec">
            <Card.Title>Coming soon..</Card.Title>
          </Card>
        </div>
        <div className="centerSec">
          <h4 id="cattitle">Choose Categories</h4>

          {/* <div className="choosecategories "> */}

          {/* </div> */}

          <Modal
            show={isLoading}
            centered
            style={{ width: "10%", marginLeft: "45%" }}
          >
            <Modal.Body>
              <RingLoader
                color="blue"
                loading={isLoading}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Modal.Body>
          </Modal>

          <Container className="choosecategories ">
            <Row>
              <Col>
                <Card className="smallCard" onClick={() => startQz(17)}>
                  <Card.Title>Science & Nature</Card.Title>
                  <Card.Body>
                    <img src={launchss} />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="smallCard" onClick={() => startQz(9)}>
                  <Card.Title>General Knowledge</Card.Title>
                  <Card.Body>
                    <img src={knowledge} />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="smallCard" onClick={() => startQz(13)}>
                  <Card.Title>Entertainment</Card.Title>
                  <Card.Body>
                    <img src={content} />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="smallCard" onClick={() => startQz(23)}>
                  <Card.Title>History</Card.Title>
                  <Card.Body>
                    <img src={history} />
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="smallCard" onClick={() => startQz(22)}>
                  <Card.Title>Geography</Card.Title>
                  <Card.Body>
                    <img src={glob} />
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card className="smallCard" onClick={() => startQz(24)}>
                  <Card.Title>Politics</Card.Title>
                  <Card.Body>
                    <img src={politics} />
                  </Card.Body>
                </Card>
              </Col>
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
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{height:"80vh"}}
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Science & Nature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "65vh", overflowY: "scroll" }}>
          <Form onSubmit={handleSubmit(onSubmit)} >
            <Accordion alwaysOpen defaultActiveKey={["0","1","2","3","4","5","6","7","8","9"]} >
              {res.map((result, index) => (
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{result?.question}</Accordion.Header>

                  <Accordion.Body>
                    <Form.Check
                      type="checkbox"
                      // name={index}
                     
                      {...register("correctAns")}
                      label={`${result?.correct_answer}`}
                    />
                    {result?.incorrect_answers?.map((incorrectAns, index) => (
                      <Form.Check
                        type="checkbox"
                        name={index}
                        {...register("wrongAns")}
                        label={`${incorrectAns}`}
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            <input type="submit" value="Click"/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Home;

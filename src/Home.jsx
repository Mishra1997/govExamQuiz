import React, { useState } from "react";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import RingLoader from "react-spinners/RingLoader";
import Button from "react-bootstrap/Button";
import launchss from "./utility/Loginpage/launchss.png";
import glob from "./utility/Loginpage/glob.png";
import knowledge from "./utility/Loginpage/knowledge.png";
import content from "./utility/Loginpage/content.png";
import politics from "./utility/Loginpage/politics.png";
import history from "./utility/Loginpage/history.png";
import evaluation from "./utility/Loginpage/evaluation.png";
import iconvideo from "./utility/Loginpage/iconvideo.mp4";
import model from "./utility/Loginpage/model.png";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { useForm } from "react-hook-form";
import { Chart } from "react-google-charts";
const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const [res, setResp] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [getResult, saveResult] = useState('');

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

  const datam = [
    ["Task", "Hours per Day"],
    
    ["Correct", 90],
    ["Incorrect", 10],
  ];
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
   const options = {
 
    is3D: true,
    colors: ["#38812F","#C9190B"]
  };
  const onSubmit = () => {
    
    // saveResult(getValues())
   
    
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
              <img src={model} /> <br />
              <h3>{sessionStorage.getItem("useName").toUpperCase()}</h3>
            </Card.Body>
          </Card>
          <Card className="leftCardsec">
            {/* <Card.Title></Card.Title> */}
            <Card.Body style={{padding:"10%"}}>
{/* <Card className="check-result">
Check Result
</Card> */}

<Card className="check-full-result">
Get Full Result
</Card>

            </Card.Body>
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
          <Card className="rCardsec" >
           
          
        

{
  isResult?<>  <h4 style={{textAlign:"center",marginTop:"1%"}}>
  Result
  </h4>
  <Chart
  chartType="PieChart"
  data={datam}
  options={options}
  width={"110%"}
  height={"100%"}
 />
 </>
: <img src={evaluation} />
}

           
           {/* </div> */}
       
            {/* <Card.Title className="muted-text" style={{padding:"5%"}}>
             Result :
            </Card.Title> */}
            {/* <br/> */}
            {/* </br> */}
          {/* <Button> */}
                
              {/* </Button> */}

              {/* <Card.Body>
                Pass  */}
                {/* <Pass></Pass> */}
              {/* </Card.Body> */}
          
              {/* <Button variant="outlined">Outlined</Button> */}
              {/* <Card.Body> */}
                    {/* <img src={evaluation} /> */}
                  {/* </Card.Body> */}

          </Card>
          <Card className="rCardsec">
          {/* <img src={evaluation} /> */}
          <video  autoPlay 
      muted 
      loop 
      playsInline>
  <source src={iconvideo} type="video/mp4" />
 
</video>

          </Card>
        </div>
      </div>
     
      <Modal
        show={isModalOpen}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        // style={{height:"80vh"}}
      >
         <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Science & Nature
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "65vh", overflowY: "scroll" }}>
          {/* <Form > */}
            <Accordion
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
              {res.map((result, index) => (
                <Accordion.Item eventKey={index.toString()}>
                  <Accordion.Header>{result?.question}</Accordion.Header>

                  <Accordion.Body>
                    <Form.Check
                      type="checkbox"
                      // name={index}
                      value={result?.correct_answer}
                      {...register("correctAns")}
                      label={`${result?.correct_answer}`}
                    />
                    {result?.incorrect_answers?.map((incorrectAns, index) => (
                      <Form.Check
                        type="checkbox"
                        name={index}
                        value={incorrectAns}
                        {...register("wrongAns")}
                        label={`${incorrectAns}`}
                      />
                    ))}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
            
          {/* </Form> */}
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" value={"ssssd"}> SUBMIT</Button>
        <Button onClick={() => setIsModalOpen(false)}>CLOSE</Button>
       
          
        </Modal.Footer>
        </Form>
      </Modal>
    
      
    </>
  );
};
export default Home;

import logo from './logo.svg';
import './App.css';
import { Button, Stack, Nav, Image, Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';


import heroImage from './assets/heroImage.jpg'; 

const Hero = {

backgroundImage: `url(${heroImage})`,
width: '100vw',
height: '50vh',
};

const Section2Image = {
  backgroundColor:'red',
  height:'20vw',
};


function App() {
  return (
    <div className="App">

    <Nav className="navBar"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item >
        <Nav.Link className="navItem" href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className="navItem" eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className="navItem" eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link className="navItem" eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>

<div  style={Hero}>
</div>

<div className="cardSection">
  <Row>
    <Col className="cardBox">
      <Card style={{ width: '18rem' }}>

        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
    <Col className="cardBox">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col className="cardBox">
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  </Row>
</div>

<div>
<Row className="Section2Body">
        <Col className="section2">
          <h2>This is a great Section here!</h2>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>
        <Col className="section2 section2Image">

        </Col>
      </Row>
</div>



    </div>
  );
}

export default App;

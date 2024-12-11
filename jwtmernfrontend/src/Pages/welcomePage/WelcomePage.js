import React from "react";
import NavigationBar from "../../components/NavigationBar"; // Adjust path if necessary
import { Container, Row, Col, Button } from "react-bootstrap";


const WelcomePage = () => {
  return (
    <div>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h1>Welcome to My App</h1>
            <p>Please login or sign up to continue</p>
            <br>
            </br>
            <Button variant="primary" size="lg" href="/signup">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WelcomePage;

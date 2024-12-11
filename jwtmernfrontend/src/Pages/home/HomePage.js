import React from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import "./HomePage.css";  // Custom CSS for the background image

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Content */}
      <div className="hero-section">
        <Container className="hero-content">
          <h1>Welcome to My Website</h1>
          <p>Your journey to awesomeness starts here</p>
          
        </Container>
      </div>
    </div>
  );
};

export default HomePage;

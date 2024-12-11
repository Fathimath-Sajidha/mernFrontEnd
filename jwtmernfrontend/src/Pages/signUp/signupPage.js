import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavigationBar from "../../components/NavigationBar";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({}); // State to store error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate Name
    if (!signupData.name) {
      formErrors.name = "Name is required";
    }

    // Validate Email
    if (!signupData.email) {
      formErrors.email = "Email is required";
    } else if (!emailPattern.test(signupData.email)) {
      formErrors.email = "Invalid email format";
    }

    // Validate Password
    if (!signupData.password) {
      formErrors.password = "Password is required";
    } else if (signupData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters long";
    }

    return formErrors;
  };



const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validateForm();
  setErrors(formErrors); // Set errors if validation fails

  if (Object.keys(formErrors).length === 0) {
    try {
      // Use axios.post to send the signup data
      const response = await axios.post("http://localhost:5000/user/signup", signupData);
      
      console.log("Server Response:", response.data);
      
      // Clear the form after a successful signup
      setSignupData({
        name: "",
        email: "",
        password: "",
      });

      // Navigate to the login page
      navigate("/login");
    } catch (error) {
      console.error("Signup Error:", error.response?.data?.message || error.message);
    }
  }
};


  return (
    <div>
        <NavigationBar /> {/* Render the NavigationBar */}
    
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="text-center">Sign Up</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={signupData.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
              {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={signupData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={signupData.password}
                onChange={handleChange}
                placeholder="Password"
              />
              {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>

  );
};

export default SignUpPage;

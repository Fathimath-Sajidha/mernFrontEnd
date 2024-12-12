import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({}); // State to store error messages
  const navigate = useNavigate(); // React Router's useNavigate hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!loginData.email) {
      formErrors.email = 'Email is required';
    } else if (!emailPattern.test(loginData.email)) {
      formErrors.email = 'Invalid email format';
    }

    if (!loginData.password) {
      formErrors.password = 'Password is required';
    }

    return formErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
        const response = await axios.post("http://localhost:5000/user/login", loginData);
        localStorage.setItem("token", response.data.token);
        console.log("Login successful:", response.data);
        navigate("/home");
      } catch (error) {
        console.error("Login Error:", error.response?.data?.message || error.message);
        alert(error.response?.data?.message || "An error occurred");
      }
      
  };
  

  const navigateToSignUp = () => {
    navigate('/signup'); 
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
              {errors.email && <Form.Text className="text-danger">{errors.email}</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              {errors.password && <Form.Text className="text-danger">{errors.password}</Form.Text>}
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Login
            </Button>
          </Form>

          <div className="mt-3 text-center">
            Don't have an account?
            <br />
            <Button variant="primary" onClick={navigateToSignUp} block>
              Sign Up
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LoginPage;

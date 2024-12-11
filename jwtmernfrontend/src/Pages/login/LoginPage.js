import React, { useState } from 'react';
import { Button, Form, Container, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors); // Set errors if validation fails

    // If there are no validation errors, proceed with form submission
    if (Object.keys(formErrors).length === 0) {
      // Assuming successful login
      console.log('Login successful', loginData);
      navigate('/home');
    }
  };

  const navigateToSignUp = () => {
    navigate('/signup'); // Navigate to the signup page
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          <Form onSubmit={handleSubmit}>
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

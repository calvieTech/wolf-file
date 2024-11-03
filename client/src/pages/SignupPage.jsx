import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useNavigate } from 'react-router-dom';
import './signuppage.css';

function SignupPage() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    const target = event.target;

    event.preventDefault();

    // Reset error message
    setErrorMessage('');

    if (target.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    } else {
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.');
        return; // Stop form submission
      }

      try {
        const newUserObject = {
          email: email,
          password: password,
        };

        const newUserResponse = await fetch(
          'http://localhost:3001/user/signup',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserObject),
          }
        );

        if (newUserResponse.ok) {
          setValidated(true);
          navigate('/');
        } else {
          const errorData = await newUserResponse.json();
          setErrorMessage(errorData.message || 'Signup failed');

          console.error('Signup failed!');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <Container className="signup__container">
      <Row>
        <Col className="" data-bs-theme="light">
          <Form
            className="signup__form"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Label className="signup__title">
              Register
            </Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                required
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              // controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              // controlId="formBasicPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                value={confirmPassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember password" />
            </Form.Group>

            {/* Display error message if passwords do not match */}
            {errorMessage && (
              <p style={{ color: 'red' }}>{errorMessage}</p>
            )}

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignupPage;

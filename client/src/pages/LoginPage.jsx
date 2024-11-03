import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './loginpage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    let target = event.target;

    console.log(event.target);

    // Reset error message
    setErrorMessage('');

    if (target.checkValidity() === false) {
      setValidated(false);
      event.preventDefault();
      event.stopPropagation();
      return;
    } else {
      setValidated(false);

      try {
        const loginUserObject = {
          email: email,
          password: password,
        };

        const loginUserResponse = await fetch(
          'http://localhost:3001/user/login',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginUserObject),
          }
        );

        if (loginUserResponse.ok) {
          navigate('/');
        } else {
          const responseText = await loginUserResponse.text();
          setErrorMessage(
            responseText ||
              'Login failed. Please check your credentials.'
          );
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    }
  };

  return (
    <Container className="login__container">
      <Row>
        <Col className="" data-bs-theme="light">
          <Form className="login__form" onSubmit={handleLogin}>
            <Form.Label className="login__title">Login</Form.Label>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Remember password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginPage;

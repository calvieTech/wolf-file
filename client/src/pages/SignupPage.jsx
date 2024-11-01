import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './signuppage.css';

function SignupPage() {
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    const target = event.target;

    event.preventDefault();
    // console.log(`event: `, event);

    if (target.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    console.log(`email: `, email);
    console.log(`password: `, password);

    setValidated(true);
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
                value={email}
                required
                placeholder="Enter email"
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
                value={password}
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
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

export default SignupPage;

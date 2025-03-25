import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <Container className="notfound-container text-center">
      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="notfound-title">404 - Page Not Found</h1>
          <p className="notfound-text">
            Oops! Looks like you've taken a wrong turn.
          </p>
          <Image
            src="https://via.placeholder.com/400"
            alt="Not Found"
            fluid
            className="notfound-image"
          />
          <NavLink to="/">
            <Button className="notfound-btn" variant="danger">
              Go Back Home
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;

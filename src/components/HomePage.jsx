import React from "react";
import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import "../styles/HomePage.css";
import welcomeImage from "../assets/welcome-image.jpg";

const HomePage = () => {
  return (
    <Container className="homepage-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1 className="homepage-title">Welcome to Our Store</h1>
          <p className="homepage-text">
            Discover the best products at unbeatable prices!
          </p>
          <Image src={welcomeImage} fluid className="homepage-image" />
          <Button className="shop-now-btn" variant="primary">
            Shop Now
          </Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title>Quality Products</Card.Title>
              <Card.Text>We offer the best quality products in the market.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title>Great Prices</Card.Title>
              <Card.Text>Shop at the most competitive prices available.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="homepage-card">
            <Card.Body>
              <Card.Title>Fast Delivery</Card.Title>
              <Card.Text>Receive your orders quickly with our express shipping.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5 p-4">
      <Container>
        <Row>
          <Col md={4} className="text-center mb-3">
            <h5>About Us</h5>
            <p>
              We provide the latest information about movies and series, ensuring you stay updated with your favorite entertainment.
            </p>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Home</a></li>
              <li><a href="#" className="text-white">About</a></li>
              <li><a href="#" className="text-white">Contact</a></li>
              <li><a href="#" className="text-white">Privacy Policy</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@moviedb.com</p>
            <p>Phone: +123-456-7890</p>
            <p>Location: 123 Movie Street, Film City, USA</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} MovieDB. All Rights Reserved.</p>
            <p>&copy; {new Date().getFullYear()} SANDEEP KUMARC CHAURASIYA.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navbars = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className='p-3'>
      <Navbar.Brand href="/">MovieDB</Navbar.Brand> {/* Left-aligned brand */}
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto"> {/* Right-aligned navigation links */}
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#movies">Movies</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbars;

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Movie Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/comfort-movies">Comfort Movies</Nav.Link>
          <Nav.Link as={Link} to="/comfort-series">Comfort Series</Nav.Link>
          <Nav.Link as={Link} to="/binge">Binge Worthy</Nav.Link>
          <Nav.Link as={Link} to="/add-new">Add New</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;

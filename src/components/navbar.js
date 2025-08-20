import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // This effect will run once when the component mounts and whenever the categories change in localStorage.
    const updateCategories = () => {
      const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
      const uniqueCategories = [...new Set(storedMovies.map(movie => movie.category).filter(Boolean))];
      setCategories(uniqueCategories);
    };

    // Initial fetch of categories
    updateCategories();

    // Set up a listener for localStorage changes
    window.addEventListener('storage', updateCategories);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('storage', updateCategories);
    };
  }, []);

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Movie Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          {categories.map(category => (
            <Nav.Link key={category} as={Link} to={`/category/${encodeURIComponent(category)}`}>
              {category}
            </Nav.Link>
          ))}
          <Nav.Link as={Link} to="/add-new">Add New</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
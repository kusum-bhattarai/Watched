import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const CustomNavbar = () => {
  const [categories, setCategories] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const updateCategories = () => {
      const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
      const uniqueCategories = [...new Set(storedMovies.map(movie => movie.category).filter(Boolean))];
      setCategories(uniqueCategories);
    };

    updateCategories();
    window.addEventListener('storage', updateCategories);
    return () => {
      window.removeEventListener('storage', updateCategories);
    };
  }, []);

  const isActive = (path) => {
    if (path === '/') return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Navbar.Brand as={Link} to="/">Movie Library</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className={isActive('/') ? 'active-link' : ''}>Home</Nav.Link>
          {categories.map(category => (
            <Nav.Link 
              key={category} 
              as={Link} 
              to={`/category/${encodeURIComponent(category)}`}
              className={isActive(`/category/${encodeURIComponent(category)}`) ? 'active-link' : ''}
            >
              {category}
            </Nav.Link>
          ))}
          <Nav.Link as={Link} to="/add-new" className={isActive('/add-new') ? 'active-link' : ''}>Add New</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <Card bg="dark" text="white" className="h-100">
      <Card.Img variant="top" src={movie.poster} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Rating: {movie.rating}</Card.Text>
        <Button variant="primary" as={Link} to={`/details/${movie.id}`}>Details</Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

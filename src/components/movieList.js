import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './movieCard';

const MovieList = ({ category }) => {
  // Placeholder movies array. Replace this with your fetching logic.
  const movies = [
    { id: 1, title: 'Inception', rating: 9, poster: 'https://via.placeholder.com/150' },
    { id: 2, title: 'The Dark Knight', rating: 9, poster: 'https://via.placeholder.com/150' },
  ];

  return (
    <Row>
      {movies.map(movie => (
        <Col key={movie.id} xs={12} md={6} lg={4} className="mb-4">
          <MovieCard movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;

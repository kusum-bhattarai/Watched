import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './movieCard';

const MovieList = ({ movies }) => {
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

import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import MovieCard from './movieCard';
import { FaArrowRight } from 'react-icons/fa';

const MovieList = ({ movies, onRemove }) => {
  return (
    <div className="movie-list-container">
      <Row className="movie-list-row">
        {movies.map(movie => (
          <Col key={movie.id} xs={6} md={4} lg={2} className="mb-4">
            <MovieCard movie={movie} onRemove={onRemove} />
          </Col>
        ))}
      </Row>
      <Button variant="light" className="swipe-arrow">
        <FaArrowRight />
      </Button>
    </div>
  );
};

export default MovieList;

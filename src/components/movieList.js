import React from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './movieCard';

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
    </div>
  );
};

export default MovieList;
import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const ComfortSeries = () => {
  return (
    <Container className="mt-5">
      <h2>Comfort Series</h2>
      <MovieList category="comfort-series" />
    </Container>
  );
};

export default ComfortSeries;

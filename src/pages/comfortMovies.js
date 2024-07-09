import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const ComfortMovies = () => {
  return (
    <Container className="mt-5">
      <h2>Comfort Movies</h2>
      <MovieList category="comfort-movies" />
    </Container>
  );
};

export default ComfortMovies;

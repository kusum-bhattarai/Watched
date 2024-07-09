import React from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const Binge = () => {
  return (
    <Container className="mt-5">
      <h2>Binge Worthy</h2>
      <MovieList category="binge-worthy" />
    </Container>
  );
};

export default Binge;

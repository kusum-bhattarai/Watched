import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const ComfortSeries = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    setMovies(storedMovies);
  }, []);

  return (
    <Container className="mt-5">
      <h2>Comfort Series</h2>
      <MovieList movies={movies} />
    </Container>
  );
};

export default ComfortSeries;

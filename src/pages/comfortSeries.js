import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const ComfortSeries = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const filteredMovies = storedMovies.filter(movie => movie.category === 'comfort-series');
    setMovies(filteredMovies);
  }, []);

  const handleRemove = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id);
    setMovies(updatedMovies);
    const allMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const newAllMovies = allMovies.filter(movie => movie.id !== id);
    localStorage.setItem('movies', JSON.stringify(newAllMovies));
  };

  return (
    <Container className="mt-5">
      <h2>Comfort Series</h2>
      <MovieList movies={movies} onRemove={handleRemove} />
    </Container>
  );
};

export default ComfortSeries;

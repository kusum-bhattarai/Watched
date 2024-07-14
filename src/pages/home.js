import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const filteredMovies = storedMovies.filter(item => item.title);
    const filteredSeries = storedMovies.filter(item => item.name);
    setMovies(filteredMovies);
    setSeries(filteredSeries);
  }, []);

  const handleRemove = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id);
    const updatedSeries = series.filter(show => show.id !== id);
    setMovies(updatedMovies);
    setSeries(updatedSeries);
    const allItems = [...updatedMovies, ...updatedSeries];
    localStorage.setItem('movies', JSON.stringify(allItems));
  };

  return (
    <Container className="mt-5">
      <h2>Movies</h2>
      <MovieList movies={movies} onRemove={handleRemove} />
      <h2>Series</h2>
      <MovieList movies={series} onRemove={handleRemove} />
    </Container>
  );
};

export default Home;

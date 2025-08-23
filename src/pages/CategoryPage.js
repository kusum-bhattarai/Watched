import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import MovieList from '../components/movieList';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const filteredMovies = storedMovies.filter(movie => movie.category === categoryName);
    setMovies(filteredMovies);
  }, [categoryName]);

  const handleRemove = (id) => {
    const updatedMovies = movies.filter(movie => movie.id !== id);
    setMovies(updatedMovies);
    const allMovies = JSON.parse(localStorage.getItem('movies')) || [];
    const newAllMovies = allMovies.filter(movie => movie.id !== id);
    localStorage.setItem('movies', JSON.stringify(newAllMovies));
  };

  return (
    <Container fluid className="mt-5">
      <h2>{decodeURIComponent(categoryName)}</h2>
      <MovieList movies={movies} onRemove={handleRemove} />
    </Container>
  );
};

export default CategoryPage;
import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import MovieList from '../components/movieList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('movies')) || [];
    const filteredMovies = storedItems.filter(item => item.media_type === 'movie');
    const filteredSeries = storedItems.filter(item => item.media_type === 'tv');
    setMovies(filteredMovies);
    setSeries(filteredSeries);
  }, []);

  const handleRemove = (id) => {
    const allItems = JSON.parse(localStorage.getItem('movies')) || [];
    const newAllItems = allItems.filter(item => item.id !== id);
    localStorage.setItem('movies', JSON.stringify(newAllItems));

    // Update the state to reflect the change
    setMovies(newAllItems.filter(item => item.media_type === 'movie'));
    setSeries(newAllItems.filter(item => item.media_type === 'tv'));
  };

  const isLibraryEmpty = movies.length === 0 && series.length === 0;

  return (
    <Container fluid className="content-container">
      {isLibraryEmpty ? (
        <Alert variant="info" className="text-center">
          <h3>Your library is empty!</h3>
          <p>Add the movies and series you've watched using the "Add New" button in the navigation bar.</p>
        </Alert>
      ) : (
        <>
          <h2>Movies</h2>
          <MovieList movies={movies} onRemove={handleRemove} />
          <h2>Series</h2>
          <MovieList movies={series} onRemove={handleRemove} />
        </>
      )}
    </Container>
  );
};

export default Home;
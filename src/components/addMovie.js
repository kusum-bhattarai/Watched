import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');

  const handleAdd = async () => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    console.log('Using API Key:', apiKey); // Log the API key for debugging
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('API Response:', data); // Log the API response for debugging

      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        setMovie(movie);
        setError('');

        // Save to local storage
        const movies = JSON.parse(localStorage.getItem('movies')) || [];
        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));
      } else {
        setError('Movie not found');
        setMovie(null);
      }
    } catch (err) {
      setError('An error occurred while fetching the movie details');
      setMovie(null);
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formMovieTitle">
          <Form.Label>Movie/Series Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAdd} className="mt-3">
          Add
        </Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}

      {movie && (
        <div className="mt-3">
          <h3>{movie.title}</h3>
          <p>Rating: {movie.vote_average}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      )}
    </Container>
  );
};

export default AddMovie;

import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Alert, ListGroup, Image } from 'react-bootstrap';

const AddMovie = ({ onAddSuccess }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [customDetails, setCustomDetails] = useState({ rating: '', review: '' });
  const [error, setError] = useState('');
  const [existingCategories, setExistingCategories] = useState([]);

  useEffect(() => {
    const updateCategories = () => {
      const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];
      const categories = [...new Set(storedMovies.map(movie => movie.category).filter(Boolean))];
      setExistingCategories(categories);
    };

    updateCategories();
    window.addEventListener('storage', updateCategories);
    return () => {
      window.removeEventListener('storage', updateCategories);
    };
  }, []);

  const fetchSuggestions = async (query) => {
    const apiKey = process.env.REACT_APP_TMDB_API_KEY;
    if (!apiKey) {
      setError("API Key is missing!");
      return;
    }
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${query}`;

    try {
      const [movieResponse, tvResponse] = await Promise.all([fetch(movieUrl), fetch(tvUrl)]);
      if (!movieResponse.ok || !tvResponse.ok) {
        throw new Error(`HTTP error! status: ${movieResponse.status} ${tvResponse.status}`);
      }
      const movieData = await movieResponse.json();
      const tvData = await tvResponse.json();
      setSuggestions([...movieData.results.map(r => ({...r, media_type: 'movie'})), ...tvData.results.map(r => ({...r, media_type: 'tv'}))]);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('An error occurred while fetching suggestions');
    }
  };

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    if (newTitle) {
      fetchSuggestions(newTitle);
    } else {
      setSuggestions([]);
    }
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setSuggestions([]);
    setTitle(movie.title || movie.name);
  };

  const handleAdd = () => {
    if (!title || !selectedMovie) {
        setError('Please select a movie/series from the suggestions.');
        return;
    }

    const movie = { ...selectedMovie, ...customDetails };
    if (category && category.toLowerCase() !== 'none') {
        movie.category = category;
    }

    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    
    setTitle('');
    setCategory('');
    setSelectedMovie(null);
    setCustomDetails({ rating: '', review: '' });
    setError('');

    if (onAddSuccess) {
      onAddSuccess();
    }
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formMovieTitle">
          <Form.Label>Movie/Series Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search for a movie or series"
            value={title}
            onChange={handleTitleChange}
          />
          {suggestions.length > 0 && (
            <ListGroup>
              {suggestions.map((movie) => (
                <ListGroup.Item key={movie.id} onClick={() => handleSelectMovie(movie)} className="d-flex align-items-center">
                  <Image
                    src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                    alt={movie.title || movie.name}
                    thumbnail
                    className="movie-thumbnail"
                  />
                  <div className="ms-3">{movie.title || movie.name} ({movie.media_type === 'movie' ? 'Movie' : 'Series'})</div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Form.Group>
        <Form.Group controlId="formMovieCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter or select a category"
            list="category-options"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <datalist id="category-options">
            {existingCategories.map(cat => (
              <option key={cat} value={cat} />
            ))}
          </datalist>
        </Form.Group>
        <Form.Group controlId="formMovieRating">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your rating"
            value={customDetails.rating}
            onChange={(e) => setCustomDetails({ ...customDetails, rating: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="formMovieReview">
          <Form.Label>Review</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter your review"
            value={customDetails.review}
            onChange={(e) => setCustomDetails({ ...customDetails, review: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAdd} className="mt-3">
          Add
        </Button>
      </Form>

      {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
    </Container>
  );
};

export default AddMovie;
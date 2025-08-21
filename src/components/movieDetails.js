import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [providers, setProviders] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const providersUrl = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`;

      try {
        const [movieResponse, providersResponse] = await Promise.all([fetch(movieUrl), fetch(providersUrl)]);
        
        if (!movieResponse.ok || !providersResponse.ok) {
          throw new Error('Failed to fetch movie details. It might have been removed or an error occurred.');
        }

        const movieData = await movieResponse.json();
        const providersData = await providersResponse.json();
        setMovie(movieData);
        setProviders(providersData.results);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <Container className="mt-5 text-center"><h4 className="text-danger">{error}</h4></Container>;
  }

  if (!movie) {
    return <Container className="mt-5 text-center"><div>Loading...</div></Container>;
  }

  return (
    <Container className="mt-5">
      <Card bg="dark" text="white" className="h-100 p-4 movie-details-card">
        <Row>
          <Col md={4} className="d-flex justify-content-center align-items-center">
            {movie.poster_path && (
              <Card.Img
                variant="top"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
                className="movie-poster-large"
              />
            )}
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title className="details-title">{movie.title || movie.name}</Card.Title>
              {movie.tagline && <p className="text-muted">{movie.tagline}</p>}
              {movie.vote_average && <Card.Text>⭐ Rating: {movie.vote_average.toFixed(1)} / 10</Card.Text>}
              {movie.overview && <Card.Text>Description: {movie.overview}</Card.Text>}
              {movie.rating && <Card.Text>Your Rating: {movie.rating}</Card.Text>}
              {movie.review && <Card.Text>Your Review: {movie.review}</Card.Text>}
              {providers && providers.US && providers.US.flatrate && (
                 <div className="providers-container">
                   <h4>Available to Stream:</h4>
                   <div className="providers-list">
                     {providers.US.flatrate.map(provider => (
                       <a key={provider.provider_id} href={providers.US.link} target="_blank" rel="noopener noreferrer">
                         <img
                           src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                           alt={provider.provider_name}
                           className="provider-logo"
                         />
                       </a>
                     ))}
                   </div>
                 </div>
             )}
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default MovieDetails;
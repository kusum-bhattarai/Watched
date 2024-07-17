import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const apiKey = process.env.REACT_APP_TMDB_API_KEY;
      const movieUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const providersUrl = `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=${apiKey}`;

      try {
        const [movieResponse, providersResponse] = await Promise.all([fetch(movieUrl), fetch(providersUrl)]);
        if (!movieResponse.ok || !providersResponse.ok) {
          throw new Error(`HTTP error! status: ${movieResponse.status} ${providersResponse.status}`);
        }
        const movieData = await movieResponse.json();
        const providersData = await providersResponse.json();
        setMovie(movieData);
        setProviders(providersData.results);
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Card bg="dark" text="white" className="h-100">
        {movie.poster_path && (
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title || movie.name}
            className="movie-poster"
            style={{ height: '250px', width: '200px', objectFit: 'cover', margin: '0 auto' }} // Smaller poster size for details page
          />
        )}
        <Card.Body>
        <Card.Title>{movie.title || movie.name}</Card.Title>
          {movie.vote_average && <Card.Text>Rating: {movie.vote_average}</Card.Text>}
          {movie.overview && <Card.Text>Description: {movie.overview}</Card.Text>}
          {movie.rating && <Card.Text>Your Rating: {movie.rating}</Card.Text>}
          {movie.review && <Card.Text>Your Review: {movie.review}</Card.Text>}
          {providers && providers.US && providers.US.flatrate && (
             <Card.Text>
             Available on: {providers.US.flatrate.map(provider => provider.provider_name).join(', ')}
           </Card.Text>
         )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetails;

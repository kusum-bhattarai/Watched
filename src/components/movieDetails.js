import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    const foundMovie = movies.find(movie => movie.id === parseInt(id));
    setMovie(foundMovie);
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
          {movie.rating && <Card.Text>Your Rating: {movie.rating}</Card.Text>}
          {movie.review && <Card.Text>Your Review: {movie.review}</Card.Text>}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default MovieDetails;

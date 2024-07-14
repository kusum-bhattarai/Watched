import React from 'react';
import { Card, Tooltip, OverlayTrigger, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const MovieCard = ({ movie, onRemove }) => {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      <strong>{movie.title || movie.name}</strong><br/>
      {movie.vote_average && <div>Rating: {movie.vote_average}</div>}
      {movie.rating && <div>Your Rating: {movie.rating}</div>}
      {movie.review && <div>Your Review: {movie.review}</div>}
    </Tooltip>
  );

  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
      <Card bg="dark" text="white" className="h-100 movie-card">
        <Button
          variant="danger"
          size="sm"
          className="delete-btn"
          onClick={() => onRemove(movie.id)}
        >
          <FaTimes size={10} />
        </Button>
        {movie.poster_path && (
          <Link to={`/details/${movie.id}`}>
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="movie-poster"
            />
          </Link>
        )}
      </Card>
    </OverlayTrigger>
  );
};

export default MovieCard;

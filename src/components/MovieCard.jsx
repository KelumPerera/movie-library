
// Step 1
// Displays details of a single movie, including title, poster, and other relevant information.
// Takes a movie object as input.

import React from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../context/FavoritesContext';
import '../styles/MovieCard.css';

// Defines a functional component named MovieCard that takes a movie object as a prop
const MovieCard = ({ movie, isFavorite, addToFavorites, removeFromFavorites }) => {
  // Renders a single movie card with its title, poster, and overview
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={"https://image.tmdb.org/t/p/w185/"+movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
      </Link>
      <p>{movie.overview}</p>
      {isFavorite && (
        <button onClick={() => removeFromFavorites(movie.id)}>Remove from Favorites</button>
      )}
      {!isFavorite && (
        <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
      )}
    </div>
  );
};

// Component Memoization to prevent unnecessary re-renders
export default React.memo(MovieCard);

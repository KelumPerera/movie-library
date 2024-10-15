
// Displays a list of movies marked as favorites.
// Allows users to remove movies from the favorites list.

import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import MovieCard from './MovieCard';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h2>Favorites</h2>
      <div className="movie-cards">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;

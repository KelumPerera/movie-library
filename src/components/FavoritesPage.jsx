
// Displays a list of movies marked as favorites.
// Allows users to remove movies from the favorites list.

import React, { useContext } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { lazy, Suspense } from 'react';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites , removeFromFavorites } = useContext(FavoritesContext);
  const LazyMovieCard = React.lazy(() => import('./MovieCard'));
  return (
    <div className="favorites-page">
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Favorites</h2>
        <div className="movie-cards">
          {favorites.map((movie) => (
            
              <LazyMovieCard key={movie.id} movie={movie} isFavorite={true} removeFromFavorites={removeFromFavorites} />
            
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default FavoritesPage;

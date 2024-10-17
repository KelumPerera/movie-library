
// Displays a list of movies marked as favorites.
// Allows users to remove movies from the favorites list.

import React, { useContext, useState, useEffect } from 'react';
import { FavoritesContext } from '../context/FavoritesContext';
import { lazy, Suspense } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import '../styles/FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites , setFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const storedFavorites = searchParams.get('favorites');
    if (storedFavorites) {
      try {
        const parsedFavorites = JSON.parse(storedFavorites);
        setFavorites(parsedFavorites); // Update context with parsed favorites
      } catch (error) {
        console.error('Error parsing favorites from URL:', error);
        // Handle potential parsing errors (e.g., navigate to error page)
      }
    }
  }, [searchParams, setFavorites]);

  useEffect(() => {
    setSearchParams({ favorites: JSON.stringify(favorites) });
  }, [favorites, setSearchParams]);

  const LazyMovieCard = React.lazy(() => import('./MovieCard'));

  return (
    <div className="favorites-page">
      <Suspense fallback={<div>Loading...</div>}>
        <h2>Favorites</h2>
        <div className="movie-cards">
          {favorites.map((favoriteMovie) => (
            
              <LazyMovieCard key={favoriteMovie.id} movie={favoriteMovie} isFavorite={true} removeFromFavorites={removeFromFavorites} />
            
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default FavoritesPage;

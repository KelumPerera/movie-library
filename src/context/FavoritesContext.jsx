

// Manages the global state of favorite movies.
// Provides functions to add and remove movies from the favorites list.


import React, { createContext, useState } from 'react';

// Creates a React Context for managing favorite movies
const FavoritesContext = createContext();

const FavoritesProvider = ({ children }) => {
  // State variable to store the list of favorite movies
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    // Check if movie already exists in favorites before adding
    if (!favorites.some((favMovie) => favMovie.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (movieId) => {
    // Filter out the movie from favorites based on ID
    setFavorites(favorites.filter((movie) => movie.id !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesProvider };
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';   

import Navigation from './components/Navigation';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesPage from './components/FavoritesPage';

// Main application component
const App = () => {
  return (
    // Provides the FavoritesContext to child components
    <FavoritesProvider>
      <BrowserRouter>
        {/* Renders the navigation bar */}
        <Navigation />
        <Routes>
          {/* Defines routes for different pages */}
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
};

export default App;
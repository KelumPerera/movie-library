import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';   

import Navigation from './components/Navigation';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import FavoritesPage from './components/FavoritesPage';

// Main application component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate loading data (replace with your actual data fetching logic)
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust loading time as needed
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    // Provides the FavoritesContext to child components
    <FavoritesProvider>
      <BrowserRouter>
        {/* Renders the navigation bar */}
        <Navigation />
        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error">An error occured: {error.message}</div>
        ) : (
          <Routes>
            {/* Defines routes for different pages */}
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        )}
      </BrowserRouter>
    </FavoritesProvider>
  );
};

export default App;
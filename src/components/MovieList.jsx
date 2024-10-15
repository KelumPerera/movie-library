// Step 3
// Imports the MovieCard and SearchBar components.
// Maintains state for the list of movies, filtered movies, and search query.
// Fetches movie data from the MovieService.
// Implements filtering logic based on genre and search query.
// Renders the filtered list of movies using the MovieCard component.
// Renders the SearchBar component for user input.

import React, { useState, useEffect, useMemo, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';
import MovieService from '../services/MovieService';
import { FavoritesContext } from '../context/FavoritesContext';
import { Link } from 'react-router-dom';
import '../styles/MovieList.css';

const MovieList = () => {
  // State variables to store the list of movies, search query, and selected genre
  const [movies, setMovies] = useState([]); // This state variable stores an array of movie objects fetched from the API or loaded from local data.
  const [searchQuery, setSearchQuery] = useState(''); //  This state variable stores the current search query entered by the user.
  const [selectedGenre, setSelectedGenre] = useState('');    // This state variable stores the ID of the selected genre, or an empty string if no genre is selected.
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // Use `useSearchParams` hook to access and update URL parameters
  const [searchParams, setSearchParams] = useSearchParams();

  // Whenever the searchQuery or selectedGenre state variables change, the useEffect hook triggers a re-run of the fetchMovies function. 
  useEffect(() => {
    // useEffect hook is used to perform side effects within a functional component.It takes a function (the side effect) as its first argument and an optional dependency array as its second argument.
    //first argument is Calling getMovies from MovieService
    const fetchMovies = async () => {
      try {
        // Call the `getMovies` function from `MovieService`
        const response = await MovieService.getMovies(searchQuery, selectedGenre, currentPage);
        setMovies(prevMovies => [...prevMovies, ...response.data.results]);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, 
  [searchQuery, selectedGenre, currentPage]); //dependency array - side effect (fetchMovies function) re-run whenever either the searchQuery or selectedGenre state variables change

  // Use `useMemo` to optimize filtering logic
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      ((movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       (movie.overview.toLowerCase().includes(searchQuery.toLowerCase())))
        
      &&
      (!selectedGenre || movie.genre_ids.includes(parseInt(selectedGenre)))) // Ensures selectedGenre is converted to an integer before comparison
    );
  }, [movies, searchQuery, selectedGenre]);
  const isFavorite = (movie) => {
    return favorites.some((favMovie) => favMovie.id === movie.id);
  };

  return (
    <div className="movie-list">
      {/* Render the `SearchBar` component */}
      <SearchBar
        // left side "searchQuery" is theprop name that will be used within the SearchBar component to access the value of the searchQuery state variable
        // right side "searchQuery" is the value of the searchQuery state variable in the parent component. It represents the current search query entered by the user.
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <div className="movie-cards">
        {/* Render the filtered list of movies using `MovieCard` components. It displays a list of movie cards that dynamically reflects the search and filtering criteria applied by the user. */}
        {filteredMovies.map((movie) => (
          
          <MovieCard key={movie.id} movie={movie} isFavorite={isFavorite(movie)} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>
          
        ))}
      </div>
      {currentPage < totalPages && (
        <button onClick={() => setCurrentPage(currentPage + 1)}>Load More</button>
      )}
    </div>
  );
};

export default MovieList;
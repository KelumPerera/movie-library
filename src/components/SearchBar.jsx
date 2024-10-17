// Step 2
// Provides a search input field.
// Handles user input and updates the search query state in the MovieList component.

// setSearchQuery and setSelectedGenre are functions used to update the state of the searchQuery and selectedGenre variables within the MovieList component. These variables are used to control the filtering of movies based on the user's search input and selected genre.

import React from 'react';
import '../styles/SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery, selectedGenre, setSelectedGenre }) => {
  // Renders a search bar for movies with search input and genre selection
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}   

      />
      <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="12">Adventure</option>
        <option value="16">Animation</option>
        <option value="35">Comedy</option>
        <option value="80">Crime</option>
        <option value="18">Drama</option>
        <option value="14">Fantasy</option>
        <option value="37">Western</option>   
        <option value="99">Documentary</option>
        <option value="878">Science Fiction</option>
        <option value="10749">Romance</option>
        <option value="36">Thriller</option>
        <option value="10752">War</option>
        <option value="10402">Mystery</option>
        <option value="10751">Family</option>
        <option value="10770">TV Movie</option>
        {/* Add more genre options here */}
      </select>
    </div>
  );
};

export default SearchBar;
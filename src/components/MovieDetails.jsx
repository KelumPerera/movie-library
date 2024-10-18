

//Fetches details of a specific movie based on its ID.
//Displays the movie's title, poster, and overview.
//Provides a button to add or remove the movie from favorites.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';   

import '../styles/MovieDetails.css';

// Defines a functional component named MovieDetails
const MovieDetails = () => {
  const { id } = useParams(); // Extracts the movie ID from the URL parameters
  const [movie, setMovie] = useState(null); // State variable to store the fetched movie data

  // Fetches the movie details using the ID from URL parameters
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        // Fetches movie data from MovieService
        const response = await MovieService.getMovieById(id);
        // Updates state with the fetched movie data
        setMovie(response.data);
      } catch (error) {
        console.error(error); // Handle errors
      }
    };
    // Fetches movie data on component mount and whenever the ID changes
    fetchMovie();
  }, [id]);

  return (
    <div className="movie-details">
      {/* Conditionally render movie details if movie data is available */}
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <img src={"https://image.tmdb.org/t/p/w185/"+movie.poster_path} alt={movie.title} />
          <p>{movie.overview}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
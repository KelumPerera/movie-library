

//Fetches details of a specific movie based on its ID.
//Displays the movie's title, poster, and overview.
//Provides a button to add or remove the movie from favorites.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieService from '../services/MovieService';   

import '../styles/MovieDetails.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await
        MovieService.getMovieById(id);
        setMovie(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="movie-details">
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
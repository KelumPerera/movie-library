

// Handles communication with the movie API.
// Fetches movies based on search query and selected genre.
// Fetches details of a specific movie by ID.

import axios from 'axios';


const API_KEY = process.env.REACT_APP_API_KEY;

// Defines a service object for interacting with the TMDB movie API
const MovieService = {
  getMovies: async (searchQuery, selectedGenre) => {
    // Fetches a list of movies based on search query and genre
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`;
    const params = {
      query: searchQuery,
      with_genres: selectedGenre,
    };
    return axios.get(url, { params });
  },

  getMovieById: async (id) => {
    // Fetches details for a specific movie by ID
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    return axios.get(url);
  },
};

export default MovieService;
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ffddee44025dd24685ea61d637d56d24';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w342';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

const fetchTrends = async () => {
  const response = await axios.get('/trending/all/day');

  //   console.log(response.data.results);

  return response.data.results;
};

const fetchMoviesByKeyword = async query => {
  const response = await axios.get('/search/movie', {
    params: { query },
  });

  // console.log(response.data.results);

  return response.data.results;
};

const fetchMovieDetails = async movieId => {
  const response = await axios.get(`/movie/${movieId}`);

  // console.log(response.data);

  return response.data;
};

const fetchMovieCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);

  // console.log(response.data.cast);

  return response.data.cast;
};

const fetchMovieReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);

  // console.log(response.data.results);

  return response.data.results;
};

const moviesApi = {
  fetchTrends,
  fetchMoviesByKeyword,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
  imageBaseUrl: IMAGE_BASE_URL,
};

export default moviesApi;

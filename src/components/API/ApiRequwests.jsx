import axios from 'axios';

const myKey =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM5NjcyOTQ2ZTE2Y2Q2ZTExZGY4ZTZjMjA1MDcxNiIsIm5iZiI6MTcyOTI1NzE4MC44NDgzODksInN1YiI6IjY3MTEwOTlkMWI5MTJhZGQyZWRiZjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6prezH8d0GjRsIVbjE44OLhCVoMdbRbZPmMi5j4FG90';

const instanceMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    include_adult: false,
    language: 'en-US',
  },
  headers: {
    accept: 'application/json',
    Authorization: myKey,
  },
});

export const fetchMoviesTrend = async page => {
  const response = await instanceMovies.get(`/trending/movie/day?page=${page}`);
  const data = response.data;
  return data;
};

export const fetchMoviesId = async id => {
  const response = await instanceMovies.get(`/movie/${id}`);
  const data = response.data;
  return data;
};

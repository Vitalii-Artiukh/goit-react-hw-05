import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM5NjcyOTQ2ZTE2Y2Q2ZTExZGY4ZTZjMjA1MDcxNiIsIm5iZiI6MTcyOTI1NzE4MC44NDgzODksInN1YiI6IjY3MTEwOTlkMWI5MTJhZGQyZWRiZjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6prezH8d0GjRsIVbjE44OLhCVoMdbRbZPmMi5j4FG90',
//   },
// });

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const myKey =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM5NjcyOTQ2ZTE2Y2Q2ZTExZGY4ZTZjMjA1MDcxNiIsIm5iZiI6MTcyOTI1NzE4MC44NDgzODksInN1YiI6IjY3MTEwOTlkMWI5MTJhZGQyZWRiZjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6prezH8d0GjRsIVbjE44OLhCVoMdbRbZPmMi5j4FG90';

export const fetchMoviesTrend = async page => {
  const options = {
    headers: {
      accept: 'application/json',
      Authorization: myKey,
    },
  };
  const response = await axios.get(
    `/trending/movie/day?language=en-US&page=${page}`,
    options
  );
  return response.data;
};

import axios from 'axios';

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM5NjcyOTQ2ZTE2Y2Q2ZTExZGY4ZTZjMjA1MDcxNiIsIm5iZiI6MTcyOTI1NzE4MC44NDgzODksInN1YiI6IjY3MTEwOTlkMWI5MTJhZGQyZWRiZjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6prezH8d0GjRsIVbjE44OLhCVoMdbRbZPmMi5j4FG90',
//   },
// };

// fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

axios.defaults.baseURL =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const key =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzM5NjcyOTQ2ZTE2Y2Q2ZTExZGY4ZTZjMjA1MDcxNiIsIm5iZiI6MTcyOTI1NzE4MC44NDgzODksInN1YiI6IjY3MTEwOTlkMWI5MTJhZGQyZWRiZjBiNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6prezH8d0GjRsIVbjE44OLhCVoMdbRbZPmMi5j4FG90';
const language = 'en-US';

const fetchMoviesTrend = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: key,
    },
  };
  const response = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  )
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  console.log(response);
};

fetchMoviesTrend();

///////////////////////////

// axios.defaults.baseURL = 'https://api.unsplash.com';
// const clientId = 'L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ';

// //  client_id=L8gl-NSA6WgM_hr7Eskh6cG-VL4XlvL29DTZBgzk6gQ

// const fetchPhotos = async (searchRequest, page) => {
//   const axiosOptions = {
//     params: {
//       page: page,
//       per_page: 12,
//       query: searchRequest,
//       orientation: 'landscape',
//       client_id: clientId,
//     },
//   };

//   const response = await axios.get('/search/photos', axiosOptions);
//   return response.data;
// };

// export default fetchPhotos;

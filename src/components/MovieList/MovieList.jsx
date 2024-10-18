import React, { useEffect, useState } from 'react';
import { fetchMoviesTrend } from '../API/ApiRequwests';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const addTrendMovies = async () => {
      try {
        const data = await fetchMoviesTrend(page);
        const trend = data.results;
        setMovieList(prevMovies => [...prevMovies, ...trend]);
      } catch (error) {
        console.log(error);
      } finally {
        console.log('finally');
      }
    };
    addTrendMovies();
  }, []);
  return <div>MovieList</div>;
};
// fetchMoviesTrend(1);

export default MovieList;

import { React, useEffect } from 'react';
import SearchMovies from '../components/searchMovies/SearchMovies';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
  const { movieId } = useParams;

  useEffect(() => {
    if (!movieId) {
      return;
    }
    console.log(movieId);
  }, [movieId]);
  console.log(movieId);

  return (
    <div>
      <SearchMovies />
    </div>
  );
};

export default MoviesPage;

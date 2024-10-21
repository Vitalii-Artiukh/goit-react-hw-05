import { React, useEffect } from 'react';
import SearchMovies from '../components/searchMovies/SearchMovies';
import { useParams } from 'react-router-dom';

const MoviesPage = () => {
  const { movieId } = useParams;
  console.log(movieId);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    console.log(movieId);
  }, [movieId]);

  return (
    <div>
      <SearchMovies />
    </div>
  );
};

export default MoviesPage;

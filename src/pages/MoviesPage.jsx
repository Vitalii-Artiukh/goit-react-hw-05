import { React, useEffect, useState } from 'react';
import SearchMovies from '../components/searchMovies/SearchMovies';
import { useParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../components/API/ApiRequwests';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  console.log(searchQuery);

  useEffect(() => {
    const searchMovies = () => {
      if (!movieId) {
        return;
      }
    };
  }, [searchQuery]);

  return (
    <div>
      <SearchMovies setSearchQuery={setSearchQuery} />
    </div>
  );
};

export default MoviesPage;

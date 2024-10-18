import React from 'react';
import { fetchMoviesTrend } from '../components/API/ApiRequwests';
import MovieList from '../components/MovieList/MovieList';

const HomePage = () => {
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default HomePage;

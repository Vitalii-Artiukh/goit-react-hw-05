import React from 'react';
import { fetchMoviesTrend } from '../components/API/ApiRequwests';
import MovieList from '../components/MovieList/MovieList';
import { useParams } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default HomePage;

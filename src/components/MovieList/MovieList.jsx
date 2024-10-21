import { React, useEffect, useState } from 'react';
import { defaultImg, fetchMoviesTrend } from '../API/ApiRequwests';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  const location = useLocation();
  return (
    <div>
      <h1 className={css.h1Title}>Trending today</h1>
      <div className={css.list}>
        {movieList.map(mov => (
          <Link
            state={{ from: location }}
            key={mov.id}
            to={`/movies/${mov.id}`}
            className={css.items}
            style={{ width: 250 }}
          >
            <p className={css.movieTitle}>{mov.title}</p>
            <img
              src={
                mov.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500${mov.backdrop_path}`
                  : defaultImg
              }
              alt={mov.title}
              className={css.backdrop}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
// fetchMoviesTrend(1);

export default MovieList;

import { React, useEffect, useState } from 'react';
import clsx from 'clsx';
import css from './MovieDetails.module.css';
import { defaultImg } from '../API/ApiRequwests';

const MovieDetails = ({ movieData }) => {
  return (
    <div>
      {movieData && (
        <div className={clsx(css.wrapper)}>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
            style={{ width: 300 }}
          />
          <div className={clsx(css.infoWrapper)}>
            <h2 className={clsx(css.h2)}>{movieData.title}</h2>
            <p className={clsx(css.popularity)}>
              Popularity {movieData.popularity}
            </p>
            <h3 className={clsx(css.overviewTitle)}>Overview</h3>
            <p className={clsx(css.overviewText)}>{movieData.overview}</p>
            <h3 className={clsx(css.genresTitle)}>Genres</h3>
            <ul className={clsx(css.listGenres)}>
              {movieData.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;

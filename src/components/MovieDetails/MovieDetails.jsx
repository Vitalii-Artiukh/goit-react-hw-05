import { React, useEffect, useState } from 'react';
import clsx from 'clsx';
import css from './MovieDetails.module.css';
import { defaultImg } from '../API/ApiRequwests';

const MovieDetails = ({ movieData }) => {
  return (
    <div>
      {movieData && (
        <div>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}`
                : defaultImg
            }
            alt={movieData.title}
            style={{ width: 300 }}
          />
          <div>
            <h2>{movieData.title}</h2>
            <p>Popularity {movieData.popularity}</p>
            <h3>Overview</h3>
            <p>{movieData.overview}</p>
            <h3>Genres</h3>
            <ul>
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

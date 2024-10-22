import { React } from 'react';
import { defaultImg } from '../API/ApiRequwests';
import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movieList, title }) => {
  const location = useLocation();
  return (
    <div>
      {title !== '' && <h2 className={css.h1Title}>{title}</h2>}
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

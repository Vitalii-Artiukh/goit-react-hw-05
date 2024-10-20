import { React, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import { fetchMoviesId } from '../components/API/ApiRequwests';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const moviesActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);

  const id = movieId;
  console.log(id);

  useEffect(() => {
    const addDataMovie = async () => {
      try {
        setMovieData(null);
        setLoading(true);
        setError(false);
        const data = await fetchMoviesId(id);
        setGenres(data.genres);
        console.log(data);
        setMovieData(data);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    addDataMovie();
  }, [id]);

  return (
    <div>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        movieData && (
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
              alt={movieData.title}
            />
            <div>
              <h2>{movieData.title}</h2>
              <p>Popularity {movieData.popularity}</p>
              <h3>Overview</h3>
              <p>{movieData.overview}</p>
              <h3>Genres</h3>
              <ul>
                {genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </div>
        )
      )}
      {movieData && (
        <nav className={css.linksDetails}>
          <NavLink to="cast" className={moviesActive}>
            Cast
          </NavLink>
          <NavLink to="reviews" className={moviesActive}>
            Reviews
          </NavLink>
        </nav>
      )}

      {/* error ? (
      <ErrorMessage errorMessage={errorMessage} />) : (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
        />
        <div>
          <h2>{movieData.title}</h2>
          <p>Popularity {movieData.popularity}</p>
          <h3>Overview</h3>
          <p>{movieData.overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <nav className={css.linksDetails}>
        <NavLink to="cast" className={moviesActive}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={moviesActive}>
          Reviews
        </NavLink>
      </nav>
      ) */}
    </div>
  );
};

export default MovieDetailsPage;

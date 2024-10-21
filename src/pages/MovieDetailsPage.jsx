import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import { fetchMoviesId } from '../components/API/ApiRequwests';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import { MovieDetailsLinks } from '../components/Navigation/Navigation';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';

const moviesActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const addDataMovie = async () => {
      try {
        setMovieData(null);
        setLoading(true);
        setError(false);
        const data = await fetchMoviesId(movieId);
        setMovieData(data);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    addDataMovie();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <MovieDetails movieData={movieData} />
      )}

      {movieData && <MovieDetailsLinks />}
      <MovieCast id={movieId} />
      <MovieReviews id={movieId} />
    </div>
  );
};

export default MovieDetailsPage;

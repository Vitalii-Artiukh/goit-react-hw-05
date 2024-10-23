import { React, Suspense, useEffect, useState } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { LiaBackspaceSolid } from 'react-icons/lia';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import { fetchMoviesId } from '../components/API/ApiRequwests';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const moviesActive = ({ isActive }) => {
  return clsx(css.links, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const addDataMovie = async () => {
      try {
        setMovieData(null);
        // setLoading(true);
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

  const backUrl = location.state?.from || '/movies';

  const goBack = () => {
    navigate(backUrl);
  };

  return (
    <div className={clsx(css.wrapper)}>
      <div className={clsx(css.load)}>{loading && <Loader />}</div>

      <button onClick={goBack} className={css.btnBack}>
        <LiaBackspaceSolid className={clsx(css.btnIcon)} />
      </button>

      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <MovieDetails movieData={movieData} />
      )}

      {movieData && (
        <nav className={css.linksDetails}>
          <NavLink state={{ from: backUrl }} to="cast" className={moviesActive}>
            Cast
          </NavLink>
          <NavLink
            state={{ from: backUrl }}
            to="reviews"
            className={moviesActive}
          >
            Reviews
          </NavLink>
        </nav>
      )}

      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

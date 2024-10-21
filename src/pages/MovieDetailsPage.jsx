import { React, Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';
import { defaultImg, fetchMoviesId } from '../components/API/ApiRequwests';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieDetails from '../components/MovieDetails/MovieDetails';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieReviews/MovieReviews';

const moviesActive = ({ isActive }) => {
  return clsx(css.links, isActive && css.active);
};

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [error, setError] = useState(false);
  const [errorCast, setErrorCast] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location.state.from);

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

  const goBack = () => {
    navigate(location.state.from ?? '/movies');
  };

  return (
    <div>
      {loading && <Loader />}

      {/* <Link to={backTo.current}> */}
      <button onClick={goBack} className={css.btnBack}>
        Go Back
      </button>
      {/* </Link> */}

      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        <MovieDetails movieData={movieData} />
      )}

      {movieData && (
        <nav className={css.linksDetails}>
          <NavLink
            state={{ from: location.state.from, movieId }}
            to="cast"
            className={moviesActive}
          >
            Cast
          </NavLink>
          <NavLink
            state={{ from: location.state.from, movieId }}
            to="reviews"
            className={moviesActive}
          >
            Reviews
          </NavLink>
        </nav>
      )}

      <Suspense fallback={<div>Loading inner component</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;

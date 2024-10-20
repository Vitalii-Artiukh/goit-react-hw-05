import { React, useEffect, useState } from 'react';
import { fetchMoviesTrend } from '../API/ApiRequwests';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    const addTrendMovies = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesTrend(page);
        const trend = data.results;
        setMovieList([...trend]);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    addTrendMovies();
  }, []);
  console.log(movieList);

  return (
    <div>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        movieList.length > 0 && (
          <div>
            <h1 className={css.h1Title}>Trending today</h1>
            <div className={css.list}>
              {movieList.map(
                mov =>
                  mov.backdrop_path && (
                    <Link
                      key={mov.id}
                      to={`/movies/${mov.id}`}
                      className={css.items}
                      style={{ width: 250 }}
                    >
                      <p className={css.movieTitle}>{mov.title}</p>
                      <img
                        src={`https://image.tmdb.org/t/p/w500${mov.backdrop_path}`}
                        alt={mov.title}
                        className={css.backdrop}
                      />
                    </Link>
                  )
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};
// fetchMoviesTrend(1);

export default MovieList;

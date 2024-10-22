import React, { useEffect, useState } from 'react';
import { fetchMoviesTrend } from '../components/API/ApiRequwests';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(false);
  const title = 'Trending today';

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
  }, [page]);

  return (
    <div>
      {loading && <Loader />}
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        movieList.length > 0 && (
          <MovieList movieList={movieList} title={title} />
        )
      )}
    </div>
  );
};

export default HomePage;

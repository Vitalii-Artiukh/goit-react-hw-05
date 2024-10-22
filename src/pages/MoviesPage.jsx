import { React, useEffect, useState } from 'react';
import SearchMovies from '../components/searchMovies/SearchMovies';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesSearch } from '../components/API/ApiRequwests';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const onSearch = searchWord => {
    setSearchParams({ query: searchWord });
  };

  const searchQuery = searchParams.get('query');
  const title = `You were looking for a movie ${searchQuery}`;

  useEffect(() => {
    const searchMovies = async () => {
      try {
        if (searchQuery === null) {
          return;
        }
        setError(false);
        setLoading(true);
        const data = await fetchMoviesSearch(searchQuery, page);
        const trend = data.results;
        setMovieList([...trend]);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };
    searchMovies();
  }, [searchQuery]);

  return (
    <div>
      <SearchMovies onSearch={onSearch} />

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

export default MoviesPage;

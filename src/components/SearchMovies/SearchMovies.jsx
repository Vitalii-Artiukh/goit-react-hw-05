import clsx from 'clsx';
import React from 'react';
import css from './SearchMovies.module.css';

const SearchMovies = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const queryMovies = event.target.elements.search.value;
    onSearch(queryMovies);
  };

  return (
    <div>
      <form className={clsx(css.form)} onSubmit={handleSubmit}>
        <input
          className={clsx(css.input)}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={clsx(css.submit)} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;

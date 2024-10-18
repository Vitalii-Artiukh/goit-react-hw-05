import clsx from 'clsx';
import React from 'react';
import css from './SearchMovies.module.css';

const SearchMovies = () => {
const handleSubmit = value => {
  setSearchParams({ query: value });
};

  return (
    <div>
      {' '}
      <form className={clsx(css.form)} onSubmit={handleSubmit}>
        <input
          className={clsx(css.input)}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={clsx(css.submit)} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;

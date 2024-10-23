import clsx from 'clsx';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import css from './SearchMovies.module.css';

const SearchMovies = ({ onSearch }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const queryMovies = event.target.elements.search.value;
    onSearch(queryMovies);
  };

  return (
    <div className={clsx(css.formWrapper)}>
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
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;

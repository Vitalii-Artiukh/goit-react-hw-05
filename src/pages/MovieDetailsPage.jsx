import React from 'react';
import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import clsx from 'clsx';
import css from './MovieDetailsPage.module.css';

const moviesActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const MovieDetailsPage = () => {
  return (
    <div>
      <nav className={clsx(css.linksDetails)}>
        <NavLink to="cast" className={moviesActive}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={moviesActive}>
          Reviews
        </NavLink>
      </nav>
    </div>
  );
};

export default MovieDetailsPage;

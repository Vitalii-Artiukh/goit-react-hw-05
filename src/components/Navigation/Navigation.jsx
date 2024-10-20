import clsx from 'clsx';
import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const headerActive = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={clsx(css.header)}>
      <nav className={clsx(css.linksWrapper)}>
        <NavLink to="/" className={headerActive}>
          Home
        </NavLink>
        <NavLink to="/movies" className={headerActive}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;

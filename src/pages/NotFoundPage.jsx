import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={clsx(css.notWrapper)}>
      <h1 className={clsx(css.notTitle)}>Not Found Page</h1>
      <Link to={'/'}>
        <button type="button" className={clsx(css.homeBtn)}>
          Go to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

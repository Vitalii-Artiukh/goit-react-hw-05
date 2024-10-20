import React from 'react';
import css from './ErrorMessage.module.css';

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div>
      <p className={css.error}>{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;

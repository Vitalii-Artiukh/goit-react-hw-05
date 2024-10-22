import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not Found Page</h1>
      <Link to={'/'}>
        <button type="button">Go to home page.</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

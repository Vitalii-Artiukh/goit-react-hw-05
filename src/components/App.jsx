import { Suspense, lazy } from 'react';
import css from './App.module.css';
import './App.module.css';
import clsx from 'clsx';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Navigation/Navigation';
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const App = () => {
  return (
    <div className={clsx(css.wrapper)}>
      <Header />
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;

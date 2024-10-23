import { React, useEffect, useState } from 'react';
import { defaultImg, fetchMoviesReviews } from '../API/ApiRequwests';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link, useParams, useLocation } from 'react-router-dom';
import css from './MovieReviews.module.css';
import clsx from 'clsx';

const MovieReviews = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const addReviewsDetails = async () => {
      try {
        setError(false);
        const reviewsData = await fetchMoviesReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      } finally {
        setTimeout(() => {
          window.scrollBy({
            top: 525,
            behavior: 'smooth',
          });
        }, 250);
      }
    };
    addReviewsDetails();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map(i => (
            <li key={i.id} className={css.link}>
              <h4 className={clsx(css.author)}>{i.author}:</h4>
              <p>{i.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie.</h3>
      )}
    </div>
  );
};

export default MovieReviews;

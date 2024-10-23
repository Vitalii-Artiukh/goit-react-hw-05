import { React, useEffect, useState } from 'react';
import { defaultImg, fetchMoviesReviews } from '../API/ApiRequwests';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link, useParams, useLocation } from 'react-router-dom';
import css from './MovieReviews.module.css';

const MovieReviews = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [reviewsId, setReviewsId] = useState('');
  const [reviews, setReviews] = useState([]);
  const location = useLocation();
  const { movieId } = useParams();

  // const id = location.state?.movieId || '';

  useEffect(() => {
    const addReviewsDetails = async () => {
      try {
        setError(false);
        setReviewsId(location.state.movieId);
        const reviewsData = await fetchMoviesReviews(movieId);
        setReviews(reviewsData.results);

        window.scrollBy({
          top: 300,
          behavior: 'smooth',
        });
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    };
    addReviewsDetails();
  }, [reviewsId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : reviews.length > 0 ? (
        <ul>
          {reviews.map(i => (
            <li key={i.id} className={css.link}>
              <h4>{i.author}</h4>
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

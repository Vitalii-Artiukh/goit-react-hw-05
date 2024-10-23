import { React, useEffect, useState } from 'react';
import { defaultImg, fetchMoviesCredits } from '../API/ApiRequwests';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link, useParams, useLocation } from 'react-router-dom';
import css from './MovieCast.module.css';
import clsx from 'clsx';

const MovieCast = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const addCastDetails = async () => {
      try {
        setError(false);
        const castData = await fetchMoviesCredits(movieId);
        setCast(castData.cast);
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
    addCastDetails();
  }, [movieId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        cast.length > 0 && (
          <ul className={clsx(css.photoList)}>
            {cast.map(i => (
              <li key={i.id} className={clsx(css.link)}>
                <img
                  src={
                    i.profile_path
                      ? `https://image.tmdb.org/t/p/w500${i.profile_path}`
                      : defaultImg
                  }
                  alt={i.name}
                  style={{ width: 170 }}
                />
                <h4 className={clsx(css.name)}>{i.name}</h4>
                <p>{i.character}</p>
              </li>
            ))}
          </ul>
        )
      )}
    </div>
  );
};

export default MovieCast;

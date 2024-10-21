import { React, useEffect, useState } from 'react';
import { fetchMoviesCredits } from '../API/ApiRequwests';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link } from 'react-router-dom';
import css from './MovieCast.module.css';

const MovieCast = ({ id }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [castId, setCastId] = useState('');
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const addCastDetaile = async () => {
      try {
        setError(false);
        setCastId(id);
        const castData = await fetchMoviesCredits(castId);
        setCast(castData.cast);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    };
    addCastDetaile(id);
  }, [castId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        cast.length > 0 && (
          <div>
            {cast.map(i => (
              <Link
                key={i.id}
                to={`/movies/${castId}/cast`}
                className={css.link}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${i.profile_path}`}
                  alt={i.name}
                  style={{ width: 100 }}
                />
              </Link>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default MovieCast;

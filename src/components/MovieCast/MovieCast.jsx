import { React, useEffect, useState } from 'react';
import { defaultImg, fetchMoviesCredits } from '../API/ApiRequwests';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Link, useParams, useLocation } from 'react-router-dom';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [castId, setCastId] = useState('');
  const [cast, setCast] = useState([]);
  const location = useLocation();
  const { movieId } = useParams();

  // const id = location.state?.movieId;
  // console.log(movieId);

  useEffect(() => {
    const addCastDetails = async () => {
      try {
        setError(false);
        setCastId(location.state.movieId);
        const castData = await fetchMoviesCredits(movieId);
        setCast(castData.cast);

        window.scrollBy({
          top: 300,
          behavior: 'smooth',
        });
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
      }
    };
    addCastDetails();
  }, [castId]);

  return (
    <div>
      {error ? (
        <ErrorMessage errorMessage={errorMessage} />
      ) : (
        cast.length > 0 && (
          <ul>
            {cast.map(i => (
              <li key={i.id} className={css.link}>
                <img
                  src={
                    i.profile_path
                      ? `https://image.tmdb.org/t/p/w500${i.profile_path}`
                      : defaultImg
                  }
                  alt={i.name}
                  style={{ width: 130 }}
                />
                <h4>{i.name}</h4>
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

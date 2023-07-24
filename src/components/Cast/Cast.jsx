import { requestMovies } from 'components/services/appi';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CastStyled from './CastStyled';

const Cast = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [responcedCredits, setMovieCredits] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchCast() {
      try {
        setIsLoading(true);
        const endPointCast = `/movie/${movieId}/credits`;
        const responcedCredits = await requestMovies(endPointCast);
        setMovieCredits(responcedCredits);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <CastStyled>
      {isLoading && <Loader />}
      {error && <p>Ooops some error occured...Error:{error}</p>}
      {responcedCredits && (
        <ul>
          {responcedCredits.cast.map(credit => (
            <li key={credit.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${credit.profile_path}`}
                alt={credit.name}
              />
              <p>{credit.name}</p>
              <p>{credit.character}</p>
            </li>
          ))}
        </ul>
      )}
    </CastStyled>
  );
};

export default Cast;

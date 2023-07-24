import { requestMovies } from 'components/services/appi';
import Loader from 'components/Loader/Loader';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieResult, setMoviesResult] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const queryValue = searchParams.get('query');

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    async function fetchMovie() {
      try {
        setIsLoading(true);
        const endPointMovie = `/search/movie?query=${queryValue}/`;
        const responcedMovie = await requestMovies(endPointMovie);
        setMoviesResult(responcedMovie.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovie();
  }, [queryValue]);

  const formOnSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target.children.search.value;
    setSearchParams({
      query: searchValue,
    });
  };

  return (
    <>
      <form onSubmit={formOnSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search movies..."
          required
          autoComplete="on"
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <Loader />}
      {error && <p>Ooops some error occured...Error:{error}</p>}
      <ul>
        {movieResult &&
          movieResult.map(movie => (
            <li key={movie.id}>
              <Link state={{ from: location }} to={`${movie.id}`}></Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Movies;

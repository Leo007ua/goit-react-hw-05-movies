import { requestMovies } from 'components/services/appi';
import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import MovDetails from 'components/MovDetails/MovDetails';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    async function fetchMovieDetails() {
      try {
        setIsLoading(true);
        const endPointDetails = `/movie/${movieId}`;
        const response = await requestMovies(endPointDetails);
        setMovieDetails(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieDetails();
  }, [movieId]); // componentDidMount + componentDidUpdate;

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Ooops some error occured...Error:{error}</p>}
      <h1>Movie Details :</h1>
      {movieDetails && (
        <>
          <MovDetails movieDetails={movieDetails} />
        </>
      )}
      <ul>
        Additiomal information :
        <li>
          <Link to="cast" style={{ color: "white" }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" style={{ color: "white" }}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetails;

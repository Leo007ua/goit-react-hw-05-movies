import { requestMovies } from 'components/services/appi';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieTrends() {
      try {
        setIsLoading(true);
        const endPointTrends = '/trending/movie/day';
        const responseTrends = await requestMovies(endPointTrends);
        setTrendMovies(responseTrends.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieTrends();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error:{error}</p>}
      <ul>
        {trendMovies.map(trendMovies => (
          <li key={trendMovies.id}>
            <Link to={`movies/${trendMovies.id}`}>{trendMovies.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;

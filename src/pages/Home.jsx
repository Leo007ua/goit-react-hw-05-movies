
import { requestMovies } from 'services/appi';
import Loader from 'components/Loader/Loader';
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
        const responcedTrends = await requestMovies(endPointTrends);
        setTrendMovies(responcedTrends.results);
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
        <div style={{ color: "white" }}>
        <h2>Trending today :</h2>
      {isLoading && <Loader/>}
      {error && <p>Ooops some error occured...Error:{error}</p>}
      <ul>
        {trendMovies.map(trendMovies => (
          <li className="my-class" key={trendMovies.id} style={{ color: "white" }}>
            <Link to={`movies/${trendMovies.id}`}>{trendMovies.title}</Link>
          </li>
        ))}
      </ul>
        </div>
   
    </>
  );
};

export default Home;

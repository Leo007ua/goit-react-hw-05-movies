import { requestMovies } from 'components/services/appi';
import Loader from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewsStyled from './ReviewsStyled';

const Reviews = () => {
  const [responsedReviews, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchRevies() {
      try {
        setIsLoading(true);
        const endPoint = `/movie/${movieId}/reviews`;
        const responsedReviews = await requestMovies(endPoint);
        setResponse(responsedReviews);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRevies();
  }, [movieId]);

  return (
    <ReviewsStyled>
      {isLoading && <Loader />}
      {error && <p>Ooops some error occured...Error:{error}</p>}

      {responsedReviews && (
        <>
          <ul>
            {responsedReviews.results?.length <= 0 ? (
              <p>No reviews found</p>
            ) : (
                responsedReviews.results.map(review => (
                <li key={review.id}>
                  <p>Author : {review.author}</p>
                  <p>{review.content}</p>
                </li>
              ))
            )}
          </ul>
        </>
      )}
    </ReviewsStyled>
  );
};

export default Reviews;

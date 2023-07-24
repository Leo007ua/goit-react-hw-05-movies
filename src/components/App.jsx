import { Suspense, lazy } from 'react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route
            path="*"
            element={
              // <h2>
              //   Error 404 <Link to="/">Home</Link>
              // </h2>
              <Navigate to="/" replace />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

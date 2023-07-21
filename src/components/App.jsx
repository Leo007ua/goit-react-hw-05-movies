// import { lazy } from "react";
// import { Suspense } from "react";
import { Link, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      </header>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};



// // const MarkdownPreview = lazy(() => import('./MarkdownPreview.js'));
// {/* <Suspense fallback={<Loading />}> */}
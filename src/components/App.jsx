import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from './App.styled';

import { Layout } from './Layout/Layout';
import { Reviews } from './Reviews/Reviews'
import { Cast } from './Cast/Cast';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));




export const App = () => {

  return (
    <Box>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/movies/:movieId' element={<MovieDetails />} >
              <Route path='cast' element={<Cast />} />
              <Route path='Reviews' element={<Reviews />} />
            </Route>
            <Route path='*' element={<Navigate to='/' />} />
          </Route>
        </Routes>
      </Suspense>
    </Box>
  );
};

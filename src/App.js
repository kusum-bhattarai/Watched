import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/navbar';
import Home from './pages/home';
import ComfortMovies from './pages/comfortMovies';
import ComfortSeries from './pages/comfortSeries';
import Binge from './pages/binge';
import AddNew from './pages/addNew';
import MovieDetails from './components/movieDetails';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comfort-movies" element={<ComfortMovies />} />
        <Route path="/comfort-series" element={<ComfortSeries />} />
        <Route path="/binge" element={<Binge />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/details/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

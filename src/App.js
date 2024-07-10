import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/navbar'; // Adjusted to match the casing of the actual file
import Home from './pages/home'; // Adjusted to match the casing of the actual file
import ComfortMovies from './pages/comfortMovies'; // Adjusted to match the casing of the actual file
import ComfortSeries from './pages/comfortSeries'; // Adjusted to match the casing of the actual file
import Binge from './pages/binge'; // Adjusted to match the casing of the actual file
import AddNew from './pages/addNew'; // Adjusted to match the casing of the actual file

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
      </Routes>
    </Router>
  );
}

export default App;

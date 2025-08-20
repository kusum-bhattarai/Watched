import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/navbar';
import Home from './pages/home';
import AddNew from './pages/addNew';
import MovieDetails from './components/movieDetails';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new" element={<AddNew />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/Category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
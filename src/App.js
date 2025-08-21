import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomNavbar from './components/navbar';
import Home from './pages/home';
import AddNew from './pages/addNew';
import MovieDetails from './components/movieDetails';
import CategoryPage from './pages/CategoryPage';

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleAddSuccess = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <Router>
      <CustomNavbar key={refreshKey} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-new" element={<AddNew onAddSuccess={handleAddSuccess} />} />
        <Route path="/details/:id" element={<MovieDetails />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
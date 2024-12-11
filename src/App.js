import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import Main from './pages/Main';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      {/* Navigation Links */}
      <CustomNavbar />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

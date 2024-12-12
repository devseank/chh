import React from 'react';
import { Routes, Route, Link, Switch } from 'react-router-dom';
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
        <Route exact path="/" element={<Main />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Main from './pages/Main';
import About from './pages/About';

function App() {
  return (
    <div>
      <nav>
      {/* Navigation Links */}
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      </nav>

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

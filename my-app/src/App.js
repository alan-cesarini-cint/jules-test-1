import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css'; // Keep the import, even if the file is empty

function App() {
  return (
    <div className="p-4">
      <nav className="bg-gray-200 p-2 mb-4 rounded">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 border rounded">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

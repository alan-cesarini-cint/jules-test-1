import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import './App.css'; // Ensure this is imported

function App() {
  return (
    <div className="app-container"> {/* Was p-4 */}
      <nav className="app-nav"> {/* Was bg-gray-200 p-2 mb-4 rounded */}
        <ul className="nav-list"> {/* Was flex space-x-4 */}
          <li>
            <Link to="/" className="nav-link">Home</Link> {/* Was text-blue-500 hover:text-blue-700 */}
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link> {/* Was text-blue-500 hover:text-blue-700 */}
          </li>
        </ul>
      </nav>

      <div className="content-container"> {/* Was p-4 border rounded */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

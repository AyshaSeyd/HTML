import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes, } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Users from './Users';
import Contact from './Contact'
import NotFound from './NotFound';

function App() {
  return (
    <div>
      <Router>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/users">Users</Link>
          </li>
          <li>
          <Link to="/contact">Contact</Link>
          </li>
          <li>
          <Link to="/notfound">Not found</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
          <Route path="/users" element={<Users />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
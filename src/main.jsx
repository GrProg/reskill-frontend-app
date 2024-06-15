import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SinglePost from './components/SinglePost';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/posts/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

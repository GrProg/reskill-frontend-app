import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="site-name">Site Name</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

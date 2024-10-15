
// Renders a navigation bar with links to the Home and Favorites pages

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles//Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default Navigation;
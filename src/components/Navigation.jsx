
// Renders a navigation bar with links to the Home and Favorites pages

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles//Navigation.css';

// Defines a functional component named Navigation to render the main navigation menu
const Navigation = () => {
  return (
    <nav className="navigation">
      <Link to="/">Movie Gallery</Link>
      <Link to="/favorites">My Favorites</Link>
    </nav>
  );
};

export default Navigation;
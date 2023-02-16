import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

function Menu() {
  return (
    <div className="menu-container">
      <Link className="item" to="/">
        Home
      </Link>
      <div className="item">About</div>
      <Link className="item" to="/list">
        Blog
      </Link>
      <Link className="item" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Menu;

import React from 'react';
import './NavBar.css';
import Logo from '../logo';
import Menu from '../Menu';
import SearchBar from '../SearchBar';

function NavBar() {
  return (
    <div className="app-header">
      <div className="info-container">
        <Logo />
        <Menu />
      </div>
      <SearchBar />
    </div>
  );
}

export default NavBar;

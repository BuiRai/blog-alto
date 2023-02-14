import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-container">
      <span>SEARCH THE SITE</span>
      <div className="input-container">
        <input type="text" />
        <button type="submit">SEARCH</button>
      </div>
    </div>
  );
}

export default SearchBar;

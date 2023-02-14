import React from 'react';
import './App.css';
import Logo from './components/logo/Logo';
import Menu from './components/menu/Menu';
import SearchBar from './components/search-bar/SearchBar';

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Logo />
        <Menu />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;

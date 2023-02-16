import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import BlogAPI from '../../utils/API';
import './SearchBar.css';

function SearchBar() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState();
  const [list, setList] = useState(BlogAPI.getAllItems() || []);

  useEffect(() => {
    // setList(items);
  }, []);

  const onSearch = () => {
    if (selected) {
      navigate(`/detail/${selected.id}`);
    }
  };

  const handleOnSelect = (item) => {
    setSelected(item);
  };

  const formatResult = (item) => {
    return (
      <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
    );
  };

  return (
    <div className="search-container">
      <span>SEARCH THE SITE</span>
      <div className="input-container">
        <div style={{ width: '90%' }}>
          <ReactSearchAutocomplete
            styling={{
              backgroundColor: '#1E1400',
              hoverBackgroundColor: '#3C2000',
              color: '#FFFFFF',
              borderRadius: 0,
            }}
            items={list}
            onSelect={handleOnSelect}
            autoFocus
            formatResult={formatResult}
          />
        </div>
        <button type="submit" onClick={onSearch}>
          SEARCH
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

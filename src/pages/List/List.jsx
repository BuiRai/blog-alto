import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CardItem from '../../components/CardItem';
import './List.css';
import API from '../../utils/API';
import NavBar from '../../components/NavBar';

function ListPage() {
  const [list] = useState(API.getAllItems());

  if (list?.length <= 0) {
    return (
      <>
        <NavBar />
        <h1>
          No posts yet, try create one!! <Link to="/post-form">Here</Link>
        </h1>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="main-container">
        <h1>
          Create one!! <Link to="/post-form">Here</Link>
        </h1>
        <div className="cards-container">
          {list.map((item) => (
            <CardItem key={item?.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ListPage;

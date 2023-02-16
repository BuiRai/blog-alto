/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGE_URL } from '../../constants';
import './CardItem.css';

function CardItem({ item }) {
  return (
    <Link className="card" to={`/detail/${item?.id}`}>
      <div className="card-header">
        <div className="image-container">
          <img
            src={item?.imageUrl || DEFAULT_IMAGE_URL}
            alt="cardImage"
            className="card-image"
            width="600"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src = DEFAULT_IMAGE_URL;
            }}
          />
        </div>
      </div>
      <div className="card-body">
        <h4>{item?.name}</h4>
        <p>{item?.shortDescription?.slice(0, 150)}</p>
      </div>
      <div className="card-footer">
        <Link to={`/post-form?id=${item?.id}`}>Update</Link>
      </div>
    </Link>
  );
}

export default CardItem;

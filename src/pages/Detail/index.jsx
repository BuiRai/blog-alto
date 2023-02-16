/* eslint-disable no-param-reassign */
/* eslint-disable react/no-danger */
import React, { useEffect, useState } from 'react';
import './Detail.css';
import { useParams } from 'react-router-dom';
import API from '../../utils/API';
import { DEFAULT_IMAGE_URL } from '../../constants';
import NavBar from '../../components/NavBar';

function DetailPage() {
  const [item, setItem] = useState();

  const { id } = useParams();

  useEffect(() => {
    const data = API.getItemById(parseInt(id, 10));
    setItem(data);
  }, [id]);

  if (!item) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <NavBar />
      <h1>{item?.name}</h1>
      <div className="banner-container">
        <img
          src={item?.imageUrl || DEFAULT_IMAGE_URL}
          alt="cardImage"
          className="banner-image"
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = DEFAULT_IMAGE_URL;
          }}
        />
      </div>
      <p>{item?.shortDescription}</p>
      <div dangerouslySetInnerHTML={{ __html: `${item?.content || ''}` }} />
    </>
  );
}

export default DetailPage;

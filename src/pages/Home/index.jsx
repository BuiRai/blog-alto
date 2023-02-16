/* eslint-disable react/no-array-index-key */
import React from 'react';
import HeroImage from '../../components/HeroImage';
import NavBar from '../../components/NavBar';
import Summary from '../../components/Summary';
import './Home.css';

const images = [
  'https://i.pinimg.com/originals/03/b4/0a/03b40a3dec2adbcbf147e39e1902841c.jpg',
  'https://i.pinimg.com/originals/e3/8f/09/e38f09137b79216c726a122b02354e03.jpg',
  'https://i.pinimg.com/originals/5b/40/a8/5b40a8c67219b848987f0b13e57b1e09.jpg',
  'https://i.pinimg.com/originals/c0/b4/d6/c0b4d6653bbf1a8e2dab75186234664e.jpg',
  'https://i.pinimg.com/originals/c5/cf/c0/c5cfc01f753d5a3657fd92bd167002d3.jpg',
];

function HomePage() {
  return (
    <div className="App">
      <NavBar />
      <HeroImage />

      <div className="app-content">
        <Summary />

        <div className="images-previiew-container">
          <iframe
            src="https://www.youtube.com/embed/cXSYKUKv4l0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />

          {images.map((url, index) => (
            <img
              key={index}
              className="image-preview"
              src={url}
              alt="bannerImage1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;

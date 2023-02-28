import React, { useState } from 'react';
import './Slider.css';
import Slideoverlay from './Slideover';
import Slideback from './Slideback';

function ImageSlider(params) {
  const [imageItem, setimageItem] = useState([
    {
      img: 'https://via.placeholder.com/800x400?text=Slide+1',
      active: true,
      id: 0,
    },
    {
      img: 'https://via.placeholder.com/800x400?text=Slide+2',
      active: false,
      id: 1,
    },
    {
      img: 'https://via.placeholder.com/800x400?text=Slide+3',
      active: false,
      id: 3,
    },
    {
      img: 'https://via.placeholder.com/800x400?text=Slide+2',
      active: false,
      id: 4,
    },
  ]);

  const NextSlide = ({ elm }) => {
    console.log(elm);
  };

  const prevSlide = () => {};

  return (
    <div className="container">
      <div className="slider__info">
        <h1 className="slider__info-title">New Collection</h1>
        <div className="slider__info-year">2023</div>
        <p className="slider__info-p">
          Nunc erat mauris, hendrerit pharetra eget volutpat lorem varius. Lorem
          urna amet natoque nunc. Hendrerit viverra eu urna sapien accumsan at
          ornare. Nunc erat mauris, hendrerit pharetra eget volutpat lorem
          varius. Lorem urna amet natoque nunc. Hendrerit viverra eu urna sapien
        </p>
      </div>
      <div className="slider">
        <div className="slider__mini">
          {imageItem.map((elm, i) => {
            return true === elm.active ? (
              <>
                <NextSlide elm={elm} />
                <Slideback elm={elm} index={i} />
              </>
            ) : (
              <Slideoverlay key={`elm${i}`} data={elm} />
            );
          })}
          <button onClick={prevSlide}> prev</button>
        </div>
      </div>
      <button onClick={NextSlide}> next</button>
    </div>
  );
}

export default ImageSlider;

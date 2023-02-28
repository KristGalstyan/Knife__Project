import React from 'react';
import './Slider.css';

function Slideoverlay({ data }) {
  // console.log(data);
  return (
    <div className="slider__block-left-overlay">
      <img
        src={data.img}
        className="slider__block-left-img"
        alt="slider-knife"
      />
    </div>
  );
}

export default Slideoverlay;

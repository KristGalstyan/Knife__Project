import React from 'react';
import { image4 } from './importImg';
import { GiShoppingCart } from 'react-icons/gi';

function SliderRight() {
  return (
    <div className="slider__right">
      <div className="slider__right-title">
        <p>Klein Tools</p>
      </div>
      <div className="slider__right-img">
        <img src={image4} alt="main-knife" />
      </div>
      <div className="slider__right-subBlock">
        <div className="slider__right-subBlock-title">Klein Tools</div>
        <p className="slider__right-subBlock-p">
          Official Samsung Tuned By AKG Wired uned By AKG Wired
        </p>
        <div className="app__slider-item-block">
          <button type="submit" className="app__slider-item-button">
            Buy Now
          </button>
          <button
            type="submit"
            className="app__slider-item-basket right__slider-icon"
          >
            <GiShoppingCart className="app__slider-block-icon " />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderRight;

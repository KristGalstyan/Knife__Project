import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';

function SliderRight({ slideActiveItem }) {
  const { available, brand, id, price, src, title } = slideActiveItem;
  return (
    <div className="slider__right">
      <div className="slider__right-title">
        <p>{brand}</p>
      </div>
      <div className="slider__right-img">
        <img src={process.env.PUBLIC_URL + `img/${src}`} alt="main-knife" />
      </div>
      <div className="slider__right-subBlock">
        <div className="slider__right-subBlock-title">Klein Tools</div>
        <p className="slider__right-subBlock-p">
          Official Samsung Tuned By AKG Wired uned By AKG Wired
        </p>
        <div className="app__slider-item-block">
          <button
            type="submit"
            className={
              available
                ? 'app__slider-item-button'
                : 'app__slider-item-buttonnotAvailable'
            }
          >
            {!available ? 'No Availability' : 'Buy Now'}
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

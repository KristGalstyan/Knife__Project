import React from 'react';
import { image2 } from './importImg';
import { GiShoppingCart } from 'react-icons/gi';

function Slideroverback({ state }) {
  console.log(state);
  return (
    <>
      <img src={image2} alt="knife" />

      <div className="app__main-itemBLock">
        <div className="app__main-item-brand">brand name</div>

        <div className="app__main-item-productTitle">
          Here will be product title ,<br /> it can be 2 line.
        </div>

        <div className="app__main-item-available">
          <p>Available</p>
        </div>
        <strong className="app__main-item-price">200$</strong>
      </div>
      <div className="app__slider-item-btn">
        <button type="submit" className="app__slider-item-basket">
          <GiShoppingCart className="app__slider-block-icon" />
        </button>
      </div>
    </>
  );
}

export default Slideroverback;

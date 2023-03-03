import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';

function Slideroverlay({ slideItem }) {
  const { available, brand, id, price, src, title } = slideItem;
  return (
    <>
      <img src={process.env.PUBLIC_URL + `img/${src}`} alt={`knife${id}`} />

      <div className="app__main-itemBLock">
        <div className="app__main-item-brand">{brand}</div>

        <div className="app__main-item-productTitle">{title}</div>

        <div
          className={
            available
              ? 'app__main-item-available'
              : 'app__main-item-notavailable'
          }
        >
          <p>Available</p>
        </div>
        <strong className="app__main-item-price">{price}</strong>
      </div>
      <div className="app__slider-item-btn">
        <button type="submit" className="app__slider-item-basket">
          <GiShoppingCart className="app__slider-block-icon" />
        </button>
      </div>
    </>
  );
}

export default Slideroverlay;

import React from 'react';
import { GiShoppingCart, GrFormNext } from '../import';
import './advertising.css';

function Advertising() {
  return (
    <div className="app__ad">
      <div className="app__ad-info">
        <div className="app__ad-info-title">
          <h2 className="app__ad-title">
            If You Can’t Stop Thinking About It, Buy It
          </h2>
          <p className="app__ad-p">
            If You Can’t Stop Thinking About It, Buy ItIf You Can’t Stop
            Thinking About It, Buy ItIf You Can’t Stop Thinking About It, Buy
            ItIf You Can’t Stop Thinking About It, Buy ItIf You Can’t Stop
            Thinking About It, Buy ItIf You Can’t Stop Thinking About It, Buy It
          </p>
        </div>
        <div className="app__basket-Shop-now">
          <div className="app__basket-Shop-icon">
            Shop Now
            <GiShoppingCart className="app__info-icons" />
          </div>
          <div className="app__basket-Shopnow">
            Shop Now <GrFormNext className="app__basket-Shopnow-icon" />
          </div>
        </div>
      </div>
      <div className="app__ad-image">
        <img
          src={process.env.PUBLIC_URL + 'img/Advertising.svg'}
          alt="knife_Ad"
        />
      </div>
    </div>
  );
}

export default Advertising;

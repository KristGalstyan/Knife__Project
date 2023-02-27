import React, { useState } from 'react';
import './Slider.css';
import { GiShoppingCart } from 'react-icons/gi';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { Slideroverlay, Slideroverback, image, data } from './importImg';
import SliderRight from './SliderRight';

function Slider() {
  const [state, setState] = useState(data);

  return (
    <div className="container">
      <div className="app__slider">
        <div className="app__slider-blockOne">
          <h3 className="app__slider-blockOne-title">New Colection</h3>
          <div className="app__slider-blockOne-year">
            <p>2023</p>
          </div>
          <p className="app__slider-blockOne-p">
            app__slider-blockOne Nunc erat mauris, hendrerit pharetra eget
            volutpat lorem varius. Lorem urna amet natoque nunc. Hendrerit
            viverra eu urna sapien accumsan at ornare. Nunc erat mauris,
            hendrerit pharetra eget volutpat lorem varius. Lorem urna amet
            natoque nunc. Hendrerit viverra eu urna sapien accumsan at ornare.
          </p>
          <div className="app__slider-block">
            <button type="submit" className="app__slider-block_btn">
              Shop Now
              <GiShoppingCart className="app__slider-block-icon" />
            </button>
          </div>

          <div className="app__main-slider">
            <div className="app__main-slider-overback">
              <Slideroverlay state={state} />;
            </div>
            <div className="app__main-slider-overlay">
              <Slideroverback />;
            </div>

            <div className="app__main-item">
              <img src={image} alt="knife" />

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
            </div>
          </div>
        </div>
      </div>
      <div className="app__slider-Blocktwo">
        <span className="next__slide">
          <GrFormNext className="next__slide-icon" />
        </span>
        <SliderRight />
        <span className="prev__slide">
          <GrFormPrevious />
        </span>
      </div>
    </div>
  );
}

export default Slider;

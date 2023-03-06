import React, { useState } from 'react';
import './slider.css';

import {
  Slideroverlay,
  SliderRight,
  GrFormNext,
  GrFormPrevious,
  GiShoppingCart,
} from '../import';

function Slider() {
  const [imageItem, setimageItem] = useState([
    {
      src: 'knife.png',
      brand: 'brand name',
      title: 'Here will be product title, it can be 2 line',
      available: false,
      price: '400$',
      id: 0,
    },
    {
      src: 'knife2.png',
      brand: 'brand name',
      title: 'Here will be product title, it can be 2 line',
      available: true,
      price: '900$',
      id: 1,
    },
    {
      src: 'knife3.png',
      brand: 'brand name',
      title: 'Here will be product title, it can be 2 line',
      available: true,
      price: '600$',
      id: 2,
    },
    {
      src: 'knife4.png',
      brand: 'brand name',
      title: 'Here will be product title, it can be 2 line',
      available: true,
      price: '100$',
      id: 3,
    },
  ]);
  const [currentSlide, setCurrentSlide] = useState(0);
  function dotchange(i) {
    setCurrentSlide(i);
    const newDataSlideWithDots = imageItem[currentSlide];
    const newDataPartOne = imageItem.slice(0, currentSlide);
    const newDataPartTwo = imageItem.slice(currentSlide + 1);
    setimageItem([...newDataPartTwo, ...newDataPartOne, newDataSlideWithDots]);
  }

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide + 1 >= imageItem.length ? 0 : currentSlide + 1
    );
    const lastData = imageItem[imageItem.length - 1];

    const trueSlide = imageItem.filter((_, i) => {
      return i !== imageItem.length - 1;
    });

    const dataLastItemTrue = [lastData, ...trueSlide];

    setimageItem(dataLastItemTrue);
  };

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide - 1 < 0 ? imageItem.length - 1 : currentSlide - 1
    );
    const lastData = imageItem[0];

    const trueSlide = imageItem.filter((_, i) => {
      return i !== 0;
    });

    const dataLastItemTrue = [...trueSlide, lastData];

    setimageItem(dataLastItemTrue);
  };
  return (
    <div className="app__slider ">
      <div className="container">
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

          <div className="app__mini-slider">
            {imageItem.map((slideItem, i) => {
              return i !== imageItem.length - 1 ? (
                <div
                  className="app__mini-slider"
                  key={`${slideItem.src + slideItem.id}`}
                >
                  {i === 0 ? (
                    <div className="app__main-slider-overback ">
                      <Slideroverlay slideItem={slideItem} />
                    </div>
                  ) : i === 1 ? (
                    <div className="app__main-slider-overlay ">
                      <Slideroverlay slideItem={slideItem} />
                    </div>
                  ) : i === 2 ? (
                    <div className="app__main-item ">
                      <Slideroverlay slideItem={slideItem} />
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              ) : (
                ''
              );
            })}
          </div>
          <div className="dots">
            {imageItem.map((_, i) => {
              if (i !== imageItem.length)
                return (
                  <div
                    key={i}
                    className={i === currentSlide ? 'active' : 'dots__item'}
                    onClick={() => dotchange(i)}
                  />
                );
            })}
          </div>
        </div>

        <div className="app__slider-Blocktwo">
          <div className="wrraper__sale">
            <div className="sale">
              40%
              <br />
              OFF
            </div>
          </div>
          <span className="next__slide " onClick={nextSlide}>
            <GrFormNext className="next__slide-icon" />
          </span>

          <SliderRight slideActiveItem={imageItem[imageItem.length - 1]} />
          <span className="prev__slide " onClick={prevSlide}>
            <GrFormPrevious />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Slider;

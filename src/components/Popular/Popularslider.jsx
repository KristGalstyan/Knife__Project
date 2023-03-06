import React from 'react';

function Popularslider({ data }) {
  return (
    <div className="sliderData">
      {data.map((elm, i) => {
        const { avaliable, brand, src, text } = elm;
        return (
          <div key={src + i} className="slide_item">
            <div className="slide_item-img">
              <img
                src={process.env.PUBLIC_URL + `img/popular/${src}`}
                alt={`knifePopular ${i}`}
              />
            </div>
            <div className="slider__popular-subBlock">
              <div className="slider__popular-brand">{brand}</div>
              <p className=" app__popular-text">{text}</p>
            </div>
            <button className="app__slider-item" type="submit">
              Buy Now
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Popularslider;

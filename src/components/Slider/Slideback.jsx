import React from 'react';
import './Slidemain.css';

function Slidemain({ elm, index, nextSlide }) {
  return (
    <div
      key={`elm${index}`}
      className="slider__mini-active"
      style={{ order: '1' }}
    >
      <span className="btnPrevNext">
        <button
          className="btnPrevNext__change"
          onClick={() => nextSlide(elm, index)}
        >
          prev
        </button>
        <button
          className="btnPrevNext__change"
          onClick={() => nextSlide(elm, index)}
        >
          next
        </button>
      </span>

      <img
        key={`elm${index}`}
        src={elm.img}
        alt={`Slide ${index}`}
        className="slider__mini-img"
      />
    </div>
  );
}

export default Slidemain;

/* =<div
key={`elm${i}`}
className="slider__mini-active"
style={{ order: '1' }}
>
<img
  key={`elm${i}`}
  src={images[currentImage].img}
  alt={`Slide ${currentImage}`}
  className="slider__mini-img"
/>
</div> */

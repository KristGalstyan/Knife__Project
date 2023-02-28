import React from 'react';

function Slideback({ elm, index }) {
  return (
    <div
      key={`elm${index}`}
      className="slider__mini-active"
      style={{ order: '1' }}
    >
      <img
        key={`elm${index}`}
        src={elm.img}
        alt={`Slide ${index}`}
        className="slider__mini-img"
      />
    </div>
  );
}

export default Slideback;

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

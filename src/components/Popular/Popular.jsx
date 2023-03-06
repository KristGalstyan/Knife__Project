import React, { useEffect, useState } from 'react';
import './popular.css';
import { GrFormNext, GrFormPrevious } from '../import';
import Popularslider from './Popularslider';
import {
  TAB_LABELS,
  TAB_NAME_ALL_TIME,
  TAB_NAME_THIS_MONTH,
  TAB_NAME_THIS_YEAR,
} from './data';

function Popular({ dataPopular }) {
  const [tabName, setTabName] = useState(TAB_NAME_ALL_TIME);
  const [num, setNum] = useState(1);

  const [dataPopularClone, setDataPopularClone] = useState([]);

  function filterDataPopular(tabName) {
    const sortPopularWithGetDate = dataPopular.filter((slide, index) => {
      return tabName === TAB_NAME_ALL_TIME
        ? index !== dataPopular.length
        : tabName === TAB_NAME_THIS_MONTH
        ? new Date().getMonth() + 1 === new Date(slide.date).getMonth() + 1
        : tabName === TAB_NAME_THIS_YEAR
        ? new Date().getFullYear() === new Date(slide.date).getFullYear()
        : dataPopular;
    });
    setDataPopularClone(sortPopularWithGetDate);
  }

  useEffect(() => {
    filterDataPopular(TAB_NAME_ALL_TIME);
  }, []);

  const changeTabName = (tabName, prevNext) => {
    setTabName(tabName);
    filterDataPopular(tabName);
    prevNext === 'next'
      ? setNum(num === TAB_LABELS.length - 1 ? 0 : num + 1)
      : setNum(num === 0 ? TAB_LABELS.length - 1 : num - 1);
  };

  return (
    <div className="app__popular">
      <div className="container">
        <div className="app__popular-img">
          <img
            src={process.env.PUBLIC_URL + '/img/popular/popular.png'}
            alt="popular"
          />
        </div>
        <div className="app__popular-section">
          <div className="app__popular-info">
            <div className="app__popular-info-title">
              <h1 className="app__popular-info-color">
                Bestseller
                <span className="app__popular-info-colorBlue"> Products</span>
              </h1>
              <p className="app__popular-info-p">
                Lorem ipsum dolor sit amet consectetur. Mus sed augue fames
                tristique mi elementum volutpat magna. Ut non enim dui vitae
                egestas justo aliquet sed suspendisse. Iaculis pharetra commodo
                cras fringilla facilisis ullamco
              </p>
            </div>

            <div className="app__popular-prev-next">
              <div className="app__popular-next__slide">
                <GrFormPrevious
                  className="change__popular-icon"
                  onClick={() => changeTabName(TAB_LABELS[num])}
                />
              </div>
              <div className="app__popular-prev__slide ">
                <GrFormNext
                  className="change__popular-icon"
                  onClick={() => changeTabName(TAB_LABELS[num], 'next')}
                />
              </div>
            </div>
          </div>
          <div className="app__popular-slide">
            <div className="app__popular-btn">
              {TAB_LABELS.map((item, i) => {
                return (
                  <div
                    key={i}
                    className={`getSlide ${tabName === item ? 'active' : ''}`}
                    onClick={() => changeTabName(item)}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
            {TAB_NAME_ALL_TIME === tabName && (
              <Popularslider data={dataPopularClone.slice(0, 3)} />
            )}
            {TAB_NAME_THIS_MONTH === tabName && (
              <Popularslider data={dataPopularClone} />
            )}
            {TAB_NAME_THIS_YEAR === tabName && (
              <Popularslider data={dataPopularClone} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const dataPopular = [
  {
    avaliable: true,
    src: 'popular1.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '03.13.2023',
    id: 0,
  },
  {
    avaliable: true,
    src: 'popular2.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '03.13.2023',
    id: 1,
  },
  {
    avaliable: true,
    src: 'popular3.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '12.13.2023',
    id: 2,
  },
  {
    avaliable: true,
    src: 'popular1.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '11.13.2022',
    id: 3,
  },
  {
    avaliable: true,
    src: 'popular3.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '02.13.2023',
    id: 4,
  },
  {
    avaliable: true,
    src: 'popular2.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '01.13.2023',
    id: 4,
  },
  {
    avaliable: true,
    src: 'popular1.png',
    brand: 'brand name',
    text: 'Official Samsung Tuned By AKG Wired uned By AKG Wired  ',
    date: '03.13.2023 ',
    id: 5,
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App dataPopular={dataPopular} />);

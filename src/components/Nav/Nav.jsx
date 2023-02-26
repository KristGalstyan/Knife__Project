import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';
import { AiOutlineGlobal } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import './Nav.css';

function Nav() {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo" id="Home">
        <p className="app__navbar-title">LOGO</p>
      </div>

      <div className="app__navbar-links">
        <ul className="app__navbar-links-block">
          <li className="p__opensans">Home</li>
          <li className="p__opensans">About Us</li>
          <li className="p__opensans">Contacts</li>
        </ul>
      </div>

      <div className="app__input">
        <div className="app__categories">
          <BiMenuAltLeft className="app__categories-icon" />
          <p className="app__categories-title">Categories</p>
        </div>
        <div className="app__input-block">
          <button type="submit" className="app__input-icons">
            <BsSearch />
          </button>
          <input
            className="app__input-search"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <div className="app__info">
        <div className="app__info-language">
          <AiOutlineGlobal className="app__info-icons" />
          <p className="app__info-language-p">ENG</p>
        </div>
        <div className="app__basket">
          <p className="app__info-basket-p">Cart</p>
          <GiShoppingCart className="app__info-icons" />
        </div>
      </div>
    </div>
  );
}

export default Nav;

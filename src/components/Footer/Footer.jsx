import React from 'react';
import './footer.css';
import {
  GrFormNext,
  BiPhoneCall,
  BiMessageAltDots,
  IoLocationOutline,
} from '../import';

function Footer() {
  return (
    <div className="app__footer">
      <div className="container">
        <div className="app__footer-info">
          <div className="footer-info-block">
            <div className="app__footer-logo">
              <p className="app__navbar-title footer-info-block-p">LOGO</p>
            </div>
            <p className="app__footer-text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation
            </p>
          </div>
          <div className="footer-info-blockTwo">
            <h3 className="footer-info-blockTwo-title">Get Updated</h3>
            <div className="footer-info-blockTwo-input">
              <input type="email" placeholder="Email address" />
              <span className="footer__info-blockTwo-submit">
                <GrFormNext className="change__popular-icon" />
              </span>
            </div>
          </div>
        </div>
        <div className="footer__categories">
          <div className="footer__catergories-name">
            <h3 className="footer-info-blockTwo-title">Categories</h3>
            <p>Corks</p>
            <p>Covers</p>
            <p>Covers</p>
            <p>Filtrers</p>
            <p>Yeasts</p>
            <p>Wax</p>
            <p>Dairy equipment</p>
            <p>Concentrates</p>
            <p>Juicing accessories</p>
          </div>
          <div className="footer__company-name">
            <h3 className="footer-info-blockTwo-title">Company</h3>
            <p>Explore Products</p>
            <p>About Us</p>
            <p>Contacts</p>
            <p>Terms & Condtions</p>
            <p>Privacy & Policy</p>
          </div>
        </div>
        <div className="footer__contacts">
          <h3 className="footer-info-blockTwo-title">Location</h3>
          <div className="footer__contacts-location">
            <IoLocationOutline className="icon" />
            <p className="footer__contacts-p">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
          </div>
          <h3 className="footer-info-blockTwo-title">Contacts</h3>
          <div className="footer__contacts-location footer__contacts-location-flex">
            <div className="footer__contacts-message">
              <BiPhoneCall className="icon" />
              <p className="footer__contacts-p">(480) 555-0103</p>
            </div>
            <div className="footer__contacts-message">
              <BiMessageAltDots className="icon" />
              <p className="footer__contacts-p">slaviko@gmailos.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

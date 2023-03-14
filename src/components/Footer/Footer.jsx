import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <p>
          You can always contact us and be aware of the latest news and
          information
        </p>
        <div className="button-submit">
          <input
            type="email"
            placeholder="Type your e-mail address"
            className="inputs"
          />
          <input
            type="submit"
            placeholder="Type your e-mail address"
            className="input1"
          />
        </div>
        <input
          type="submit"
          placeholder="Type your e-mail address"
          className="input2"
        />
      </div>
      <div className="icons">
        <div className="icons-bottom">
          <img src="./images/icon.svg" alt="icon1" className="icon1" />
          <img src="./images/path.svg" alt="icon2" className="icon2" />
        </div>
        <div className="icon-img1">
          <img src="./images/icon1.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon">
          <img src="./images/icon2.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon">
          <img src="./images/icon3.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon">
          <img src="./images/icon4.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon">
          <img src="./images/icon5.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon">
          <img src="./images/icon6.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon">
          <img src="./images/icon7.svg" alt="icon" className="icon-img" />
        </div>
        <div className="icon-img1">
          <img src="./images/icon-footer.svg" alt="icon" className="icon-img" />
        </div>
      </div>

      <div className="footer-button">
        <div className="header">
          <div className="header-footer">
            <div>
              <img
                src="./images/headers.svg"
                className="header-icon"
                alt="menu laptop"
              />
            </div>
            <div>
              <ul className="footer-ul" id="footer-header-ul">
                <li>Home</li>
                <li>Services </li>
                <li>Portfolio</li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-icon">
          <div className="footer-description">
            <div className="footer-description-item">
              <div className="description-icon">
                <div className="footer-icons-right">
                  <div
                    className="footer-icon-right"
                    id="footer-icon-right-desktop"
                  >
                    <img src="./images/map.svg" alt="map" />
                    <span>7451 Garden Grove ave Reseda CA 91335</span>
                  </div>
                  <div
                    className="footer-icon-right"
                    id="footer-icon-right-mobile"
                  >
                    <img src="./images/map.svg" alt="map" />
                    <span>
                      7451 Garden Grove ave
                      <br /> Reseda CA 91335
                    </span>
                  </div>
                  <div className="footer-icon-right" id="footer-icon-phone">
                    <img src="./images/phones.svg" alt="phone" />
                    <div className="phone-span">
                      <span>+1(818) 930-4747</span>
                      <span>+374 91 566714</span>
                    </div>
                  </div>
                  <div className="footer-icon-right" id="footer-icon-post">
                    <img src="./images/post.svg" alt="post" />
                    <span>beondit@gmail.com</span>
                  </div>
                </div>
                <div className="footer-icon-left">
                  <a href="#whatsapp">
                    <img
                      src="./images/whatsapp.svg"
                      alt="icon"
                      className="whatsapp"
                    />
                  </a>
                  <a href="#Instagram">
                    <img src="./images/Instagram.svg" alt="icon" />
                  </a>
                  <a href="#linkedin">
                    <img src="./images/linkedin.svg" alt="icon" />
                  </a>
                </div>
              </div>
              <div>
                <ul className="footer-ul" id="footer-header-ul2">
                  <li>Home</li>
                  <li>Services </li>
                  <li>Portfolio</li>
                  <li>About us</li>
                  <li>Contact us</li>
                </ul>
              </div>
            </div>
            <div className="footer-button-email">
              <div className="footer-border"></div>
              <div className="footer-button-texts">
                <div className="footer-email">
                  Beyond it © All rights reserved 2022
                </div>
                <div className="footer-button-text">
                  <span>GDPR Policy</span>
                  <span>Privacy policy</span>
                  <Link to="/Terms">
                  <span>Terms & Conditions</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

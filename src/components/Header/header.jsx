import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  const [isClick, setIsClick] = useState(false)
  const [isActive, setIsActive] = useState('home')

  const clickHandler = () => {
    setIsClick(true)
  }
  const closeSlider = () => {
    setIsClick(false)
  }
 
  return (
    <>
      <div className={`sliderHeader ${isClick ? 'sliderHeader-active' : ''}`}>
        <div className="closeSliderMenu">
          <img
            src="./images/close.svg"
            alt="closeSlider"
            className="closeImageSlider"
            onClick={closeSlider}
          />
        </div>
        <div className="ulSlider">
          <div className="activeClick">
            <span className={`${isActive === 'home' ? 'active' : ''}`}></span>
            <span
              className={`${isActive === 'services' ? 'active' : ''}`}
            ></span>
            <span
              className={`${isActive === 'portfolio' ? 'active' : ''}`}
            ></span>
            <span className={`${isActive === 'about' ? 'active' : ''}`}></span>
            <span
              className={`${isActive === 'contact' ? 'active' : ''}`}
            ></span>
          </div>
          <div className="ulSliderHeader">
            <ul className="menuSliderHeader">
              <Link to="/">
                <li
                  className={`itemSliderHeader ${
                    isActive === 'home' ? 'activeHome' : ' '
                  }`}
                  onClick={() => setIsActive('home')}
                >
                  Home
                </li>
              </Link>
              <Link to="/Service">
                <li
                  className={`itemSliderHeader ${
                    isActive === 'services' ? 'activeService' : ' '
                  }`}
                  onClick={() => setIsActive('services')}
                >
                  Services
                </li>
              </Link>
              <Link to="/Portfolio">
                <li
                  className={`itemSliderHeader ${
                    isActive === 'portfolio' ? 'activePortfolio' : ' '
                  }`}
                  onClick={() => setIsActive('portfolio')}
                >
                  Portfolio
                </li>
              </Link>
              <Link to="/AboutUs">
                <li
                  className={`itemSliderHeader ${
                    isActive === 'about' ? 'activeAboutUs' : ' '
                  }`}
                  onClick={() => setIsActive('about')}
                >
                  About us
                </li>
              </Link>
              <Link to="/ContactUs">
                <li
                  className={`itemSliderHeader ${
                    isActive === 'contact' ? 'activeContactUs' : ' '
                  }`}
                  onClick={() => setIsActive('contact')}
                >
                  Contact us
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="GroupSlider">
          <img
            src="./images/GroupSlider.svg"
            alt="GroupSlider"
            className="GroupSliderImage"
          />
        </div>
      </div>
      <div className="header">
        <div>
          <img
            src="./images/Group 10249.svg"
            className="menu-laptop"
            alt="menu laptop"
          />
          <img
            src="./images/menu.svg"
            className="menu-mobile"
            alt="menu mobile"
            onClick={clickHandler}
          />
        </div>
        <div>
          <ul className="menu-header">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/Service">
              <li>Services </li>
            </Link>
            <Link to="/Portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/AboutUs">
              <li>About us</li>
            </Link>
            <Link to="/ContactUs">
              <li>Contact us</li>
            </Link>
          </ul>
          <img
            src="./images/Group 10249.svg"
            className="menu-laptop2"
            alt="menu laptop"
          />
        </div>
        <div>
          <img
            src="./images/buttonPhone2.svg"
            className="phone-laptop"
            alt="phone laptop"
          />
          <img
            src="./images/phone.svg"
            className="phone-mobile"
            alt="phone mobile"
          />
        </div>
      </div>
    </>
  )
}

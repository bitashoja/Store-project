import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  const [isClick, setIsClick] = useState(false)
  const [isHome, setIsHome] = useState(false)
  const [isService, setIsService] = useState(false)
  const [isPortfolio, setIsPortfolio] = useState(false)
  const [isAbout, setIsAbout] = useState(false)
  const [isContact, setIsContact] = useState(false)
  const clickHandler = () => {
    setIsClick(true)
  }
  const closeSlider = () => {
    setIsClick(false)
  }
  const clickHandlerHome = () => {
    setIsHome(true)
    setIsAbout(false)
    setIsContact(false)
    setIsPortfolio(false)
    setIsService(false)
  }
  const clickHandlerService = () => {
    setIsService(true)
    setIsHome(false)
    setIsAbout(false)
    setIsContact(false)
    setIsPortfolio(false)
  }
  const clickHandlerPortfolio = () => {
    setIsPortfolio(true)
    setIsHome(false)
    setIsAbout(false)
    setIsContact(false)
    setIsService(false)
  }
  const clickHandlerAbout = () => {
    setIsAbout(true)
    setIsHome(false)
    setIsService(false)
    setIsContact(false)
    setIsPortfolio(false)
  }
  const clickHandlerContact = () => {
    setIsContact(true)
    setIsHome(false)
    setIsAbout(false)
    setIsService(false)
    setIsPortfolio(false)
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
            <span className={`${isHome ? 'active' : ''}`}></span>
            <span className={`${isService ? 'active' : ''}`}></span>
            <span className={`${isPortfolio ? 'active' : ''}`}></span>
            <span className={`${isAbout ? 'active' : ''}`}></span>
            <span className={`${isContact ? 'active' : ''}`}></span>
          </div>
          <div className="ulSliderHeader">
            <ul className="menuSliderHeader">
              <Link to="/">
                <li
                  className={`itemSliderHeader ${isHome ? 'activeHome' : ' '}`}
                  onClick={clickHandlerHome}
                >
                  Home
                </li>
              </Link>
              <Link to="/Services">
                <li
                  className={`itemSliderHeader ${
                    isService ? 'activeService' : ' '
                  }`}
                  onClick={clickHandlerService}
                >
                  Services
                </li>
              </Link>
              <Link to="/Portfolio">
                <li
                  className={`itemSliderHeader ${
                    isPortfolio ? 'activePortfolio' : ' '
                  }`}
                  onClick={clickHandlerPortfolio}
                >
                  Portfolio
                </li>
              </Link>
              <Link to="/AboutUs">
                <li
                  className={`itemSliderHeader ${
                    isAbout ? 'activeAbout' : ' '
                  }`}
                  onClick={clickHandlerAbout}
                >
                  About us
                </li>
              </Link>
              <Link to="/ContactUs">
                <li
                  className={`itemSliderHeader ${
                    isContact ? 'activeContact' : ' '
                  }`}
                  onClick={clickHandlerContact}
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

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import "./header.css";

export default function HeaderComponent() {
  const [isClick, setIsClick] = useState(false);
  const [isActive, setIsActive] = useState("home");

  const clickHandler = () => {
    setIsClick(true);
  };
  const closeSlider = () => {
    setIsClick(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector(".header-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <>
      <div className={`sliderHeader ${isClick ? "sliderHeader-active" : ""}`}>
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
            <span className={`${isActive === "home" ? "active" : ""}`}></span>
            <span
              className={`${isActive === "services" ? "active" : ""}`}
            ></span>
            <span
              className={`${isActive === "portfolio" ? "active" : ""}`}
            ></span>
            <span className={`${isActive === "about" ? "active" : ""}`}></span>
            <span
              className={`${isActive === "contact" ? "active" : ""}`}
            ></span>
          </div>
          <div className="ulSliderHeader">
            <ul className="menuSliderHeader">
              <Link to="/">
                <li
                  className={`itemSliderHeader ${
                    isActive === "home" ? "activeHome" : " "
                  }`}
                  onClick={() => setIsActive("home")}
                >
                  Home
                </li>
              </Link>
              <Link to="/Service">
                <li
                  className={`itemSliderHeader ${
                    isActive === "services" ? "activeService" : " "
                  }`}
                  onClick={() => setIsActive("services")}
                >
                  Services
                </li>
              </Link>
              <Link to="/Portfolio">
                <li
                  className={`itemSliderHeader ${
                    isActive === "portfolio" ? "activePortfolio" : " "
                  }`}
                  onClick={() => setIsActive("portfolio")}
                >
                  Portfolio
                </li>
              </Link>
              <Link to="/AboutUs">
                <li
                  className={`itemSliderHeader ${
                    isActive === "about" ? "activeAboutUs" : " "
                  }`}
                  onClick={() => setIsActive("about")}
                >
                  About us
                </li>
              </Link>
              <Link to="/ContactUs">
                <li
                  className={`itemSliderHeader ${
                    isActive === "contact" ? "activeContactUs" : " "
                  }`}
                  onClick={() => setIsActive("contact")}
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
      <div className="header-sticky">
        <div className="header">
          <div className="header-div-left">
            <div className="header-left-laptop">
              <span className="header-left-circle"></span>
              <span className="header-left-text">BEYOND IT</span>
            </div>
            <img
              src="./images/menu.svg"
              className="menu-mobile"
              alt="menu mobile"
              onClick={clickHandler}
            />
          </div>
          <div className="header-div-center">
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
          <div className="header-div-right">
            <button className="button-number">
              <BsTelephoneFill />
              <IoIosArrowForward />
              +1(818)930-4747
            </button>
            <img
              src="./images/phone.svg"
              className="phone-mobile"
              alt="phone mobile"
            />
          </div>
        </div>
      </div>
    </>
  );
}

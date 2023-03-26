import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
              <NavLink to="/">
                <li
                  className={`itemSliderHeader ${
                    isActive === "home" ? "activeHome" : " "
                  }`}
                  onClick={() => setIsActive("home")}
                >
                  Home
                </li>
              </NavLink>
              <NavLink to="/Service">
                <li
                  className={`itemSliderHeader ${
                    isActive === "services" ? "activeService" : " "
                  }`}
                  onClick={() => setIsActive("services")}
                >
                  Services
                </li>
              </NavLink>
              <NavLink to="/Portfolio">
                <li
                  className={`itemSliderHeader ${
                    isActive === "portfolio" ? "activePortfolio" : " "
                  }`}
                  onClick={() => setIsActive("portfolio")}
                >
                  Portfolio
                </li>
              </NavLink>
              <NavLink to="/AboutUs">
                <li
                  className={`itemSliderHeader ${
                    isActive === "about" ? "activeAboutUs" : " "
                  }`}
                  onClick={() => setIsActive("about")}
                >
                  About us
                </li>
              </NavLink>
              <NavLink to="/ContactUs">
                <li
                  className={`itemSliderHeader ${
                    isActive === "contact" ? "activeContactUs" : " "
                  }`}
                  onClick={() => setIsActive("contact")}
                >
                  Contact us
                </li>
              </NavLink>
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
          <div>
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
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/Service"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Services </li>
              </NavLink>
              <NavLink
                to="/Portfolio"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Portfolio</li>
              </NavLink>
              <NavLink
                to="/AboutUs"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>About us</li>
              </NavLink>
              <NavLink
                to="/ContactUs"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <li>Contact us</li>
              </NavLink>
            </ul>
            <div className="menu-laptop2">
              <span className="circleCenterHeader"></span>
              <span className="textCircleCenterHeader">BEYOND IT</span>
            </div>
          </div>
          <div>
            <button className="button-number">
              <BsTelephoneFill />
              <IoIosArrowForward />
              +1(818)930-4747
            </button>

            <button className="phone-mobile">
              <BsTelephoneFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

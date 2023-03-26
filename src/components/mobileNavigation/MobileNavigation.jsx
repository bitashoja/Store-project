import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNavigation.css";

const MobileMenuRow = ({ title, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        "mobileMenuRow " + (isActive ? " active" : "")
      }
    >
      <span className="bar" />
      <span>{title}</span>
    </NavLink>
  );
};

export const MobileNavigation = ({ isOpen, closeMenu }) => {
  return (
    <div className={`sliderHeader ${isOpen ? "open" : ""}`}>
      <div className="closeSliderMenu">
        <img
          src="./images/close.svg"
          alt="closeSlider"
          className="closeImageSlider"
          onClick={closeMenu}
        />
      </div>
      <div className="ulSlider">
        <div className="ulSliderHeader">
          <ul className="menuSliderHeader">
            <li>
              <MobileMenuRow title="Home" to="/" />
            </li>

            <li>
              <MobileMenuRow title="Service" to="/Service" />
            </li>

            <li>
              <MobileMenuRow title="Portfolio" to="/Portfolio" />
            </li>

            <li>
              <MobileMenuRow title="About Us" to="/AboutUs" />
            </li>

            <li>
              <MobileMenuRow title="Contact Us" to="/ContactUs" />
            </li>
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
  );
};

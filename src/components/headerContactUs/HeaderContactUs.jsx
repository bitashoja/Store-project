import React, { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { MobileNavigation } from "../mobileNavigation/MobileNavigation";
import "../Header/header.css";
import "./header2.css";

export default function HeaderContactUs() {
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector(".header-sticky");
    const scrollTop = window.scrollY;
    scrollTop >= 150
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <MobileNavigation isOpen={isOpen} closeMenu={() => setOpen(false)} />
      <div className="header-sticky">
        <div className="header">
          <div>
            <div className="header-left-laptop">
              <span className="header-left-circle"></span>
              <span className="header-left-text">BEYOND IT</span>
            </div>
            <img
              src="./images/menu.svg"
              className="menu-mobile1"
              alt="menu mobile"
              onClick={() => setOpen(true)}
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
              <span className="textCircleCenterHeader1">BEYOND IT</span>
            </div>
          </div>
          <div>
            <button className="button-number">
              <BsTelephoneFill />
              <IoIosArrowForward />
              +1(818)930-4747
            </button>

            <button className="phone-mobile1">
              <BsTelephoneFill />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

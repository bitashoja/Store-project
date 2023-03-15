import React from "react";
import Header from "../Header/HeaderComponent";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import "./headerAbout.css";

export default function HeaderAbout() {
  return (
    <div className="header-about-container">
      <Header />
      <div className="header-about-text">
        <h3>About us</h3>
        <div className="header-about">
          <p>
            Providing specialized web and information
            <br /> technology services, website design and <br /> SEO, portal
            design and dedicated CMS along
            <br /> with professional web hosting and
            <br />
            dedicated virtual server for businesses and
            <br /> organizations. We provide it to our <br /> customers with the
            highest quality.
          </p>
          <div className="headerBoxButton" id="buttons-about">
            <button className="button-number-headerContainer">
              <BsTelephoneFill />
              <IoIosArrowForward />
              +1(818)930-4747
            </button>
            <button className="button-headerContainer-send" id="button-about2">
              <RxEnvelopeClosed />
              <IoIosArrowForward />
              <span>beondit@gmail.com</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

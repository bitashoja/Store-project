import React from "react";
import Header from "../Header/HeaderComponent";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import "./headerAbout.css";

export default function HeaderAbout() {
  return (
    <div className="header-container header-about-container">
      <Header />
      <div className="header-about-text">
        <h3>About us</h3>
        <div className="header-about">
          <p>
            The beyond IT development team started its activity
            <br /> in early 2021 by designing and building several <br />{" "}
            applications and sites for friends. This good
            <br /> experience made us take bigger steps with <br /> more
            seriousness and with the aim of providing fair <br />
            and professional services to all businesses. Our slogan is always:
            <br />
            We consider customers as our friends <br />
            and partners and will do our best to satisfy them.
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

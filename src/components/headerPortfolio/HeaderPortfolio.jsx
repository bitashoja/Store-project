import React from "react";
import Header from "../Header/HeaderComponent";
import "./headerPortfolio.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

export default function HeaderPortfolio() {
  return (
    <div className="header-container HeaderPortfolio">
      <Header />
      <div className="box-headerPortfolio">
        <div className="headerPortfolio-img">
          <img
            src="./images/Frame10.svg"
            alt="Frame10"
            className="header-portfolio-img"
          />
        </div>
        <div className="headerPortfolio-text">
          <div className="heading-text-portfolio">
            <h3 className="title-header-portfolio">Portfolio</h3>
            <span className="text-header-portfolio">
              You can see some examples of our works below, which are done based
              on the needs of the customers and the capabilities of the BEOND IT
              team.
            </span>
          </div>
          <div className="button-header-portfolio">
            <div className="button-numberPhone-portfolio">
              <button className="button-number-headerContainer button-phone-portfolio">
                <BsTelephoneFill />
                <IoIosArrowForward />
                +98-12345698
              </button>
            </div>
            <div className="button-email-portfolio">
              <button className="button-headerContainer-send button-email-portfolio">
                <img
                  src="../images/path73.svg"
                  alt="path73"
                  className="envelope"
                />
                <img
                  src="../images/shee56.svg"
                  alt="shee"
                  className="envelope1"
                />
                <span>beondit@gmail.com</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

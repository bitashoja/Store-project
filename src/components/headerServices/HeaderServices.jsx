
import React from "react";
import Header from "../Header/HeaderComponent";
import "./headerService.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";
import { Link } from "react-router-dom"
export default function HeaderServices() {
  return (
    <div className="header-container" id="header-services">
      <Header />
      <div className="headerBox">
        <div className="headerBoxText">
          <h3>
            Our <br /> Services
          </h3>
          <p>Do you like sensitive and difficult work?</p>
          <p>
            Beyond IT provides you with the best quality website design
            <br /> services by expert and experienced people.
          </p>
          <div className="headerBoxButton">
            <button className="button-number-headerContainer">
              <BsTelephoneFill />
              <IoIosArrowForward />
              +1(818)930-4747
            </button>
           <Link to="/SendOrder">
            <button className="button-headerContainer-send">
              <RxEnvelopeClosed />
              <IoIosArrowForward />
              <span>SEND ORDER</span>
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


import React from "react";
import Header from "../Header/Header";
import "./headerService.css";

export default function HeaderServices() {
  return (
    <div className="header-container">
      <Header />
      <div className="header-services">
        <h3>
          Our <br /> Services
        </h3>
        <p>Do you like sensitive and difficult work?</p>
        <p>
          Beyond IT provides you with the best quality website design services
          by expert and experienced people.
        </p>
        <div className="headerBoxButton">
          <img
            src="./images/buttonPhone.svg"
            className="buttonPhone"
            alt="buttonPhone"
          />
          <img
            src="./images/emailPhone.svg"
            className="emailPhone"
            alt="emailPhone"
          />
        </div>
      </div>
    </div>
  );
}

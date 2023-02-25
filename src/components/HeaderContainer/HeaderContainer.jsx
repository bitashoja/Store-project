import React, { useState } from "react";
import Header from "../Header/Header";
import "./headerContainer.css";

export default function HeaderContainer() {
  return (
    <>
      <div className="header-container">
        <Header />
        <div className="headerBox">
          <div className="headerBoxImg">
            <img src="./images/laptop.svg" alt="laptop" />
          </div>
          <div className="headerBoxText">
            <h3>
              Software <br /> Development
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
              in sapiente quam deserunt eum veritatis fugiat doloremque.
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
      </div>
    </>
  );
}

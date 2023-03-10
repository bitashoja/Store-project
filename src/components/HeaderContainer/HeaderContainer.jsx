import React from "react";
import Header from "../Header/HeaderComponent";
import "./headerContainer.css";
import { BsTelephoneFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { RxEnvelopeClosed } from "react-icons/rx";

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
            
             <div className="button-header-portfolio button-headerContainer">
            <div className="button-numberPhone-portfolio">
            <button className="button-number-headerContainer button-phone-portfolio">
                <BsTelephoneFill />
                <IoIosArrowForward />
                +1(818)930-4747
              </button>
            </div>
            <div className="button-email-portfolio">
              <button className="button-headerContainer-send button-email-portfolio">
              <RxEnvelopeClosed />
                <IoIosArrowForward />
                <span>SEND ORDER</span>
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

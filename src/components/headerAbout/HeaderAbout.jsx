import React from "react";
import Header from "../Header/HeaderComponent";
import "./headerAbout.css";

export default function HeaderAbout() {
  return (
    <div>
      <Header />
      <div className="headerBox" id="header-about">
        <div className="headerBoxText">
          <h3>About us</h3>
          <p>
            Providing specialized web and information technology services,
            website design and SEO, portal design and dedicated CMS along with
            professional web hosting and dedicated virtual server for businesses
            and organizations. We provide it to our customers with the highest
            quality.
          </p>
          <div className="button-header-portfolio">
            <div className="button-numberPhone-portfolio">
              <img src="./images/phoneNumber.svg" alt="phoneNumber" />
            </div>
            <div className="button-email-portfolio">
              <img src="./images/email.svg" alt="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

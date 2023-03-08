import React, { useState } from "react";
import Header from "../../components/Header/HeaderComponent";
import Select from "react-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./ContactUs.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function ContactUs() {
  const [value, setValue] = useState();

  return (
    <div className="header-container">
      <Header />
      <div className="header-contact">
        <div className="header-contact-title">
          <h4>Contact us</h4>
          <p>Any question or remarks? Just drop us a line!</p>
        </div>
        <div className="header-contact-information">
          <div className="header-contact-right">
            <div className="contact-right-text">
              <h5>Contact Information</h5>
              <p>
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
            </div>
            <div className="contact-right-icons">
              <img src="./images/phone 4.svg" alt="phone" />
              <div className="right-icon-span">
                <span>+1(818) 930-4747</span>
                <span>+374 91 566714</span>
              </div>
            </div>
            <div className="contact-right-icons">
              <img src="./images/post 4.svg" alt="post" />
              <span>beondit@gmail.com</span>
            </div>
            <div className="contact-right-icons">
              <img src="./images/map 4.svg" alt="map" />
              <span>7451 Garden Grove ave Reseda CA 91335</span>
            </div>
            <div className="icon-contact">
              <img src="./images/Facebook.svg" alt="Facebook" />
              <img src="./images/Twitter 4.svg" alt="Twitter" />
              <img src="./images/instagram (1).svg" alt="Instagram" />
              <img src="./images/linkedin 5.svg" alt="linkedin" />
            </div>
            <div className="contact-right-icon">
              <img
                src="./images/circle.svg"
                alt="circle"
                className="right-icon-circle"
              />
              <img
                src="./images/Semicircular.svg"
                alt="circle"
                className="right-icon-Semicircular"
              />
            </div>
          </div>
          <div className="header-contact-left">
            <div className="contact-left-name">
              <div className="contact-left-input">
                <label>First Name</label>
                <input type="name" placeholder="Micheal" />
              </div>
              <div className="contact-left-input">
                <label>Last name</label>
                <input type="name" placeholder="Watson" required />
              </div>
            </div>
            <div className="contact-left-name">
              <div className="contact-left-input">
                <label>Email address</label>
                <input type="email" placeholder="michealwatson@gmail.com" />
              </div>
              <div className="contact-left-input">
                <label>Phone</label>
                {/* <input type="phone" placeholder="+1  65÷≥0 513 0514" /> */}
                <Select options={options} isMulti className="" />
              </div>
              <div className="contact-left-input">
                <label>Phone</label>
                {/* <input type="phone" placeholder="+1  65÷≥0 513 0514" /> */}

                <PhoneInput
                  placeholder="Enter phone number"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>
            <div className="contact-left-massage">
              <label>massage</label>
              <input type="massage" placeholder="Write your message..." />
            </div>
            <button className="contact-left-submit">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

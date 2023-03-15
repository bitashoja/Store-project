import React, { useState } from "react";
import HeaderContactUs from "../../components/headerContactUs/HeaderContactUs";
import Select from "react-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const options = [
  { value: "Other", label: "Other" },
  { value: "UIUX Design", label: "UIUX Design" },
  { value: "Mobile Apps development", label: "Mobile Apps development" },
  { value: "Hosting", label: "Hosting" },
  { value: "Network services", label: "Network services" },
  { value: "Digital Marketing", label: "Digital Marketing" },
  { value: "Graphic Design", label: "Graphic Design" },
];

export default function SendOrder() {
  const [value, setValue] = useState();
  const [name, setName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [email, setEmail] = useState(false);

  const onChangeHandler = (event) => {
    const sum = event.target.value;
    console.log(sum.length);
    if (sum.length >= 3) {
      setName("name");
    }
  };

  const onChangeLastName = (event) => {
    const sum = event.target.value;
    console.log(sum.length);
    if (sum.length >= 3) {
      setLastName(true);
    }
  };

  const onChangeEmailHandler = (event) => {
    const sum = event.target.value;
    console.log(sum.length);
    if (sum.length >= 10) {
      setEmail(true);
    }
  };

  const clickHandler = () => {
    if (value && name && lastName && email) {
      alert("مشخصات شما ثبت شد ");
    } else alert("مشخصات را به صورت کامل وارد نماید");
  };

  return (
    <div className="header-container-contact headerContactUs">
      <HeaderContactUs />
      <div className="header-contact">
        <div className="header-contact-title">
          <h4>Send order</h4>
          <p>Please specify your information and the details of your request</p>
        </div>
        <div className="header-contact-information">
          <div className="header-contact-left">
            <div className="header-contact-circle-left">
              <div className="contact-right-text">
                <h5>Contact Information</h5>
                <p>
                  Fill up the form and our Team will get back to you within 24
                  hours.
                </p>
              </div>
              <div className="contact-header-icons-left">
                <div className="contact-right-icons">
                  <img src="./images/phone 4.svg" alt="phone" />
                  <span className="phone-number-one">+1(818) 930-4747</span>
                </div>
                <div className="contact-right-icons">
                  <img src="./images/post 4.svg" alt="post" />
                  <span>beondit@gmail.com</span>
                </div>
                <div className="contact-right-icons">
                  <img src="./images/map 4.svg" alt="map" />
                  <span>7451 Garden Grove ave Reseda CA 91335</span>
                </div>
                <div className="contact-bottom-circle">
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
                  <div className="icon-contact">
                    <img src="./images/Facebook.svg" alt="Facebook" />
                    <img src="./images/Twitter 4.svg" alt="Twitter" />
                    <img src="./images/instagram (1).svg" alt="Instagram" />
                    <img src="./images/linkedin 5.svg" alt="linkedin" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-contact-right">
            <div className="contact-right-name">
              <div className="contact-right-input">
                <label className="firstName">First Name</label>
                <input
                  placeholder="Micheal"
                  className={`${name ? "success" : " "}`}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="contact-right-input">
                <label>Last name</label>
                <input
                  className={`${lastName ? "success" : " "}`}
                  onChange={onChangeLastName}
                  placeholder="Watson"
                  required
                />
              </div>
            </div>
            <div className="contact-right-name">
              <div className="contact-right-input">
                <label>Email address</label>
                <input
                  className={`${email ? "success" : " "}`}
                  onChange={onChangeEmailHandler}
                  type="email"
                  placeholder="michealwatson@gmail.com"
                />
              </div>
              <div className="contact-right-input">
                <label>Phone</label>
                <PhoneInput
                   international
                  defaultCountry="US"
                  placeholder="+1  650 513 0514"
                  value={value}
                  onChange={setValue}
                  className={`phoneInputTag ${value ? "success" : " "}`}
                />
              </div>
            </div>
            <div className="contact-left-input">
              <label className="yourOrder">Your order</label>
              <Select options={options} isMulti className="selectMulti" />
            </div>
            <div className="contact-left-massage">
              <label>massage</label>
              <input
                type="massage"
                placeholder="Write your message..."
                className="message"
              />
              <button className="contact-left-submit" onClick={clickHandler}>
                submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./onlineShope.css";
import Button from "../button/Button";

export default function OnlineShope() {
  return (
    <div className="OnlineShope shop">
      <h3 className="title-onlineShope-mobile">OnlineShope</h3>
      <div className="onlineShope-img">
        <img src="./images/Frame102.svg" alt="Frame102" />
      </div>
      <div className="onlineShope-text onlineText">
        <h3 className="title-onlineShope-laptop">OnlineShope</h3>
        <span>
          BEONDIT consists of developers specializing in the fields of website
          design, smart application design, logo design and website SEO in an
          effort to provide its services to its customers and audiences in the
          best possible way along with modern technologies. The specialized
          services of this collection are listed below, we hope to see the best
          services offered to you. <br /> Our technical team provides extensive
          services in the field of website development and supports us in
          various development languages such as
          <b>
            Java, JavaScript, #C, Python, PHP, C++, Scala, netscape, Nodejs,
            React, React Native, HTML and CSS, WordPress.
          </b>
          we do
        </span>
        <div className="buttonWebsite">
          <Button className="buttonComponent" title="SEE MORE" />
        </div>
      </div>
    </div>
  );
}

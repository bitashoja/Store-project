import React from "react";
import "./design.css";
import Button from "../button/Button"

export default function Design() {
  return (
    <div className="design">
      <div className="image-design" id="image-design-top">
        <img src="./images/ui-mobile.svg" alt="ui" />
      </div>
      <div className="text-design">
        <h3>UIUX Design</h3>
        <p>
          Don't you want to have a website that just exists? The effort of
          <span className="beond-span">
            BEOND <img src="./images/Subtract.svg" alt="Subtract" />
          </span>
          specialists is to design a site for you that will make the most of it.
          <ul>
            <li>We always follow these principles</li>
            <li>Design according to the standard of the day</li>
            <li>Analysis of competitors</li>
            <li>Design with PS/XD/figam based on customer's requirement</li>
            <li>Compliance with the basic principles of UX in design</li>
            <li>Compliance with the principles of color psychology</li>
            <li>No limit on the number of corrections and edits</li>
          </ul>
          User experience (UX) and userinterface (UI) are very decisive
          components in any digital product. Your audience first judges the
          appearance of your product and then decides to use it. A suitable UI
          can attract more audience to your product and a good UX makes using
          your product enjoyable and pleasant, thus making existing users stay,
          and attracting new users. Therefore, a proper UI/UX design makes it
          easier to communicate with users.
        </p>
        <div className="button-design">
        <Button className="buttonComponent" title = "ORDER" />
        </div>
      </div>
      <div className="image-design" id="image-design-left">
        <img src="./images/ui design.svg" alt="ui" />
      </div>
    </div>
  );
}

import React from 'react';
import './radioHelen.css';
import Button from '../button/Button';

export default function RadioHelen() {
  return (
    <div className="OnlineShope RadioHelen">
      <h3 className="title-onlineShope-mobile">Radio Helen app</h3>
      <div className="box-radio">
      <div className="onlineShope-text">
        <h3 className="title-onlineShope-laptop">Radio Helen app</h3>
        <span>
          Don't you want to have a website that just exists? The effort of
          <span className="Beyond">
            Beyond <img src="./images/Subtract.svg" alt="Subtract" />
          </span>
          specialists is to design a site for you that will make the most of it.
          <br /> We always follow these principles Design according to the
          standard of the day Analysis of competitors Design with PS/XD/figam
          based on customer's requirement Compliance with the basic principles
          of UX in design Compliance with the principles of color psychology No
          limit on the number of corrections and edits User experience (UX) and
          user interface (UI) are very decisive components in any digital
          product.
          <br /> Your audience first judges the appearance of your product and
          then decides to use it. A suitable UI can attract more audience to
          your product and a good UX makes using your product enjoyable and
          pleasant, thus making existing users stay, and attracting new users.{' '}
          <br />
          Therefore, a proper UI/UX design makes it easier to communicate with
          users.
        </span>
        <div className="buttonWebsite">
          <Button className="buttonComponent" title = "SEE MORE" />
        </div>
      </div>
      <div className="onlineShope-img">
        <img src="./images/Group303.svg" alt="Group303" />
      </div>
      </div>
      
    </div>
  )
}

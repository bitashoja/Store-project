import React from "react";
import Button from "../button/Button";
import "./radioWebsite.css";

export default function RadioWebsite() {
  return (
    <div className="OnlineShope RadioHelen">
      <h3 className="title-onlineShope-mobile">Radio Helen Website</h3>
      <div className="box-radio">
        <div className="onlineShope-text">
          <h3 className="title-onlineShope-laptop">Radio Helen Website</h3>
          <span>
            Our mission at EnvireTech is to help you focus in your field by
            realizing and supervising your projects with our experts from all
            over the world. At EnvireTech we offer IT services and solutions for
            building an efficient IT infrastructure, data centers, offices or
            any kind of workplaces. <br /> EnvireTech's team works around the
            clock to provide you with end-to-end services for the efficient and
            effective implementation of your project, so your claims can be
            completed on time and within budget. Our head office is in Hungary
            and together with our partners in the Netherlands, Australia,
            Germany and Great Britain we can also serve you Globally. <br />{" "}
            EnvireTech's team works around the clock to provide you with
            end-to-end services for the efficient and effective implementation
            of your project, so your claims can be completed on time and within
            budget.
          </span>
          <div className="buttonWebsite">
            <Button className="buttonComponent" title="SEE MORE" />
          </div>
        </div>
        <div className="onlineShope-img radio-img">
          <img
            src="./images/Screenshot.png"
            alt="Group303"
            className="radio-img-img"
          />
        </div>
      </div>
    </div>
  );
}

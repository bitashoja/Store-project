import React from "react";
import "./introit.css";
import Button from "../button/Button";

export default function Introit() {
  return (
    <div className="OnlineShope introit">
      <h3 className="title-onlineShope-mobile titleIntroit">INTROIT</h3>
      <div className="box-radio">
        <div className="onlineShope-text">
          <h3 className="title-onlineShope-laptop titleIntroit">INTROIT</h3>
          <span className="titleIntroit introitText">
            Our mission at EnvireTech is to help you focus in your field by
            realizing and supervising your projects with our experts from all
            over the world. <br /> At EnvireTech we offer IT services and
            solutions for building an efficient IT infrastructure, data centers,
            offices or any kind of workplaces. <br /> EnvireTech's team works
            around the clock to provide you with end-to-end services for the
            efficient and effective implementation of your project, so your
            claims can be completed on time and within budget. Our head office
            is in Hungary and together with our partners in the Netherlands,
            Australia, Germany and Great Britain we can also serve you Globally.
            EnvireTech's team works around the clock to provide you with
            end-to-end services for the efficient and effective implementation
            of your project, so your claims can be completed on time and within
            budget.
          </span>
          <div className="buttonWebsite">
            <Button className="buttonComponent" title="SEE MORE" />
          </div>
        </div>
        <div className="onlineShope-img">
          <img src="./images/home2.png" alt="Group303" />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Button from "../button/Button";

export default function Ghasedak() {
  return (
    <div className="OnlineShope StylishApp">
      <h3 className="title-onlineShope-mobile">Radio Ghasedak</h3>
      <div className="onlineShope-img">
        <img src="./images/G10303.png" alt="Frame102" />
      </div>
      <div className="onlineShope-text">
        <h3 className="title-onlineShope-laptop">Radio Ghasedak</h3>
        <span>
          Our mission at EnvireTech is to help you focus in your field by
          realizing and supervising your projects with our experts from all over
          the world. <br /> At EnvireTech we offer IT services and solutions for
          building an efficient IT infrastructure, data centers, offices or any
          kind of workplaces. EnvireTech's team works around the clock to
          provide you with end-to-end services for the efficient and effective
          implementation of your project <br /> EnvireTech's team works around
          the clock to provide you with end-to-end services for the efficient
          and effective implementation of your project, so your claims can be
          completed on time and within budget.
        </span>
        <div className="buttonWebsite">
          <Button className="buttonComponent" title="SEE MORE" />
        </div>
      </div>
    </div>
  );
}

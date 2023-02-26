import React from 'react';
import './stylish.css';

export default function StylishApp() {
  return (
    <div className="OnlineShope StylishApp">
      <h3 className="title-onlineShope-mobile">Stylish shop app</h3>
      <div className="onlineShope-img stylishImg">
        <img src="./images/photo60.svg" alt="Frame102" />
      </div>
      <div className="onlineShope-text">
        <h3 className="title-onlineShope-laptop">Stylish shop app</h3>
        <span>
          Our mission at EnvireTech is to help you focus in your field by
          realizing and supervising your projects with our experts from all over
          the world. At EnvireTech we offer IT services and solutions for
          building an efficient IT infrastructure, data centers, offices or any
          kind of workplaces. <br /> EnvireTech's team works around the clock to
          provide you with end-to-end services for the efficient and effective
          implementation of your project, so your claims can be completed on
          time and within budget. Our head office is in Hungary and together
          with our partners in the Netherlands, Australia, Germany and Great
          Britain we can also serve you Globally. <br /> EnvireTech's team works around
          the clock to provide you with end-to-end services for the efficient
          and effective implementation of your project, so your claims can be
          completed on time and within budget.
        </span>
        <div className="buttonWebsite">
          <img
            src="./images/197.svg"
            alt="buttonWeb"
            className="buttonWeb"
          />
        </div>
      </div>
    </div>
  )
}

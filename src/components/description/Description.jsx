import React from "react";
import "./description.css";

export default function Description() {
  return (
    <div className="description">
      <div className="description-img">
        <img src="./image/54547 1.svg" />
      </div>
      <div className="description-texts">
        <h4>What can we do for you at BEYOND IT ?</h4>
        <p>
          Our mission at EnvireTech is to help you focus in your field by
          realizing and supervising your projects with our experts from all over
          the world. At EnvireTech we offer IT services and solutions for
          building an efficient IT infrastructure, data centers, offices or any
          kind of workplaces.<br></br>
          EnvireTech's team works around the clock to provide you with
          end-to-end services for the efficient and effective implementation of
          your project, so your claims can be completed on time and within
          budget. Our head office is in Hungary and together with our partners
          in the Netherlands, Australia, Germany and Great Britain we can also
          serve you Globally.<br></br>
          EnvireTech's team works around the clock to provide you with
          end-to-end services for the efficient and effective implementation of
          your project, so your claims can be completed on time and within
          budget.
        </p>
        <p className="texts-p">
          We are always ready to respond to your needs and you can contact us
          through the links below
        </p>
        <div className="information">
          <div>Phone: +1234568</div>
          <div>E-mail: +1234568</div>
          <div className="information-other">Other: +1234568</div>
        </div>
      </div>
    </div>
  );
}

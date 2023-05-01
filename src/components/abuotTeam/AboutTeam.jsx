import React from "react";
import "./aboutTeam.css";

export default function AboutTeam() {
  return (
    <div className="about-Team">
      <div className="about-team-mobile">
        <h3>
          About BEYOND <span>IT</span> team
        </h3>
        <img src="./images/team-mobile.svg" alt="Frame102" />
      </div>
      <div className="about-team-desktop">
        <img src="./images/about-teams.svg" alt="Frame102" />
      </div>
      <div className="onlineShope-text onlineText" id="about-text">
        <h3 className="about-team-text">
          About BEYOND <span>IT</span> team
        </h3>
        <span>
          We started our activities in 2021 with the belief that a customer can
          be a true friend and partner. Our motto is "We consider our customers
          as friends and partners, and we do our best to satisfy them."
          <br />
          We aim to provide high-quality services and create a unique experience
          for our customers. To achieve this goal, we try to be distinguished in
          providing services with our expertise and experience. Furthermore, we
          always consider excellent customer support and after-sales services as
          a necessity.
          <br />
          In providing our services to customers, we use advanced technologies
          and innovative methods, and strive to provide the best solutions to
          our customers. With this approach, we are taking steps towards
          achieving our goals and mission, including customer satisfaction,
          growth, and further development.
          <br />
          Finally, we take pride in being a reliable and effective partner for
          our customers and have reached a mutually beneficial relationship.
          Trust us, and we will provide you with the best services.
        </span>
      </div>
    </div>
  );
}

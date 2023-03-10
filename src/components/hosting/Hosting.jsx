import React from "react";
import "./hosting.css";
import Button from "../button/Button"

export default function Hosting() {
  return (
    <div className="hosting">
      <div className="text-hosting">
        <h3>Hosting</h3>
        <img
          src="./images/hosting-mobile.svg"
          alt="ui"
          className="image-hosting-top"
        />
        <p className="text-hosting-p1">
          Providing all kinds of Linux and Windows hosting Hosting
          <br /> offers from different countries Money back guarantee Providing
          all services with the highest security Real-time monitoring and daily
          backup Providing 24-hour support services (online chat, phone, ticket)
          <br /> Expand your business in the virtual world. With this service,
          you will be able to create all kinds of personal and organizational
          sites, portals, online stores, etc., suitable for any budget. With the
          help of WordPress hosting service, you can easily get the best
          performance from all desired templates and plugins in the shortest
          time and with the least technical knowledge.
        </p>
        <p className="text-hosting-p2">
          At EnvireTech we provide IT Services and Solutions for Data Centers,
          Offices or any workplaces that allows building an efficient IT
          Infrastructure. Our head office is in Buudapest, and with offices in
          Netherlands, Australia, Germany and United Kingdom. we assist clients
          all across Europe, Australia, Middle East and Asia.
          <br />
          EnvireTech team works effortless 24/7 hours to provide our clients
          with end to end services for efficient and effective implementation of
          their project so that they could run their project on time and within
          the budget.
        </p>
        <div className="button-design">
        <Button className="buttonComponent" title = "ORDER" />
        </div>
      </div>
      <div className="image-design" id="image-hosting">
        <img src="./images/hosting.svg" alt="ui" />
      </div>
    </div>
  );
}

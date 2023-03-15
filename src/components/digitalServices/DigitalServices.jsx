import React from "react";
import "./digitalServices.css";
import { Link } from "react-router-dom";

export default function DigitalServices() {
  return (
    <div className="marketing">
      <div className="text-design" id="text-marketing">
        <div className="image-design" id="image-marketing-mobile">
          <img src="./images/Groups.png" alt="ui" id="image-marketing" />
        </div>
        <h3>Digital Marketing</h3>
        <p>
          <ul>
            <li>Developing a digital marketing strategy</li>
            <li>Development of advertising campaign</li>
            <li>Content production</li>
            <li>Marketing in social networks</li>
            <li>Site optimization SEO</li>
          </ul>
          It is a fact of life that we live in a technology dependent world
          where we connect to the internet to answer any question or fulfill our
          needs. Over the past decade, digital marketing has become a critical
          component of an organization's overall marketing strategy. This is
          because it allows companies to target and accurately place their
          products in front of an audience who are likely to be interested in
          their products and are part of their target audience.. There are other
          important reasons for the pandemic. Digital marketing is effective and
          we will examine each of them below. Digital marketing includes a wide
          range of marketing tactics and technologies used to connect with
          potential customers and keep current customers warm. In the{" "}
          <span className="beond-span" id="beond-white">
            BEOND <img src="./images/Subtract (2).svg" alt="Subtract" />
          </span>
          team, experts can give advice and guidance to Shaka
        </p>
        <div className="button-design" id="button-marketing">
          <Link to="/SendOrder">
            <img src="./images/button-marketing.svg" alt="button" />
          </Link>
        </div>
      </div>
      <div className="image-design" id="image-marketing-desktop">
        <img src="./images/Groups.png" alt="ui" id="image-marketing" />
      </div>
    </div>
  );
}

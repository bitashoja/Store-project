import React from "react";
import "./getToAbout.css";

export default function GetToAbout() {
  return (
    <div className="get-about">
      <div className="get-about-mobile">
        <h3>Get to know the services of Beyond IT company</h3>
        <img src="./images/about-mobile.svg" alt="about" />
      </div>
      <div className="get-about-desktop">
        <div className="get-about-img">
          <img src="./images/about-service.svg" alt="about" />
        </div>
        <div className="get-about-text">
          <h3>Get to know the services of Beyond IT company</h3>
          <div className="about-service-company">
            <h5>Web design</h5>
            <span>
              With the advancement of technology, having a website has become a
              must for a company, and we will prepare the best websites for you
              with precise engineering. All kinds of store, corporate, personal
              and news sites, etc. for the biggest companies are only a part of
              our activity during this period. Building different types of sites
              with different programming languages and common market CMSs shows
              the strength and high expertise of the Beyond IT team.
            </span>
          </div>
          <div className="about-service-company">
            <h5>Portal design</h5>
            <span>
              Having a comprehensive and customized system for specific
              businesses and organizations while being efficient is our
              specialty. Organizational, corporate, store, etc. portals with the
              highest quality and the most productivity are among the most
              important specialties of Beyond IT.
            </span>
          </div>
          <div className="about-service-company">
            <h5>Application design</h5>
            <span>
              Designing an application for all types of phones with the latest
              technologies for all businesses and all trades is difficult and we
              have made it easy.
            </span>
          </div>
          <div className="about-service-company">
            <h5>Digital marketing</h5>
            <span>
              Perform digital marketing services to improve internet sales with
              the best and most efficient ideas and at the same time ask for the
              best and most economical prices from Beyond IT. Years of efforts
              in the field of digital marketing and cooperation with many brands
              have increased the experience and provided better services to our
              customers.
            </span>
          </div>
          <div className="about-service-company">
            <h5>SEO and content creation</h5>
            <span>
              Feel free to leave your site SEO to us. This is not just a slogan,
              but we have been trying for years to try all the safe and
              short-term ways to provide our customers with 0-100 SEO services
              remotely along with detailed reports. Also, Seo Code is one of the
              first content production factories in Iran, which can provide any
              amount of content in a completely unique and user-friendly way.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

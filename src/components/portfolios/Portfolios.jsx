/* eslint-disable jsx-a11y/anchor-is-valid */
import "./portfolios.css";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

function PortfoliosMobile() {
  return (
    <div className="portfolio-mobile-container">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        <SwiperSlide>
          <a href="#" className="portfolio-image">
            <img src="./images/image1.png" alt="menu" />
            <div className="box-portfolios-mobile">
              <h3>Portfolio name</h3>
              <span>
                We start where the others stop, detecting problems before they
                before arisedetecting problems before they arise...
              </span>
              <Link to="/Portfolio">
                <button>See more ...</button>
              </Link>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="portfolio-image images-portfolio">
            <img src="./images/Frame102.png" alt="menu" />
            <div className="box-portfolios-mobile">
              <h3>Portfolio name</h3>
              <span>
                We start where the others stop, detecting problems before they
                before arisedetecting problems before they arise...
              </span>
              <Link to="/Portfolio">
                <button>See more ...</button>
              </Link>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="portfolio-image">
            <img src="./images/image3.png" alt="menu" />
            <div className="box-portfolios-mobile">
              <h3>Portfolio name</h3>
              <span>
                We start where the others stop, detecting problems before they
                before arisedetecting problems before they arise...
              </span>
              <Link to="/Portfolio">
                <button>See more ...</button>
              </Link>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="portfolio-image">
            <img src="./images/image4.png" alt="menu" />
            <div className="box-portfolios-mobile">
              <h3>Portfolio name</h3>
              <span>
                We start where the others stop, detecting problems before they
                before arisedetecting problems before they arise...
              </span>
              <Link to="/Portfolio">
                <button>See more ...</button>
              </Link>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="portfolio-image">
            <img src="./images/image5.png" alt="menu" />
            <div className="box-portfolios-mobile">
              <h3>Portfolio name</h3>
              <span>
                We start where the others stop, detecting problems before they
                before arisedetecting problems before they arise...
              </span>
              <Link to="/Portfolio">
                <button>See more ...</button>
              </Link>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#" className="portfolio-image">
            <img
              src="./images/image6.png"
              className="menu-mobile"
              alt="menu mobile"
            />
            <div className="box-portfolios-mobile">
              <h3>Portfolio name</h3>
              <span>
                We start where the others stop, detecting problems before they
                before arisedetecting problems before they arise...
              </span>
              <Link to="/Portfolio">
                <button>See more ...</button>
              </Link>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

function PortfoliosDesktop() {
  return (
    <div className="portfolios">
      <h4>
        Some of our <span>portfolios</span>
      </h4>
      <div className="portfolios-images">
        <a href="#" className="portfolio-image-desktop">
          <img src="./images/image1.png" alt="menu" />
          <div className="box-portfolios">
            <h3>Portfolio name</h3>
            <span>
              We start where the others stop, detecting problems before they
              before arisedetecting problems before they arise...
            </span>
            <Link to="/Portfolio">
              <button>See more ...</button>
            </Link>
          </div>
        </a>
        <a href="#" className="portfolio-image-desktop">
          <img src="./images/Frame102.png" alt="menu" />
          <div className="box-portfolios">
            <h3>Portfolio name</h3>
            <span>
              We start where the others stop, detecting problems before they
              before arisedetecting problems before they arise...
            </span>
            <Link to="/Portfolio">
              <button>See more ...</button>
            </Link>
          </div>
        </a>
        <a href="#" className="portfolio-image-desktop">
          <img src="./images/image3.png" alt="menu" />
          <div className="box-portfolios">
            <h3>Portfolio name</h3>
            <span>
              We start where the others stop, detecting problems before they
              before arisedetecting problems before they arise...
            </span>
            <Link to="/Portfolio">
              <button>See more ...</button>
            </Link>
          </div>
        </a>
        <a href="#" className="portfolio-image-desktop">
          <img src="./images/image4.png" alt="menu" />
          <div className="box-portfolios">
            <h3>Portfolio name</h3>
            <span>
              We start where the others stop, detecting problems before they
              before arisedetecting problems before they arise...
            </span>
            <Link to="/Portfolio">
              <button>See more ...</button>
            </Link>
          </div>
        </a>
        <a href="#" className="portfolio-image-desktop">
          <img src="./images/image5.png" alt="menu" />
          <div className="box-portfolios">
            <h3>Portfolio name</h3>
            <span>
              We start where the others stop, detecting problems before they
              before arisedetecting problems before they arise...
            </span>
            <Link to="/Portfolio">
              <button>See more ...</button>
            </Link>
          </div>
        </a>
        <a href="#" className="portfolio-image-desktop">
          <img
            src="./images/image6.png"
            className="menu-mobiles"
            alt="menu mobile"
          />
          <div className="box-portfolios">
            <h3>Portfolio name</h3>
            <span>
              We start where the others stop, detecting problems before they
              before arisedetecting problems before they arise...
            </span>
            <Link to="/Portfolio">
              <button>See more ...</button>
            </Link>
          </div>
        </a>
      </div>
      <div className="more">see more ...</div>
    </div>
  );
}

// true if mobile, false if desktop
const getIsMobile = () => {
  const userAgent = navigator.userAgent;
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      userAgent,
    );
  const screenWidth = window.innerWidth;
  const isNarrowScreen = screenWidth < 768; // Adjust this number as needed
  return isMobile || isNarrowScreen;
};

export default function Portfolios() {
  const [isMobile, setMobile] = useState();

  useEffect(() => {
    setMobile(getIsMobile());
    const listener = window.addEventListener(
      "resize",
      function () {
        setMobile(getIsMobile());
      },
      true,
    );
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  if (isMobile) return <PortfoliosMobile />;

  return <PortfoliosDesktop />;
}

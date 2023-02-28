/* eslint-disable jsx-a11y/anchor-is-valid */
import "./portfolios.css";
import React, { useState, useEffect } from "react";
 import { Swiper, SwiperSlide } from "swiper/react";
 import "swiper/css";

function PortfoliosMobile() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a href="#">
            <img src="./images/image1.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="./images/image2.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="./images/image1.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="./images/image2.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="./images/image3.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="./images/image4.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img src="./image/image5.png" alt="menu" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="#">
            <img
              src="./images/image6.png"
              className="menu-mobile"
              alt="menu mobile"
            />
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
        <a href="#">
          <img src="./images/image1.png" alt="menu" />
        </a>
        <a href="#">
          <img src="./images/image2.png" alt="menu" />
        </a>
        <a href="#">
          <img src="./images/image3.png" alt="menu" />
        </a>
        <a href="#">
          <img src="./images/image4.png" alt="menu" />
        </a>
        <a href="#">
          <img src="./images/image5.png" alt="menu" />
        </a>
        <a href="#">
          <img
            src="./images/image6.png"
            className="menu-mobiles"
            alt="menu mobile"
          />
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
      userAgent
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
      true
    );
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  if (isMobile) return <PortfoliosMobile />;

  return <PortfoliosDesktop />;
}

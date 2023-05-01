import React from 'react'
import './description.css'

export default function Description() {
  return (
    <div className="description">
      <h4 className="description-text">
        What can we do for you at BEYOND IT ?
      </h4>
      <div className="description-img">
        <img
          src="./images/mobile-description.png"
          className="description-mobile"
          alt="description mobile "
        />
      </div>
      <div className="description-texts">
        <h4>What can we do for you at BEYOND IT ?</h4>
        <p>
          Beyond IT is a comprehensive IT service provider that offers a range
          of services including website design, graphic design, mobile app
          development, digital marketing, domain registration, and hosting. Our
          team of experienced professionals is dedicated to providing our
          clients with high-quality, customized solutions that meet their
          specific needs.
        </p>
        <p className="texts-p">
          We understand that each client has unique requirements and we work
          closely with them to develop a tailored approach that achieves their
          goals. Our website design services create engaging and responsive
          websites that reflect our clients' brand identity and vision. Our
          graphic design team is skilled in creating eye-catching visuals for a
          range of marketing materials. <br /> <br />
           Our mobile app development team creates
          intuitive and user-friendly apps that enhance our clients' online
          presence. Our digital marketing services include SEO, social media
          marketing, and email marketing, which help our clients reach their
          target audience and increase their online visibility. We also provide
          domain registration and hosting services to ensure our clients'
          websites are secure and running smoothly. <br /> <br />
           At Beyond IT, we are
          committed to providing exceptional customer service and building
          long-lasting relationships with our clients. Contact us today to learn
          how we can help take your business to the next level.
        </p>
        
      </div>
    </div>
  )
}

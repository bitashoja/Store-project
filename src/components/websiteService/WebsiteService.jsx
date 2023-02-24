import React from 'react'
import './websiteService.css'

export default function WebsiteService() {
  return (
    <div className="website-Service">
      <h3 className="title-website">Website development</h3>
      <div className="website-image">
        <img
          src="./images/digital.svg"
          alt="Digital"
          className="Digital-laptop"
        />
        <img src="./images/websiteLaptop.png" alt="websiteLaptop" className='websiteLaptop'/>
      </div>
      <div className="website-text">
        <h3 className="website-title-laptop">Website development </h3>
        <div className="website-img-text">
        <span className="website-text-title">
          Dedicated website and application design with
        </span>
        <div className="beondDiv">
          <span className="beond">BEOND</span>
          <img src="./images/Subtract.svg" alt="Subtract" />
        </div>
        </div>
        <span className="website-text-text">
          BEONDIT consists of developers specializing in the fields of website
          design, smart application design, logo design and website SEO in an
          effort to provide its services to its customers and audiences in the
          best possible way along with modern technologies. The specialized
          services of this collection are listed below, we hope to see the best
          services offered to you. <b>Java , JavaScript, #C, Python,
          PHP, C++, Scala, netscape, Nodejs, React, React Native, HTML and CSS,
          WordPress </b> . we do
        </span>
        <div className="buttonWebsite">
          <img src="./images/buttonWeb.svg" alt="buttonWeb" className="buttonWeb"/>
        </div>
      </div>
    </div>
  )
}

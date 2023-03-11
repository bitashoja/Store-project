import React from 'react'
import './domainsService.css';
import Button from "../button/Button";

export default function DomainsService() {
  return (
    <div className="DomainsService">
      <h3 className="mobileApp-title">Domains</h3>
      <div className="DomainsService-img">
        <img src="./images/511.png" alt="Graphic Design" />
      </div>
      <div className="DomainsService-text">
      <h3 className="mobileApp-title2 website-title-laptop">Graphic Design</h3>
        <span className="website-text-text">
          With the expansion of graphic software and digital tools, many graphic
          works have been created and have had a great impact on those
          interested. Graphic designers can start creating images and graphic
          designs by using graphic software. Usually, graphic activities It
          includes: editing images, creating animations, advertising posters,
          brochures, magazines, billboard design, motion graphics, graphic
          videos, advertising teasers, animations, user interface design,
          educational video production, etc. <br /> We can provide you these services
          with the best up-to-date standards in the world <br /> Some graphic services
          of the <span className='Beyond'>Beyond <img src="./images/Subtract.svg" alt="Subtract" /> </span> team:<br /> Logo design services ,catalog design ,brochure
          design ,Special cut business card design ,Design Office ,Multimedia
          services ,CD cover design ,character design ,banner design ,Website
          graphic design ,Poster design ,Again the logo, logo and mark Graphical
          user interface design Packaging design services ,Design of hanger,
          shelf tucker and bunting ,Tract design ,Designing advertising stands
          ,Car body design , Securities and stamp design ,Gift paper design
          ,Shopping bag design
        </span>
        <div className="buttonWebsite">
        <Button className="buttonComponent" title = "ORDER" />
        </div>
      </div>
    </div>
  )
}

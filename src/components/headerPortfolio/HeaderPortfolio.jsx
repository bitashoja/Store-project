import React from 'react'
import Header from '../header/Header'
import './headerPortfolio.css'

export default function HeaderPortfolio() {
  return (
    <div className="HeaderPortfolio">
      <Header />
      <div className="box-headerPortfolio">
        <div className="headerPortfolio-img">
          <img
            src="./images/Frame10.svg"
            alt="Frame10"
            className="header-portfolio-img"
          />
        </div>
        <div className="headerPortfolio-text">
          <div className="heading-text-portfolio">
          <h3 className="title-header-portfolio">Portfolio</h3>
          <span className="text-header-portfolio">
            You can see some examples of our works below, which are done based
            on the needs of the customers and the capabilities of the BEOND IT
            team.
          </span>
          </div>
          <div className="button-header-portfolio">
            <div className="button-numberPhone-portfolio">
              <img src="./images/phoneNumber.svg" alt="phoneNumber" />
            </div>
            <div className="button-email-portfolio">
              <img src="./images/email.svg" alt="email" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

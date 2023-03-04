import React from 'react';
import './headerTerms.css';
import Header from '../Header/Header';

export default function HeaderTerms() {
  return (
    <div className="HeaderPortfolio">
    <Header />
    <div className="box-headerPortfolio">
      <div className="headerPortfolio-img headerTerms-img">
        <img
          src="./images/G935.svg"
          alt="Frame10"
          className="header-portfolio-img box-img-terms"
        />
      </div>
      <div className="headerPortfolio-text headerTerms-text">
        <div className="heading-text-portfolio">
        <h3 className="title-header-portfolio">Terms & Conditions</h3>
        <span className="text-header-portfolio">
        Last updated: 19 Jan, 2022
        </span>
        </div>
        
      </div>
    </div>
  </div>
  )
}

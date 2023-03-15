import React from 'react'
import Header from '../Header/HeaderComponent'
import './headerContainer.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import { RxEnvelopeClosed } from 'react-icons/rx'
import { Link } from 'react-router-dom'

export default function HeaderContainer() {
  return (
    <>
      <div className="header-container">
        <Header />
        <div className="headerBox">
          <div className="headerBoxImg">
            <img src="./images/Group10300.svg" alt="laptop" />
          </div>
          <div className="headerBoxText-home">
            <h3>
              Software <br /> Development
            </h3>
            <p>Do you like sensitive and difficult work?</p>
            <p>
              Beyond IT provides you with the best quality website design
              services by expert and experienced people.
            </p>

            <div className="button-header-portfolio button-headerContainer">
              <div className="button-numberPhone-portfolio">
                <button className="button-number-headerContainer button-phone-portfolio">
                  <BsTelephoneFill />  
                  <IoIosArrowForward />
                  +1(818)930-4747
                </button>
              </div>
              <div className="button-email-portfolio">
                <button className="button-headerContainer-send button-email-portfolio">
               <Link to="/SendOrder" className='linkHeaderPortfolio'>
                  <img src="../images/path73.svg" alt="path73"  className="envelope"/>
                  <IoIosArrowForward />
                  <span>SEND ORDER</span>
               </Link> 
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

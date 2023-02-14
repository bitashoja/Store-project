import React from 'react'
import Header from '../Header/header'
import './headerContainer.css'

export default function Headercontainer() {
  return (
    <div className="header-container">
      <Header />
      <div className="headerBox">
        <div className="headerBoxImg">
          <img src="./image/labtop.svg" />
        </div>
        <div className="headerBoxText">
          <h3>
            Software <br /> Development
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore in
            sapiente quam deserunt eum veritatis fugiat doloremque.
          </p>
          <div className='headerBoxButton'>
            <img src="./image/buttonPhone.svg" className='buttonPhone'/>
            <img src='./image/emailPhone.svg' className='emailPhone'/>
          </div>
        </div>
      </div>
    </div>
  )
}

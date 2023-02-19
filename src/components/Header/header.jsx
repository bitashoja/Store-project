import React from 'react'
import './header.css'

export default function header() {
  return (
    <div className="header">
      <div>
        <img
          src="./images/Group 10249.svg"
          className="menu-laptop"
          alt="menu laptop"
        />
        <img
          src="./images/menu.svg"
          className="menu-mobile"
          alt="menu mobile"
        />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Services </li>
          <li>Portfolio</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <img src="./images/Group 10249.svg" className="menu-laptop2" alt='menu laptop'/>
      </div>
      <div>
        <img src="./images/buttonPhone2.svg" className="phone-laptop" alt='phone laptop'/>
        <img src="./images/phone.svg" className="phone-mobile" alt='phone mobile'/>
      </div>
    </div>
  )
}

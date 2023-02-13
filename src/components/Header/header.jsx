import React from 'react';
import './header.css'

export default function header() {
  return (
    <div className='header'>
      <div>
        <img src='./image/Group 10249.svg' className='menu-laptop' alt='menu laptop'/>
        <img src="./image/menu.svg" className='menu-mobali'  alt='menu mobile'/>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>Services </li>
          <li>Portfolio</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
        <img src='./image/Group 10249.svg' className='menu-laptop2'/>
      </div>
      <div>
      <img src='./image/Frame 9725.svg' className='phone-laptop'/>
      <img src='./image/phone.svg' className='phone-mobali'/>
      </div>
    </div>
  )
}

import React from 'react';
import './service.css';
import ServiceIcon from '../serviceIcon/ServiceIcon';


export default function Service() {
  return (
    <div className="service">
    <div className='serviceP'>
        <h3>Some of our services</h3>
        <p>
          Team consists of professional and experienced consultants,
          technicians, engineers, designers and solution architects who work
          with you to find the best possible solution for your IT environment.
        </p>
    </div>
    <ServiceIcon />
    </div>
  )
}

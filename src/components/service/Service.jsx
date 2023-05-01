import React from 'react'
import ServiceIcon from '../serviceIcon/ServiceIcon'
import './service.css'

export default function Service() {
  return (
    <div className="service">
      <div className="serviceP">
        <h3>Some of our services</h3>
        <p>
          With a wide range of services including website design, graphic
          design, mobile app development, hosting services , domain
          registration, and digital marketing, we at Beyond IT can help you
          enhance your online presence in the best possible way.
        </p>
      </div>
      <ServiceIcon />
    </div>
  )
}

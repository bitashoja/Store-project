import React from 'react'
import './networkServices.css'

export default function NetworkServices() {
  return (
    <div className="NetworkService">
      <h3 className="mobileApp-title">Network services</h3>
      <div className="NetworkService-img">
        <img src="./images/Group11.png" alt="Union" className="Union" />
        <img src="./images/Group10.png" alt="Union2" className="Union2" />
      </div>
      <div className="NetworkService-text">
      <h3 className="mobileApp-title2">Network services</h3>
        <span>
          Network services are network applications, functions, and services
          that companies outsource to be managed, monitored, and maintained
          remotely by a network support team. The implementation of network
          infrastructure, from the initial wiring to the installation of servers
          and computers, as well as the configuration of existing hardware and
          even support after the network is set up, are all included in network
          services. Beyond network access, a wide range of network services are
          available, including WAN optimization, unified messaging, network
          management, managed security firewalls, virtual private networks (VPN)
          (VPS), and much more.
        </span>
        <div className="buttonWebsite">
          <img src="./images/buttonWeb.svg" alt="buttonWeb" className="buttonWeb"/>
        </div>
      </div>
    </div>
  )
}

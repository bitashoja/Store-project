import React from 'react'
import './ServiceBox.css'
import { Link } from 'react-router-dom'

export default function ServicesBox({ src, title }) {
  return (
    <div className="box">
      <div className="box-img">
        <img src={src} alt="ServicesBox" />
      </div>
      <p className="paraBox">{title}</p>
      <span className="box-text">
        Most of the IT projects demand the deployment of their key developer’s
        onsite at the client’s location followed by their deployment at the ....
      </span>
      <Link to="/Portfolio">
        <button className="seeMore">SEE MORE</button>
      </Link>
    </div>
  )
}

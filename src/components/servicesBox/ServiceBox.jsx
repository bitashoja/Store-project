import React from "react";
import "./ServiceBox.css";
import { Link } from "react-router-dom";
import ShinyCard from "../ShinyCard/ShinyCard";

export default function ServicesBox({ src, title , text }) {
  return (
    <ShinyCard>
      <div className="box">
        <div className="box-img">
          <img src={src} alt="ServicesBox" />
        </div>
        <p className="paraBox">{title}</p>
        <span className="box-text">
          { text }
        </span>
        <Link to="/Portfolio">
          <button className="seeMore">SEE MORE</button>
        </Link>
      </div>
    </ShinyCard>
  );
}

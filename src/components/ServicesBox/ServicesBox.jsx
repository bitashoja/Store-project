import React from "react";
import "./serivesBox.css";

export default function ServicesBox({ src, title }) {
  return (
    <div className="box">
      <div className="box-img">
        <img src={src} />
      </div>
      <p className="paraBox">{title}</p>
      <span className="box-text">
        Most of the IT projects demand the deployment of their key developer’s
        onsite at the client’s location followed by their deployment at the
        offsho ....
      </span>
      <button>SEE MORE</button>
    </div>
  );
}

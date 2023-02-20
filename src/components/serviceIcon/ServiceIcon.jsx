import React from 'react';
import ServicesBox from '../ServicesBox/ServicesBox';

const serivesIcon = [
    { id: 1, src: "./images/Union.svg", title: "Websites" },
    { id: 2, src: "./images/Union(1).svg", title: "Graphic Design" },
    { id: 3, src: "./images/Union(2).svg", title: "Mobile Apps" },
    { id: 4, src: "./images/Union(3).svg", title: "Digital Marketing" },
    { id: 5, src: "./images/Union(4).svg", title: "Domains" },
    { id: 6, src: "./images/Union(5).svg", title: "Hosting" },
  ];

export default function SerivesIcon() {
  return (
    
    <div className="serivesBox">
           {serivesIcon.map((serive) => (
             <ServicesBox {...serive} key={serive.id} />
          ))} 
        </div>
  )
}

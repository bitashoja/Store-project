import React from "react";
import ServiceBox from "../servicesBox/ServiceBox";
import Box from "../Box/Box";

const serviceIcon = [
  { id: 1, src: "./images/Union.svg", title: "Websites" },
  { id: 2, src: "./images/Union(1).svg", title: "Graphic Design" },
  { id: 3, src: "./images/Union(2).svg", title: "Mobile Apps" },
  { id: 4, src: "./images/Union(3).svg", title: "Digital Marketing" },
  { id: 5, src: "./images/Union(4).svg", title: "Domains" },
  { id: 6, src: "./images/Union(5).svg", title: "Hosting" },
];

export default function ServiceIcon() {
  return (
    <Box isMiddleColumn>
      <div className="serviceBox">
        {serviceIcon.map((service) => (
          <ServiceBox {...service} key={service.id} />
        ))}
      </div>
    </Box>
  );
}

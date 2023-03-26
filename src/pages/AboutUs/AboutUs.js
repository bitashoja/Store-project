import React from "react";
import HeaderAbout from "../../components/headerAbout/HeaderAbout";
import AboutTeam from "../../components/abuotTeam/AboutTeam";
import GetToAbout from "../../components/getToAbout/GetToAbout";
import Box from "../../components/Box/Box";

export default function AboutUs() {
  return (
    <div>
      <HeaderAbout />
      <Box>
        <AboutTeam />
      </Box>
      <GetToAbout />
    </div>
  );
}

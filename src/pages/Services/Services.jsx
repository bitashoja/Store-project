import "./Services.css";
import React from "react";
import HeaderServices from "../../components/HeaderServices/HeaderServices";
import WebsiteService from "../../components/websiteService/WebsiteService";
import Design from "../../components/uIUX Design/Design";
import MobileApps from "../../components/mobileApps/MobileApps";
import Hosting from "../../components/hosting/Hosting";
import NetworkServices from "../../components/networkServices/NetworkServices";
import DigitalServices from "../../components/digitalServices/DigitalServices";
import DomainsService from "../../components/domainsService/DomainsService";

export default function Services() {
  return (
    <div>
      <HeaderServices />
      <WebsiteService />
      <Design />
      <MobileApps />
      <Hosting />
      <NetworkServices />
      <DigitalServices />
      <DomainsService />
    </div>
  );
}

import "./home.css";
 import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Description from "../../components/description/Description";
import Portfolios from "../../components/portfolios/Portfolios";
import Service from "../../components/service/Service";
import Client from "../../components/client/Client";
import Footer from "../../components/footer/Footer";
import ServiceIcon from "../../components/serviceIcon/ServiceIcon";



export default function Home() {
  return (
    <div className="container">
        <HeaderContainer /> 
        <Description />
      <div className="service">
        <Service />
        < ServiceIcon />
      </div>
        <Portfolios />
        <Client />
        <Footer />
    </div>
  );
}

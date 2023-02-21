import "./home.css";
 import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Description from "../../components/description/Description";
import Portfolios from "../../components/portfolios/Portfolios";
import Service from "../../components/service/Service";
import Client from "../../components/client/Client";
import Footer from "../../components/footer/Footer";




export default function Home() {
  return (
    <div className="container">
        <HeaderContainer /> 
        <Description />
        <Service />
        <Portfolios />
        <Client />
        <Footer />
    </div>
  );
}

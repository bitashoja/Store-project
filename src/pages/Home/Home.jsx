import "./home.css";
 import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Description from "../../components/description/Description";
import ServicesBox from '../../components/ServicesBox/ServicesBox';
import Portfolios from "../../components/portfolios/Portfolios";
import Service from "../../components/service/Service";
import Client from "../../components/client/Client";
import Footer from "../../components/footer/Footer";


const serivesIcon = [
  { id: 1, src: "./images/Union.svg", title: "Websites" },
  { id: 2, src: "./images/Union(1).svg", title: "Graphic Design" },
  { id: 3, src: "./images/Union(2).svg", title: "Mobile Apps" },
  { id: 4, src: "./images/Union(3).svg", title: "Digital Marketing" },
  { id: 5, src: "./images/Union(4).svg", title: "Domains" },
  { id: 6, src: "./images/Union(5).svg", title: "Hosting" },
];

export default function Home() {
  return (
    <div className="container">
        <HeaderContainer /> 
        <Description />
      <div className="service">
        <Service />
        <div className="serivesBox">
           {serivesIcon.map((serive) => (
             <ServicesBox {...serive} key={serive.id} />
          ))} 
        </div>
      </div>
        <Portfolios />
        <Client />
        <Footer />
    </div>
  );
}

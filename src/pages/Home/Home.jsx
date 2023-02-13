import "./home.css";
 import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Description from "../../components/description/Description";
import ServicesBox from '../../components/ServicesBox/ServicesBox';
import Portfolios from "../../components/portfolios/Portfolios";


const serivesIcon = [
  { id: 1, src: "./image/Union.svg", title: "Websites" },
  { id: 2, src: "./image/Union(1).svg", title: "Graphic Design" },
  { id: 3, src: "./image/Union(2).svg", title: "Mobile Apps" },
  { id: 4, src: "./image/Union(3).svg", title: "Digital Marketing" },
  { id: 5, src: "./image/Union(4).svg", title: "Domains" },
  { id: 6, src: "./image/Union(5).svg", title: "Hosting" },
];

export default function Home() {
  return (
    <div className="container">
        <HeaderContainer /> 
        <Description />
      <div className="service">
        <h3>Some of our services</h3>
        <p>
          Team consists of professional and experienced consultants,
          technicians, engineers, designers and solution architects who work
          with you to find the best possible solution for your IT environment.
        </p>

        <div className="serivesBox">
           {serivesIcon.map((serive) => (
             <ServicesBox {...serive} key={serive.id} />
          ))} 
        </div>
      </div>
        <Portfolios />
    </div>
  );
}

import "./home.css";
import HeaderContainer from "../../components/HeaderContainer/HeaderContainer";
import Description from "../../components/description/Description";
import Portfolio from "../../components/portfolios/Portfolios";
import Service from "../../components/service/Service";
import Client from "../../components/client/Client";

export default function Home() {
  return (
    <div>
      <HeaderContainer />
      <Description />
      <Service />
      <Portfolio />
      <Client />
    </div>
  );
}

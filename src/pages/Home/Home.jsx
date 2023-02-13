import "./home.css";
// import HeaderContainer from "../components/HeaderContainer/HeaderContainer";
// import ServicesBox from "../components/ServicesBox/ServicesBox";

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
      {/* <HeaderContainer /> */}
      <div className="description">
        <div className="desc-img">
          <div className="desc-img-circle">
            <img src="./image/mobail.svg" />
          </div>
        </div>
        <div className="desc-text">
          <h4>What can we do for you at BEYOND IT ?</h4>
          <p>
            Our mission at EnvireTech is to help you focus in your field by
            realizing and supervising your projects with our experts from all
            over the world. At EnvireTech we offer IT services and solutions for
            building an efficient IT infrastructure, data centers, offices or
            any kind of workplaces. EnvireTech's team works around the clock to
            provide you with end-to-end services for the efficient and effective
            implementation of your project, so your claims can be completed on
            time and within budget. Our head office is in Hungary and together
            with our partners in the Netherlands, Australia, Germany and Great
            Britain we can also serve you Globally. EnvireTech's team works
            around the clock to provide you with end-to-end services for the
            efficient and effective implementation of your project, so your
            claims can be completed on time and within budget.
          </p>
          <p className="desc-text-2">
            We are always ready to respond to your needs and you can contact us
            through the links below
          </p>
          <div className="desc-phone">
            <span>Phone: +1234568</span>
            <span>E-mail: +1234568</span>
            <span className="desc-other">Other: +1234568</span>
          </div>
        </div>
      </div>
      <div className="service">
        <h3>Some of our services</h3>
        <p>
          Team consists of professional and experienced consultants,
          technicians, engineers, designers and solution architects who work
          with you to find the best possible solution for your IT environment.
        </p>

        <div className="serivesBox">
          {/* {serivesIcon.map((serive) => (
            // <ServicesBox {...serive} key={serive.id} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

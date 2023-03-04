import ContactUs from "./pages/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Portfolio from "./pages/Portfolio/Portfolio";
import AboutUs from "./pages/AboutUs/AboutUs";
import Terms from "./pages/Terms/Terms";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/AboutUs", element: <AboutUs /> },
  { path: "/ContactUs", element: <ContactUs /> },
  { path: "/Service", element: <Services /> },
  { path: "/Portfolio", element: <Portfolio /> },
  { path : "/Terms" , element: <Terms />}
];
export default routes;

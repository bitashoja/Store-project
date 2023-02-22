
import ContactUs from './pages/ContactUs/ContactUs';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutUs from './pages/AboutUs/AboutUs';

const route = [
    {path:"/" , element: < Home/>},
    {path:"/AboutUs" , element : <AboutUs />},
    {path : '/ContactUs' , element : <ContactUs />},
    {path : '/Service' , element : < Services />},
    {path : '/Portfolio' , element : < Portfolio />}
];
export default route;